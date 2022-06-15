import dotenv from "dotenv"
import { Storage } from "@aws-amplify/storage"
import aws_exports from "../aws-exports"
import { NodeStatus, NodeType, AssetType, EdgeType, ModelSortDirection } from "../API"
import { configureWith, auth } from "../auth"
//import * as jqs from "../lib/graphql/json_queries"
//import * as jms from "../lib/graphql/json_mutations"
import { createReadStream, readFile, readFileSync, promises } from "fs"
//import FormData from "form-data"

import * as api from "../API"
//import * as qs from "../lib/graphql/queries"
//import { CRUD, gen_GQL_batch_json } from "../lib/utils"
//import { CRUD } from "../lib/utils"
import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import { EnumType, jsonToGraphQLQuery } from "json-to-graphql-query"

import { fetchGql } from "../utils"
import { assetProps2GqlJsonCRUDs } from "../CRUD"

dotenv.config()
configureWith(aws_exports)

const id = "longrandomstringthatsmyID2"
const _node = {
  status: NodeStatus.PRIVATE,
  type: NodeType.WEB_SLAB,
  id,
}

const _asset = {
  nodeID: id, // connect the assetPr/asset to the Gem node
  id: "thiswouldbeanotehrlongID1",
  name: "alt text for image 2",
  content:
    "https://public.govdelivery.com/system/images/72747/original/Census%20Registered%20Banner%20%28High-res%29.png?1553871440",
  type: AssetType.TXT_TXT,
}

function streamToBlob(stream, mimeType) {
  if (mimeType != null && typeof mimeType !== "string") {
    throw new Error("Invalid mimetype, expected string.")
  }
  return new Promise((resolve, reject) => {
    const chunks = []
    stream
      .on("data", chunk => chunks.push(chunk))
      .once("end", () => {
        const blob = mimeType != null ? new Blob(chunks, { type: mimeType }) : new Blob(chunks)
        resolve(blob)
      })
      .once("error", reject)
  })
}

auth
  .logIn({ user: process.env.ADMIN_EMAIL, pass: process.env.ADMIN_PASS })
  .catch(e => console.error("error:", JSON.stringify(e, null, 4)))
  // @ts-ignore
  .then(async payload => {
    //console.log({ payload })

    const { json, call } = assetProps2GqlJsonCRUDs({
      description: "some description",
      title: "some title",
    })

    const { R: read_json } = json
    const { R: read_call } = call
    const res = await read_call({ nodeID: "some id" })
    console.log("RESULT:", res)

    /*
    const res = read_json({
      nodeID: "some id",
      //index: 0,
    })

    const gql = jsonToGraphQLQuery({ query: res }, { pretty: true })

    console.log({ res })
    console.log({ gql })
    */

    // 🔥

    //const form = new FormData()

    //const file = createReadStream("./tests/assets/bot-cropped.jpg")

    //const blob = await streamToBlob(file, "image/jpeg")
    //form.append("form-file", file)
    //const fileForUpload = new File(
    //    [ blob ],
    //    "robot.jpg", //
    //    { type: "image/jpeg" }, //
    //)
    //const stuff = await storeObject({
    //    fileForUpload,
    //    id            : "testingFileUpload1",
    //    nodeID       : "testNode1",
    //    type          : AssetType.A_IMAGE,
    //    index         : 1,
    //})
    //console.log({ stuff })
    // 🔥

    // WORKS 🥳
    //const json = gen_GQL_batch_json(
    //    [
    //        jms.createNode({
    //            input: {
    //                status: api.NodeStatus.DRAFT,
    //                type: api.NodeType.H_AUTHOR,
    //                id: "logan-author-2",
    //            },
    //        }),
    //        jms.createNode({
    //            input: {
    //                status: api.NodeStatus.DRAFT,
    //                type: api.NodeType.A_ARTICLE,
    //                id: "logan-article-2",
    //            },
    //        }),
    //        jms.createEdge({
    //            input: {
    //                type: api.EdgeType.AUTHORED,
    //                id: "authored-edge-2",
    //            },
    //        }),
    //        jms.createEdgeNode({
    //            input: {
    //                edgeID: "authored-edge-2",
    //                nodeID: "logan-author-2",
    //            },
    //        }),
    //        jms.createEdgeNode({
    //            input: {
    //                edgeID: "authored-edge-2",
    //                nodeID: "logan-article-2",
    //            },
    //        }),
    //    ],
    //    "mutation",
    //)
  })
