import * as API from "../API"
import { replaceEnums } from "./replaceEnums"
import * as MUT from "../graphql/mutations"
import * as QRY from "../graphql/queries"
import * as SUB from "../graphql/subscriptions"
import { shortUUID } from "./shortUUID"
import { fetchGql } from "./fetchGql"
import { jsonToGraphQLQuery } from "json-to-graphql-query"
/*
templater is designed to provide a React component a way to
CRUD &/ hydrate the data it needs to function. It is paired
to a React component that serves a particular access to the
DB

through the compiler, the assets are created in a specific
order so that they can be read into a resulting object with an API

returns a crud function configured with custom api (POJO types)
*/

export type ValidationType =
  | {
      max_length: Number
    }
  | API.ModelAssetConditionInput

export type AssetInput = Partial<{
  type: API.AssetType
  validation: ValidationType
}>

export const default_alias_values = {
  title: "This title is 55 characters (recommended). Must be < 95",
  description: "This description is 55 characters, but should be <= 200",
  quote: "This quote is `markdown` __enabled__!",
}

export type AssetDictionary = {
  [key in keyof typeof default_alias_values]: AssetInput
}

export const enum_alias_dict: AssetDictionary = {
  title: {
    type: API.AssetType.OG_TITLE,
    validation: {
      max_length: 95,
    },
  },
  description: {
    type: API.AssetType.OG_DESCRIPTION,
    validation: {
      max_length: 200,
    },
  },
  quote: {
    type: API.AssetType.MD_SHORT,
    validation: {
      //  and: {
      //    max_length: 200,
      //    nodeID: true,
      //  },
    },
  },
}

export const validation_condition_dict = {
  max_length: length => ({
    value: {
      size: {
        lt: length,
      },
    },
  }),
}

export const AssetKeys = {
  id: true,
  key: true,
  nodeID: true,
  type: true,
  index: true,
  value: true,
  createdAt: true,
  updatedAt: true,
}

export const NodeKeys = {
  name: true,
  index: true,
  type: true,
  status: true,
  owner: true,
  editors: true,
  readers: true,
  editorGroups: true,
  readerGroups: true,
  id: true,
  createdAt: true,
  updatedAt: true,
  ledgerID: true,
}

/*
                component
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
export const assetTemplate2GqlJsonCRUDs = (fields: Partial<typeof default_alias_values>) => {
  const { description } = fields
  // keys are mapped to their index upon create so they
  // maintain their correct reference when used
  const key2index = Object.entries(fields).reduce((a, c, i, d) => {
    const [k, v] = c
    return { ...a, [k]: i }
  }, {})

  ///////////////////////////////////////////////////
  ///////////////////////////////////// CREATE //////
  ///////////////////////////////////////////////////

  // returns a batch of graphql aliases for CRUD ops:
  const C_json = (nodeID = "", props = fields) => {
    if (!nodeID) throw Error("No nodeID provided")

    return Object.entries(props).reduce((a, c, i, d) => {
      const [k, v] = c
      const batch_key = `createAsset_${i}`

      const input: API.CreateAssetInput = {
        key: k,
        nodeID,
        type: enum_alias_dict[k].type,
        index: key2index[k],
        value: v,
      }

      // TODO:
      const condition /* : API.ModelAssetConditionInput */ = Object.entries(
        enum_alias_dict[k].validation
      )

      const json = {
        __aliasFor: "createAsset",
        __args: {
          input: replaceEnums(input),
          //...(condition && { condition: enumerator(condition) },
        },
        ...AssetKeys,
      }

      return { ...a, [batch_key]: json }
    }, {} as Record<string, any>)
  }

  const C_call = async (nodeID = "", index = 0) => {
    const json = {
      __args: { id: nodeID },
    }
    //const results = await
  }

  ///////////////////////////////////////////////////
  ///////////////////////////////////// READ ////////
  ///////////////////////////////////////////////////

  // read a specific subset of assets
  const R_call = async ({
    nodeID,
    index,
    aliasFor,
  }: {
    nodeID: string
    index?: number
    aliasFor?: string
  }) => {
    // enable batching multiple nodes - for multi-node
    // components - and do the same key2index trick for them
    let json = {
      ...(!!index && { __aliasFor: aliasFor }),
      __args: { id: nodeID },
      ...NodeKeys,
      assets: {
        items: {
          ...AssetKeys,
        },
      },
    }

    if (!!index) {
      return { [`${aliasFor}_${index}`]: json }
    }

    const gql = jsonToGraphQLQuery({ query: json })

    //const dummy = {
    //  assets: {
    //    items: [
    //      {
    //        id: "2",
    //        key: "description",
    //        nodeID: "",
    //        type: "",
    //        index: "",
    //        value: "some description",
    //        createdAt: "",
    //        updatedAt: "",
    //      },
    //      {
    //        id: "2",
    //        key: "title",
    //        nodeID: "",
    //        type: "",
    //        index: "",
    //        value: "some title",
    //        createdAt: "",
    //        updatedAt: "",
    //      },
    //    ],
    //  },
    //}

    // map respose to object { key: value } pairs
    const res = await fetchGql({
      query: gql,
      variables: {},
    })

    const assets = res?.assets?.items // dummy?.assets?.items

    if (!assets) {
      console.warn("No Assets for this Node")
      return {}
    }

    const mapped = assets.reduce((a, c, i, d) => {
      const { key, value, index } = c
      return { ...a, [key]: { value, index, meta: enum_alias_dict[key] } }
    }, {})

    return mapped
    //return !!index
    //  ? { [`${aliasFor}_${index}`]: json, [`${aliasFor}_${index + 1}`]: json }
    //  : { [aliasFor]: json } // { json, json2: json }
  }

  ///////////////////////////////////////////////////
  ///////////////////////////////////// UPDATE //////
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
        type: enum_alias_dict[k].type,
        index: key2index[k],
        value: v,
      }

      return { ...a, [batch_key]: "TODO" }
    }, {})
  }

  ///////////////////////////////////////////////////
  ///////////////////////////////////// DELETE //////
  ///////////////////////////////////////////////////

  const D = () => ({})

  /**
   * - creates a function that "remembers" the key2index
   * - create graphql mutations and queries (JSON -> json-to-graphql)
   * - create functions that can call 1.
   */
  const json = { C: C_json }
  const call = { C: C_call, R: R_call }
  return { json, call, key2index }
}
