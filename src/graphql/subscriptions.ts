/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAsset = /* GraphQL */ `
  subscription OnCreateAsset($owner: String) {
    onCreateAsset(owner: $owner) {
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
export const onUpdateAsset = /* GraphQL */ `
  subscription OnUpdateAsset($owner: String) {
    onUpdateAsset(owner: $owner) {
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
export const onDeleteAsset = /* GraphQL */ `
  subscription OnDeleteAsset($owner: String) {
    onDeleteAsset(owner: $owner) {
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
export const onCreateLedger = /* GraphQL */ `
  subscription OnCreateLedger($owner: String) {
    onCreateLedger(owner: $owner) {
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
export const onUpdateLedger = /* GraphQL */ `
  subscription OnUpdateLedger($owner: String) {
    onUpdateLedger(owner: $owner) {
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
export const onDeleteLedger = /* GraphQL */ `
  subscription OnDeleteLedger($owner: String) {
    onDeleteLedger(owner: $owner) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String) {
    onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String) {
    onUpdateEvent(owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String) {
    onDeleteEvent(owner: $owner) {
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
