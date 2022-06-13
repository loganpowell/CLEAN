import * as API from "../API"
import { EnumType, jsonToGraphQLQuery } from "json-to-graphql-query"
import { replaceEnums } from "./enumerator"
import * as MUT from "../graphql/mutations"
import * as QRY from "../graphql/queries"
import * as SUB from "../graphql/subscriptions"
import { shortUUID } from "./shortUUID"
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
            and: {
                max_length: 200,
                nodeID: true,
            },
        },
    },
}

export const validation_condition_dict = {
    max_length: (length) => ({
        value: {
            size: {
                lt: length,
            },
        },
    }),
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
const assetTemplate2GqlJsonCRUDs = (
    nodeID,
    fields: Partial<typeof default_alias_values>
) => {
    if (!nodeID) throw Error("No nodeID provided")

    const { description } = fields
    // keys are mapped to their index upon create so they
    // maintain their correct reference when used
    const key2index = Object.entries(fields).reduce((a, c, i, d) => {
        const [k, v] = c
        return { ...a, [k]: i }
    }, {})

    /**
     * returns a batch of graphql aliases for CRUD ops:
     */
    const C = (props = fields) =>
        Object.entries(props).reduce((a, c, i, d) => {
            const [k, v] = c
            const batch_key = `asset_${i}`

            const input: API.CreateAssetInput = {
                key: k,
                nodeID,
                type: enum_alias_dict[k].type,
                index: key2index[k],
                value: v,
            }

            const condition /* : API.ModelAssetConditionInput */ =
                Object.entries(enum_alias_dict[k].validation)

            const json = {
                __aliasFor: "createAsset",
                __args: {
                    input: replaceEnums(input),
                    //...(condition && { condition: enumerator(condition) },
                },
                id: true,
                //...assetFields,
            }

            return { ...a, [batch_key]: json }
        }, {} as Record<string, any>)

    const R = () => ({})
    const U = () => ({})
    const D = () => ({})

    /**
     * - creates a function that "remembers" the key2index
     * - create graphql mutations and queries (JSON -> json-to-graphql)
     * - create functions that can call 1.
     */
    return { C, key2index }
}

const { C } = assetTemplate2GqlJsonCRUDs("some_id", {
    description: "some description",
    title: "some title",
}) //?

const query = C({
    title: "bleep",
    description: "bloop",
}) //?

jsonToGraphQLQuery({ mutation: query }) //?

const ideaReadFn = ({ heading, title }) => {}
