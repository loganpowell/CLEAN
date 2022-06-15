/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateLedger = /* GraphQL */ `
  mutation UpdateLedger(
    $input: UpdateLedgerInput!
    $condition: ModelLedgerConditionInput
  ) {
    updateLedger(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      nodeID
      node {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      events {
        items {
          id
          createdAt
          updatedAt
          ledgerID
          type
          payload
          ledgerEventsId
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteLedger = /* GraphQL */ `
  mutation DeleteLedger(
    $input: DeleteLedgerInput!
    $condition: ModelLedgerConditionInput
  ) {
    deleteLedger(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      nodeID
      node {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      events {
        items {
          id
          createdAt
          updatedAt
          ledgerID
          type
          payload
          ledgerEventsId
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      ledgerID
      ledger {
        id
        createdAt
        updatedAt
        nodeID
        node {
          id
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        events {
          nextToken
        }
        owner
      }
      type
      payload
      ledgerEventsId
      owner
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      ledgerID
      ledger {
        id
        createdAt
        updatedAt
        nodeID
        node {
          id
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        events {
          nextToken
        }
        owner
      }
      type
      payload
      ledgerEventsId
      owner
    }
  }
`;
export const createNode = /* GraphQL */ `
  mutation CreateNode(
    $input: CreateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    createNode(input: $input, condition: $condition) {
      id
      editors
      readers
      editorGroups
      readerGroups
      createdAt
      updatedAt
      ledgerID
      ledger {
        id
        createdAt
        updatedAt
        nodeID
        node {
          id
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        events {
          nextToken
        }
        owner
      }
      objects {
        items {
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          objectID
          subjectID
          id
          type
          owner
          weight
        }
        nextToken
      }
      subjects {
        items {
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          objectID
          subjectID
          id
          type
          owner
          weight
        }
        nextToken
      }
      name
      index
      type
      status
      owner
      assets {
        items {
          createdAt
          updatedAt
          nodeID
          id
          key
          index
          type
          value
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateNode = /* GraphQL */ `
  mutation UpdateNode(
    $input: UpdateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    updateNode(input: $input, condition: $condition) {
      id
      editors
      readers
      editorGroups
      readerGroups
      createdAt
      updatedAt
      ledgerID
      ledger {
        id
        createdAt
        updatedAt
        nodeID
        node {
          id
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        events {
          nextToken
        }
        owner
      }
      objects {
        items {
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          objectID
          subjectID
          id
          type
          owner
          weight
        }
        nextToken
      }
      subjects {
        items {
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          objectID
          subjectID
          id
          type
          owner
          weight
        }
        nextToken
      }
      name
      index
      type
      status
      owner
      assets {
        items {
          createdAt
          updatedAt
          nodeID
          id
          key
          index
          type
          value
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteNode = /* GraphQL */ `
  mutation DeleteNode(
    $input: DeleteNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    deleteNode(input: $input, condition: $condition) {
      id
      editors
      readers
      editorGroups
      readerGroups
      createdAt
      updatedAt
      ledgerID
      ledger {
        id
        createdAt
        updatedAt
        nodeID
        node {
          id
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        events {
          nextToken
        }
        owner
      }
      objects {
        items {
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          objectID
          subjectID
          id
          type
          owner
          weight
        }
        nextToken
      }
      subjects {
        items {
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          objectID
          subjectID
          id
          type
          owner
          weight
        }
        nextToken
      }
      name
      index
      type
      status
      owner
      assets {
        items {
          createdAt
          updatedAt
          nodeID
          id
          key
          index
          type
          value
          owner
        }
        nextToken
      }
    }
  }
`;
export const createEdge = /* GraphQL */ `
  mutation CreateEdge(
    $input: CreateEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    createEdge(input: $input, condition: $condition) {
      editors
      readers
      editorGroups
      readerGroups
      createdAt
      updatedAt
      objectID
      object {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      subjectID
      subject {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      id
      type
      owner
      weight
    }
  }
`;
export const updateEdge = /* GraphQL */ `
  mutation UpdateEdge(
    $input: UpdateEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    updateEdge(input: $input, condition: $condition) {
      editors
      readers
      editorGroups
      readerGroups
      createdAt
      updatedAt
      objectID
      object {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      subjectID
      subject {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      id
      type
      owner
      weight
    }
  }
`;
export const deleteEdge = /* GraphQL */ `
  mutation DeleteEdge(
    $input: DeleteEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
    deleteEdge(input: $input, condition: $condition) {
      editors
      readers
      editorGroups
      readerGroups
      createdAt
      updatedAt
      objectID
      object {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      subjectID
      subject {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      id
      type
      owner
      weight
    }
  }
`;
export const createAsset = /* GraphQL */ `
  mutation CreateAsset(
    $input: CreateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    createAsset(input: $input, condition: $condition) {
      createdAt
      updatedAt
      nodeID
      node {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      id
      key
      index
      type
      value
      owner
    }
  }
`;
export const updateAsset = /* GraphQL */ `
  mutation UpdateAsset(
    $input: UpdateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    updateAsset(input: $input, condition: $condition) {
      createdAt
      updatedAt
      nodeID
      node {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      id
      key
      index
      type
      value
      owner
    }
  }
`;
export const deleteAsset = /* GraphQL */ `
  mutation DeleteAsset(
    $input: DeleteAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    deleteAsset(input: $input, condition: $condition) {
      createdAt
      updatedAt
      nodeID
      node {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      id
      key
      index
      type
      value
      owner
    }
  }
`;
export const createLedger = /* GraphQL */ `
  mutation CreateLedger(
    $input: CreateLedgerInput!
    $condition: ModelLedgerConditionInput
  ) {
    createLedger(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      nodeID
      node {
        id
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        ledgerID
        ledger {
          id
          createdAt
          updatedAt
          nodeID
          owner
        }
        objects {
          nextToken
        }
        subjects {
          nextToken
        }
        name
        index
        type
        status
        owner
        assets {
          nextToken
        }
      }
      events {
        items {
          id
          createdAt
          updatedAt
          ledgerID
          type
          payload
          ledgerEventsId
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      ledgerID
      ledger {
        id
        createdAt
        updatedAt
        nodeID
        node {
          id
          editors
          readers
          editorGroups
          readerGroups
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        events {
          nextToken
        }
        owner
      }
      type
      payload
      ledgerEventsId
      owner
    }
  }
`;
