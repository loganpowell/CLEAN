import { jsonToGraphQLQuery } from "json-to-graphql-query"
import * as API from "../API"
import { replaceEnums } from "./replaceEnums"
import * as MUT from "../graphql/mutations"
import * as QRY from "../graphql/queries"
import * as SUB from "../graphql/subscriptions"
import { shortUUID, fetchGql, squash_assets } from "../utils"
import { DEFAULT_ASSET_VALUES, AssetKeys, NodeKeys, ASSET_ENUM_DICT } from "../_api"
/*
templater is designed to provide a React component a way to
CRUD &/ hydrate the data it needs to function. It is paired
to a React component that serves a particular access to the
DB

through the compiler, the assets are created in a specific
order so that they can be read into a resulting object with an API

returns a crud function configured with custom api (POJO types)
*/

/*
             node (component)
             /             \
         node               node
       /  |  \             /  |  \
  asset asset asset   asset asset asset
*/

/**
 * Higher-order function that takes an object with { [alias]:
 * "default" } and returns a function that remembers the
 * order of the original configuraion. The returned function
 * then can create, read, update, and delete assets created
 * for a given component, given the nodeID wherein the
 * assets reside
 */
export const assetProps2GqlJsonCRUDs = (fields: Partial<typeof DEFAULT_ASSET_VALUES>) => {
  const { description } = fields
  // keys are mapped to their index upon create so they
  // maintain their correct reference when used
  const key2index = Object.entries(fields).reduce((a, c, i, d) => {
    const [k, v] = c
    return { ...a, [k]: i }
  }, {})

  ///////////////////////////////////////////////////
  ////////////// READ ///////////////////////////////
  ///////////////////////////////////////////////////

  const R_json = ({
    nodeID,
    index,
    aliasFor = "getNode",
  }: {
    nodeID: string
    index?: number
    aliasFor?: string
  }) => {
    let json = {
      ...(!(index === undefined) && { __aliasFor: aliasFor }),
      __args: { id: nodeID },
      ...NodeKeys,
      assets: {
        items: {
          ...AssetKeys,
        },
      },
    }

    // enable batching multiple nodes - for multi-node
    // components - and do the same key2index trick for them
    if (!(index === undefined)) {
      return { [`${aliasFor}_${index}`]: json }
    }

    return { [aliasFor]: json }
  }

  // read a specific subset of assets from a single node
  const R_call = async ({ nodeID }: { nodeID: string }) => {
    let json = R_json({ nodeID })

    //console.log({ json })

    const gql = jsonToGraphQLQuery({ query: json }, { pretty: true })

    //console.log(gql)

    // map respose to object { key: value } pairs
    const res = await fetchGql({
      query: gql,
      variables: {},
    })

    return squash_assets(res, "R_call")
  }

  ///////////////////////////////////////////////////
  //////////////////// UPDATE ///////////////////////
  ///////////////////////////////////////////////////

  // update a specific subset of assets by addmittance and
  // lookup via index
  const U = async (nodeID = "", props = fields) => {
    if (!nodeID) throw Error("No nodeID provided")

    return Object.entries(props).reduce((a, c, i, d) => {
      const [k, v] = c
      const batch_key = `updateAsset_${i}`

      /**
       * first get all the assets attached to the node then
       * update the ones located at indexes, which are availed
       * in the arguments
       */

      const input: API.UpdateAssetInput = {
        id: "TODO",
        key: k,
        nodeID,
        type: ASSET_ENUM_DICT[k].type,
        index: key2index[k],
        value: v,
      }

      return { ...a, [batch_key]: "TODO" }
    }, {})
  }

  ///////////////////////////////////////////////////
  ////////////////////// DELETE /////////////////////
  ///////////////////////////////////////////////////

  const D = () => ({})

  ///////////////////////////////////////////////////
  /////////////////// CREATE ////////////////////////
  ///////////////////////////////////////////////////

  // returns a batch of graphql aliases for CRUD ops:
  const C_json = ({ nodeID, props = fields }) => {
    if (!nodeID) throw Error("No nodeID provided")

    return Object.entries(props).reduce((a, c, i, d) => {
      const [k, v] = c
      const batch_key = `createAsset_${i}`

      const input: API.CreateAssetInput = {
        key: k,
        nodeID,
        type: ASSET_ENUM_DICT[k].type,
        index: key2index[k],
        value: v,
      }

      // TODO:
      const condition /* : API.ModelAssetConditionInput */ = Object.entries(
        ASSET_ENUM_DICT[k].validation
      )

      const json = {
        __aliasFor: "createAsset",
        __args: {
          input: replaceEnums(input),
          //...(condition && { condition: enumerator(condition) },
          // FIXME: https://www.alexdebrie.com/posts/dynamodb-condition-expressions/
          condition: replaceEnums({
            and: [
              { not: { nodeID: { eq: nodeID } } },
              { not: { value: { attributeExists: false } } },
            ],
          }),
        },
        ...AssetKeys,
      }

      return { ...a, [batch_key]: json }
    }, {} as Record<string, any>)
  }

  const C_call = async ({ nodeID, props = fields }) => {
    const json = C_json({ nodeID, props })

    const gql = jsonToGraphQLQuery({ mutation: json }, { pretty: true })

    //console.log(gql)

    // map respose to object { key: value } pairs
    const res = await fetchGql({
      query: gql,
      variables: {},
    })
  }
  /**
   * - creates a function that "remembers" the key2index
   * - create graphql mutations and queries (JSON -> json-to-graphql)
   * - create functions that can call 1.
   */
  const json = { C: C_json, R: R_json }
  const call = { C: C_call, R: R_call }
  return { json, call, key2index }
}
