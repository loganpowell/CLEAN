/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNode = /* GraphQL */ `
  query GetNode($id: ID!) {
    getNode(id: $id) {
      editors
      readers
      editorGroups
      readerGroups
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
          editors
          readers
          editorGroups
          readerGroups
          id
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
export const listNodes = /* GraphQL */ `
  query ListNodes(
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        editors
        readers
        editorGroups
        readerGroups
        id
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
      nextToken
    }
  }
`;
export const nodesByStatusType = /* GraphQL */ `
  query NodesByStatusType(
    $status: NodeStatus!
    $typeUpdatedAt: ModelNodeNodes_by_status_type_updatedAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByStatusType(
      status: $status
      typeUpdatedAt: $typeUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        editors
        readers
        editorGroups
        readerGroups
        id
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
      nextToken
    }
  }
`;
export const nodesByOwnerStatus = /* GraphQL */ `
  query NodesByOwnerStatus(
    $owner: String!
    $statusUpdatedAt: ModelNodeNodes_by_owner_status_updatedAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByOwnerStatus(
      owner: $owner
      statusUpdatedAt: $statusUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        editors
        readers
        editorGroups
        readerGroups
        id
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
      nextToken
    }
  }
`;
export const nodesByOwnerType = /* GraphQL */ `
  query NodesByOwnerType(
    $owner: String!
    $typeUpdatedAt: ModelNodeNodes_by_owner_type_updatedAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByOwnerType(
      owner: $owner
      typeUpdatedAt: $typeUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        editors
        readers
        editorGroups
        readerGroups
        id
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
      nextToken
    }
  }
`;
export const getEdge = /* GraphQL */ `
  query GetEdge($id: ID!) {
    getEdge(id: $id) {
      editors
      readers
      editorGroups
      readerGroups
      createdAt
      updatedAt
      objectID
      object {
        editors
        readers
        editorGroups
        readerGroups
        id
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
        editors
        readers
        editorGroups
        readerGroups
        id
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
export const listEdges = /* GraphQL */ `
  query ListEdges(
    $id: ID
    $filter: ModelEdgeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEdges(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        objectID
        object {
          editors
          readers
          editorGroups
          readerGroups
          id
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        subjectID
        subject {
          editors
          readers
          editorGroups
          readerGroups
          id
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        id
        type
        owner
        weight
      }
      nextToken
    }
  }
`;
export const edgesByType = /* GraphQL */ `
  query EdgesByType(
    $type: EdgeType!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEdgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    edgesByType(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        objectID
        object {
          editors
          readers
          editorGroups
          readerGroups
          id
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        subjectID
        subject {
          editors
          readers
          editorGroups
          readerGroups
          id
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        id
        type
        owner
        weight
      }
      nextToken
    }
  }
`;
export const edgesByOwnerType = /* GraphQL */ `
  query EdgesByOwnerType(
    $owner: String!
    $typeUpdatedAt: ModelEdgeEdges_by_owner_typeCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEdgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    edgesByOwnerType(
      owner: $owner
      typeUpdatedAt: $typeUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        editors
        readers
        editorGroups
        readerGroups
        createdAt
        updatedAt
        objectID
        object {
          editors
          readers
          editorGroups
          readerGroups
          id
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        subjectID
        subject {
          editors
          readers
          editorGroups
          readerGroups
          id
          createdAt
          updatedAt
          ledgerID
          name
          index
          type
          status
          owner
        }
        id
        type
        owner
        weight
      }
      nextToken
    }
  }
`;
export const getLedger = /* GraphQL */ `
  query GetLedger($id: ID!) {
    getLedger(id: $id) {
      id
      createdAt
      updatedAt
      nodeID
      node {
        editors
        readers
        editorGroups
        readerGroups
        id
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
export const listLedgers = /* GraphQL */ `
  query ListLedgers(
    $filter: ModelLedgerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLedgers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        nodeID
        node {
          editors
          readers
          editorGroups
          readerGroups
          id
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
          editors
          readers
          editorGroups
          readerGroups
          id
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        type
        payload
        ledgerEventsId
        owner
      }
      nextToken
    }
  }
`;
