import { EnumType, jsonToGraphQLQuery } from "json-to-graphql-query"
import { assetTemplate2GqlJsonCRUDs } from "./templates"

const { json, call } = assetTemplate2GqlJsonCRUDs({
  description: "some description",
  title: "some title",
})

const { C } = json

const mutation = C("some id", {
  title: "bleep",
  description: "bloop",
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
  const query = await R({ nodeID: "some id", aliasFor: "someNodes", index: 1 })
  console.log({ query })

  const query2 = await R({ nodeID: "some id" })
  console.log({ query2 })
  return jsonToGraphQLQuery({ query }, { pretty: true })
}

test_R_call() //?
