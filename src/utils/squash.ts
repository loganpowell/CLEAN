import * as API from "../API"

export type GetNodeAssets = {
  data: {
    getNode: Partial<API.Node>
  }
}

export const squash_assets = (res: GetNodeAssets, caller_name = "R_call") => {
  const node = res?.data?.getNode

  if (!node) {
    console.warn(caller_name, ": No Node found by this nodeID")
    return {}
  }

  const assets = node?.assets?.items

  if (!assets.length) {
    console.warn(caller_name, ": No Assets for this Node")
    return {}
  }

  const mapped = assets.reduce((a, c, i, d) => {
    const { key, value, index }: API.CreateAssetInput = c
    return { ...a, [key]: value }
  }, {})

  return mapped
}
