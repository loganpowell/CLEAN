import * as API from "../API"

export type ValidationType =
    | {
          max_length: Number
      }
    | API.ModelAssetConditionInput

export type AssetInput = Partial<{
    type: API.AssetType
    validation: ValidationType
}>

export type AssetDictionary = {
    [key in keyof typeof DEFAULT_ASSET_VALUES]: AssetInput
}

export const DEFAULT_ASSET_VALUES = {
    title: "This title is 55 characters (recommended). Must be < 95",
    description: "This description is 55 characters, but should be <= 200",
    quote: "This quote is `markdown` __enabled__!",
}

export const ASSET_ENUM_DICT: AssetDictionary = {
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
