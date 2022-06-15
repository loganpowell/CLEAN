import { EnumType, jsonToGraphQLQuery } from "json-to-graphql-query"
import { assetProps2GqlJsonCRUDs } from "./assets"

const { json, call } = assetProps2GqlJsonCRUDs({
  description: "some description",
  title: "some title",
})

const { C } = json

const mutation = C({
  nodeID: "some id",
  props: {
    title: "bleep",
    description: "bloop",
  },
})

jsonToGraphQLQuery({ mutation }, { pretty: true }) //?
/* graphql result =>
mutation {
  createAsset_0: createAsset(
    input: { key: "title", nodeID: "some id", type: OG_TITLE, index: 1, value: "bleep" }
  ) {
    id
  }
  createAsset_1: createAsset(
    input: { key: "description", nodeID: "some id", type: OG_DESCRIPTION, index: 0, value: "bloop" }
  ) {
    id
  }
}
*/

const { R } = call

const test_R_call = async () => {
  const query = await R({ nodeID: "some id" })
  console.log({ query })

  const query2 = await R({ nodeID: "some id" })
  console.log({ query2 })
  return jsonToGraphQLQuery({ query }, { pretty: true })
}

test_R_call() //?
