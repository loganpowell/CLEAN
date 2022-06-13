/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UpdateLedgerInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeID?: string | null,
};

export type ModelLedgerConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeID?: ModelIDInput | null,
  and?: Array< ModelLedgerConditionInput | null > | null,
  or?: Array< ModelLedgerConditionInput | null > | null,
  not?: ModelLedgerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Ledger = {
  __typename: "Ledger",
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeID: string,
  node?: Node | null,
  events?: ModelEventConnection | null,
  owner?: string | null,
};

export type Node = {
  __typename: "Node",
  editors?: Array< string | null > | null,
  readers?: Array< string | null > | null,
  editorGroups?: Array< string | null > | null,
  readerGroups?: Array< string | null > | null,
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  ledgerID?: string | null,
  ledger?: Ledger | null,
  objects?: ModelEdgeConnection | null,
  subjects?: ModelEdgeConnection | null,
  name?: string | null,
  index?: number | null,
  type: NodeType,
  status: NodeStatus,
  owner?: string | null,
  assets?: ModelAssetConnection | null,
};

export type ModelEdgeConnection = {
  __typename: "ModelEdgeConnection",
  items:  Array<Edge | null >,
  nextToken?: string | null,
};

export type Edge = {
  __typename: "Edge",
  editors?: Array< string | null > | null,
  readers?: Array< string | null > | null,
  editorGroups?: Array< string | null > | null,
  readerGroups?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  objectID: string,
  object?: Node | null,
  subjectID: string,
  subject?: Node | null,
  id: string,
  type?: EdgeType | null,
  owner?: string | null,
  weight?: number | null,
};

export enum EdgeType {
  AUTHORED = "AUTHORED",
  HAS_NEXT = "HAS_NEXT",
  HAS_CHILD = "HAS_CHILD",
}


export enum NodeType {
  R_ACCOUNT = "R_ACCOUNT",
  WEB_LANDING = "WEB_LANDING",
  WEB_SERIES = "WEB_SERIES",
  WEB_COLLECTION = "WEB_COLLECTION",
  WEB_META = "WEB_META",
  WEB_SLAB = "WEB_SLAB",
  CMP_TABLE = "CMP_TABLE",
  DIR = "DIR",
}


export enum NodeStatus {
  DELETED = "DELETED",
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  REMOVED = "REMOVED",
  REPLACED = "REPLACED",
  SHARED = "SHARED",
}


export type ModelAssetConnection = {
  __typename: "ModelAssetConnection",
  items:  Array<Asset | null >,
  nextToken?: string | null,
};

export type Asset = {
  __typename: "Asset",
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeID: string,
  node?: Node | null,
  id: string,
  key: string,
  index?: number | null,
  type: AssetType,
  value?: string | null,
  owner?: string | null,
};

export enum AssetType {
  DEPRECATED = "DEPRECATED",
  TXT_TXT = "TXT_TXT",
  TXT_CSV = "TXT_CSV",
  TXT_CSS = "TXT_CSS",
  TXT_HTML = "TXT_HTML",
  TXT_XML = "TXT_XML",
  TXT_ICS = "TXT_ICS",
  IMG = "IMG",
  IMG_TIFF = "IMG_TIFF",
  IMG_JPEG = "IMG_JPEG",
  IMG_JPG = "IMG_JPG",
  IMG_GIF = "IMG_GIF",
  IMG_PNG = "IMG_PNG",
  IMG_BMP = "IMG_BMP",
  IMG_SVG = "IMG_SVG",
  IMG_WEBP = "IMG_WEBP",
  AUD = "AUD",
  AUD_WEBA = "AUD_WEBA",
  AUD_AAC = "AUD_AAC",
  AUD_MP3 = "AUD_MP3",
  AUD_WAV = "AUD_WAV",
  AUD_OGA = "AUD_OGA",
  AUD_OPUS = "AUD_OPUS",
  VID = "VID",
  VID_WEBM = "VID_WEBM",
  VID_MP4 = "VID_MP4",
  VID_OGV = "VID_OGV",
  VID_AVI = "VID_AVI",
  VID_TS = "VID_TS",
  VID_MPEG = "VID_MPEG",
  APP_JSON = "APP_JSON",
  APP_JSONLD = "APP_JSONLD",
  APP_RTF = "APP_RTF",
  APP_PDF = "APP_PDF",
  APP_DOC = "APP_DOC",
  APP_DOCX = "APP_DOCX",
  APP_XLS = "APP_XLS",
  APP_XLSX = "APP_XLSX",
  APP_PPT = "APP_PPT",
  APP_ODP = "APP_ODP",
  APP_ODS = "APP_ODS",
  APP_ODT = "APP_ODT",
  APP_ICO = "APP_ICO",
  ZIP_ZIP = "ZIP_ZIP",
  ZIP_RAR = "ZIP_RAR",
  ZIP_7Z = "ZIP_7Z",
  OG_TITLE = "OG_TITLE",
  OG_DESCRIPTION = "OG_DESCRIPTION",
  OG_TYPE = "OG_TYPE",
  OG_IMAGE = "OG_IMAGE",
  OG_AUDIO = "OG_AUDIO",
  OG_VIDEO = "OG_VIDEO",
  MD_LONG = "MD_LONG",
  MD_SHORT = "MD_SHORT",
  MD_LEDE = "MD_LEDE",
  META_DATA = "META_DATA",
  META_MAP = "META_MAP",
  META_VIZ = "META_VIZ",
  META_API = "META_API",
  FILE = "FILE",
  FILE_PDF = "FILE_PDF",
  FILE_KML = "FILE_KML",
  FILE_SHP = "FILE_SHP",
  FILE_CSV = "FILE_CSV",
  FILE_JSON = "FILE_JSON",
}


export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  ledgerID: string,
  ledger?: Ledger | null,
  type: EventType,
  payload: string,
  ledgerEventsId?: string | null,
  owner?: string | null,
};

export enum EventType {
  CREATE = "CREATE",
  READ = "READ",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}


export type DeleteLedgerInput = {
  id: string,
};

export type UpdateEventInput = {
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  ledgerID?: string | null,
  type?: EventType | null,
  payload?: string | null,
  ledgerEventsId?: string | null,
};

export type ModelEventConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  ledgerID?: ModelIDInput | null,
  type?: ModelEventTypeInput | null,
  payload?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  ledgerEventsId?: ModelIDInput | null,
};

export type ModelEventTypeInput = {
  eq?: EventType | null,
  ne?: EventType | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreateNodeInput = {
  editors?: Array< string | null > | null,
  readers?: Array< string | null > | null,
  editorGroups?: Array< string | null > | null,
  readerGroups?: Array< string | null > | null,
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  ledgerID?: string | null,
  name?: string | null,
  index?: number | null,
  type: NodeType,
  status: NodeStatus,
  owner?: string | null,
};

export type ModelNodeConditionInput = {
  editors?: ModelStringInput | null,
  readers?: ModelStringInput | null,
  editorGroups?: ModelStringInput | null,
  readerGroups?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  ledgerID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  index?: ModelIntInput | null,
  type?: ModelNodeTypeInput | null,
  status?: ModelNodeStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelNodeConditionInput | null > | null,
  or?: Array< ModelNodeConditionInput | null > | null,
  not?: ModelNodeConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelNodeTypeInput = {
  eq?: NodeType | null,
  ne?: NodeType | null,
};

export type ModelNodeStatusInput = {
  eq?: NodeStatus | null,
  ne?: NodeStatus | null,
};

export type UpdateNodeInput = {
  editors?: Array< string | null > | null,
  readers?: Array< string | null > | null,
  editorGroups?: Array< string | null > | null,
  readerGroups?: Array< string | null > | null,
  id: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  ledgerID?: string | null,
  name?: string | null,
  index?: number | null,
  type?: NodeType | null,
  status?: NodeStatus | null,
  owner?: string | null,
};

export type DeleteNodeInput = {
  id: string,
};

export type CreateEdgeInput = {
  editors?: Array< string | null > | null,
  readers?: Array< string | null > | null,
  editorGroups?: Array< string | null > | null,
  readerGroups?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  objectID: string,
  subjectID: string,
  id?: string | null,
  type?: EdgeType | null,
  owner?: string | null,
  weight?: number | null,
};

export type ModelEdgeConditionInput = {
  editors?: ModelStringInput | null,
  readers?: ModelStringInput | null,
  editorGroups?: ModelStringInput | null,
  readerGroups?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  objectID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  type?: ModelEdgeTypeInput | null,
  owner?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  and?: Array< ModelEdgeConditionInput | null > | null,
  or?: Array< ModelEdgeConditionInput | null > | null,
  not?: ModelEdgeConditionInput | null,
};

export type ModelEdgeTypeInput = {
  eq?: EdgeType | null,
  ne?: EdgeType | null,
};

export type UpdateEdgeInput = {
  editors?: Array< string | null > | null,
  readers?: Array< string | null > | null,
  editorGroups?: Array< string | null > | null,
  readerGroups?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  objectID?: string | null,
  subjectID?: string | null,
  id: string,
  type?: EdgeType | null,
  owner?: string | null,
  weight?: number | null,
};

export type DeleteEdgeInput = {
  id: string,
};

export type CreateAssetInput = {
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeID: string,
  id?: string | null,
  key: string,
  index?: number | null,
  type: AssetType,
  value?: string | null,
};

export type ModelAssetConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeID?: ModelIDInput | null,
  key?: ModelStringInput | null,
  index?: ModelIntInput | null,
  type?: ModelAssetTypeInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelAssetConditionInput | null > | null,
  or?: Array< ModelAssetConditionInput | null > | null,
  not?: ModelAssetConditionInput | null,
};

export type ModelAssetTypeInput = {
  eq?: AssetType | null,
  ne?: AssetType | null,
};

export type UpdateAssetInput = {
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeID?: string | null,
  id: string,
  key?: string | null,
  index?: number | null,
  type?: AssetType | null,
  value?: string | null,
};

export type DeleteAssetInput = {
  id: string,
};

export type CreateLedgerInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  nodeID: string,
};

export type CreateEventInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  ledgerID: string,
  type: EventType,
  payload: string,
  ledgerEventsId?: string | null,
};

export type ModelNodeFilterInput = {
  editors?: ModelStringInput | null,
  readers?: ModelStringInput | null,
  editorGroups?: ModelStringInput | null,
  readerGroups?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  ledgerID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  index?: ModelIntInput | null,
  type?: ModelNodeTypeInput | null,
  status?: ModelNodeStatusInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelNodeFilterInput | null > | null,
  or?: Array< ModelNodeFilterInput | null > | null,
  not?: ModelNodeFilterInput | null,
};

export type ModelNodeConnection = {
  __typename: "ModelNodeConnection",
  items:  Array<Node | null >,
  nextToken?: string | null,
};

export type ModelNodeNodes_by_status_type_updatedAtCompositeKeyConditionInput = {
  eq?: ModelNodeNodes_by_status_type_updatedAtCompositeKeyInput | null,
  le?: ModelNodeNodes_by_status_type_updatedAtCompositeKeyInput | null,
  lt?: ModelNodeNodes_by_status_type_updatedAtCompositeKeyInput | null,
  ge?: ModelNodeNodes_by_status_type_updatedAtCompositeKeyInput | null,
  gt?: ModelNodeNodes_by_status_type_updatedAtCompositeKeyInput | null,
  between?: Array< ModelNodeNodes_by_status_type_updatedAtCompositeKeyInput | null > | null,
  beginsWith?: ModelNodeNodes_by_status_type_updatedAtCompositeKeyInput | null,
};

export type ModelNodeNodes_by_status_type_updatedAtCompositeKeyInput = {
  type?: NodeType | null,
  updatedAt?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelNodeNodes_by_owner_status_updatedAtCompositeKeyConditionInput = {
  eq?: ModelNodeNodes_by_owner_status_updatedAtCompositeKeyInput | null,
  le?: ModelNodeNodes_by_owner_status_updatedAtCompositeKeyInput | null,
  lt?: ModelNodeNodes_by_owner_status_updatedAtCompositeKeyInput | null,
  ge?: ModelNodeNodes_by_owner_status_updatedAtCompositeKeyInput | null,
  gt?: ModelNodeNodes_by_owner_status_updatedAtCompositeKeyInput | null,
  between?: Array< ModelNodeNodes_by_owner_status_updatedAtCompositeKeyInput | null > | null,
  beginsWith?: ModelNodeNodes_by_owner_status_updatedAtCompositeKeyInput | null,
};

export type ModelNodeNodes_by_owner_status_updatedAtCompositeKeyInput = {
  status?: NodeStatus | null,
  updatedAt?: string | null,
};

export type ModelNodeNodes_by_owner_type_updatedAtCompositeKeyConditionInput = {
  eq?: ModelNodeNodes_by_owner_type_updatedAtCompositeKeyInput | null,
  le?: ModelNodeNodes_by_owner_type_updatedAtCompositeKeyInput | null,
  lt?: ModelNodeNodes_by_owner_type_updatedAtCompositeKeyInput | null,
  ge?: ModelNodeNodes_by_owner_type_updatedAtCompositeKeyInput | null,
  gt?: ModelNodeNodes_by_owner_type_updatedAtCompositeKeyInput | null,
  between?: Array< ModelNodeNodes_by_owner_type_updatedAtCompositeKeyInput | null > | null,
  beginsWith?: ModelNodeNodes_by_owner_type_updatedAtCompositeKeyInput | null,
};

export type ModelNodeNodes_by_owner_type_updatedAtCompositeKeyInput = {
  type?: NodeType | null,
  updatedAt?: string | null,
};

export type ModelEdgeFilterInput = {
  editors?: ModelStringInput | null,
  readers?: ModelStringInput | null,
  editorGroups?: ModelStringInput | null,
  readerGroups?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  objectID?: ModelIDInput | null,
  subjectID?: ModelIDInput | null,
  id?: ModelIDInput | null,
  type?: ModelEdgeTypeInput | null,
  owner?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  and?: Array< ModelEdgeFilterInput | null > | null,
  or?: Array< ModelEdgeFilterInput | null > | null,
  not?: ModelEdgeFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelEdgeEdges_by_owner_typeCompositeKeyConditionInput = {
  eq?: ModelEdgeEdges_by_owner_typeCompositeKeyInput | null,
  le?: ModelEdgeEdges_by_owner_typeCompositeKeyInput | null,
  lt?: ModelEdgeEdges_by_owner_typeCompositeKeyInput | null,
  ge?: ModelEdgeEdges_by_owner_typeCompositeKeyInput | null,
  gt?: ModelEdgeEdges_by_owner_typeCompositeKeyInput | null,
  between?: Array< ModelEdgeEdges_by_owner_typeCompositeKeyInput | null > | null,
  beginsWith?: ModelEdgeEdges_by_owner_typeCompositeKeyInput | null,
};

export type ModelEdgeEdges_by_owner_typeCompositeKeyInput = {
  type?: EdgeType | null,
  updatedAt?: string | null,
};

export type ModelLedgerFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  nodeID?: ModelIDInput | null,
  and?: Array< ModelLedgerFilterInput | null > | null,
  or?: Array< ModelLedgerFilterInput | null > | null,
  not?: ModelLedgerFilterInput | null,
};

export type ModelLedgerConnection = {
  __typename: "ModelLedgerConnection",
  items:  Array<Ledger | null >,
  nextToken?: string | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  ledgerID?: ModelIDInput | null,
  type?: ModelEventTypeInput | null,
  payload?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
  ledgerEventsId?: ModelIDInput | null,
};

export type UpdateLedgerMutationVariables = {
  input: UpdateLedgerInput,
  condition?: ModelLedgerConditionInput | null,
};

export type UpdateLedgerMutation = {
  updateLedger?:  {
    __typename: "Ledger",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID: string,
        type: EventType,
        payload: string,
        ledgerEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteLedgerMutationVariables = {
  input: DeleteLedgerInput,
  condition?: ModelLedgerConditionInput | null,
};

export type DeleteLedgerMutation = {
  deleteLedger?:  {
    __typename: "Ledger",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID: string,
        type: EventType,
        payload: string,
        ledgerEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    ledgerID: string,
    ledger?:  {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    type: EventType,
    payload: string,
    ledgerEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    ledgerID: string,
    ledger?:  {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    type: EventType,
    payload: string,
    ledgerEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateNodeMutationVariables = {
  input: CreateNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type CreateNodeMutation = {
  createNode?:  {
    __typename: "Node",
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    editorGroups?: Array< string | null > | null,
    readerGroups?: Array< string | null > | null,
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    ledgerID?: string | null,
    ledger?:  {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    objects?:  {
      __typename: "ModelEdgeConnection",
      items:  Array< {
        __typename: "Edge",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        objectID: string,
        subjectID: string,
        id: string,
        type?: EdgeType | null,
        owner?: string | null,
        weight?: number | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subjects?:  {
      __typename: "ModelEdgeConnection",
      items:  Array< {
        __typename: "Edge",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        objectID: string,
        subjectID: string,
        id: string,
        type?: EdgeType | null,
        owner?: string | null,
        weight?: number | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    name?: string | null,
    index?: number | null,
    type: NodeType,
    status: NodeStatus,
    owner?: string | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      items:  Array< {
        __typename: "Asset",
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        id: string,
        key: string,
        index?: number | null,
        type: AssetType,
        value?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateNodeMutationVariables = {
  input: UpdateNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type UpdateNodeMutation = {
  updateNode?:  {
    __typename: "Node",
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    editorGroups?: Array< string | null > | null,
    readerGroups?: Array< string | null > | null,
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    ledgerID?: string | null,
    ledger?:  {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    objects?:  {
      __typename: "ModelEdgeConnection",
      items:  Array< {
        __typename: "Edge",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        objectID: string,
        subjectID: string,
        id: string,
        type?: EdgeType | null,
        owner?: string | null,
        weight?: number | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subjects?:  {
      __typename: "ModelEdgeConnection",
      items:  Array< {
        __typename: "Edge",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        objectID: string,
        subjectID: string,
        id: string,
        type?: EdgeType | null,
        owner?: string | null,
        weight?: number | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    name?: string | null,
    index?: number | null,
    type: NodeType,
    status: NodeStatus,
    owner?: string | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      items:  Array< {
        __typename: "Asset",
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        id: string,
        key: string,
        index?: number | null,
        type: AssetType,
        value?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteNodeMutationVariables = {
  input: DeleteNodeInput,
  condition?: ModelNodeConditionInput | null,
};

export type DeleteNodeMutation = {
  deleteNode?:  {
    __typename: "Node",
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    editorGroups?: Array< string | null > | null,
    readerGroups?: Array< string | null > | null,
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    ledgerID?: string | null,
    ledger?:  {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    objects?:  {
      __typename: "ModelEdgeConnection",
      items:  Array< {
        __typename: "Edge",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        objectID: string,
        subjectID: string,
        id: string,
        type?: EdgeType | null,
        owner?: string | null,
        weight?: number | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subjects?:  {
      __typename: "ModelEdgeConnection",
      items:  Array< {
        __typename: "Edge",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        objectID: string,
        subjectID: string,
        id: string,
        type?: EdgeType | null,
        owner?: string | null,
        weight?: number | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    name?: string | null,
    index?: number | null,
    type: NodeType,
    status: NodeStatus,
    owner?: string | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      items:  Array< {
        __typename: "Asset",
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        id: string,
        key: string,
        index?: number | null,
        type: AssetType,
        value?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateEdgeMutationVariables = {
  input: CreateEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type CreateEdgeMutation = {
  createEdge?:  {
    __typename: "Edge",
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    editorGroups?: Array< string | null > | null,
    readerGroups?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    objectID: string,
    object?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    id: string,
    type?: EdgeType | null,
    owner?: string | null,
    weight?: number | null,
  } | null,
};

export type UpdateEdgeMutationVariables = {
  input: UpdateEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type UpdateEdgeMutation = {
  updateEdge?:  {
    __typename: "Edge",
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    editorGroups?: Array< string | null > | null,
    readerGroups?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    objectID: string,
    object?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    id: string,
    type?: EdgeType | null,
    owner?: string | null,
    weight?: number | null,
  } | null,
};

export type DeleteEdgeMutationVariables = {
  input: DeleteEdgeInput,
  condition?: ModelEdgeConditionInput | null,
};

export type DeleteEdgeMutation = {
  deleteEdge?:  {
    __typename: "Edge",
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    editorGroups?: Array< string | null > | null,
    readerGroups?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    objectID: string,
    object?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    id: string,
    type?: EdgeType | null,
    owner?: string | null,
    weight?: number | null,
  } | null,
};

export type CreateAssetMutationVariables = {
  input: CreateAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type CreateAssetMutation = {
  createAsset?:  {
    __typename: "Asset",
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    id: string,
    key: string,
    index?: number | null,
    type: AssetType,
    value?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateAssetMutationVariables = {
  input: UpdateAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type UpdateAssetMutation = {
  updateAsset?:  {
    __typename: "Asset",
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    id: string,
    key: string,
    index?: number | null,
    type: AssetType,
    value?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteAssetMutationVariables = {
  input: DeleteAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type DeleteAssetMutation = {
  deleteAsset?:  {
    __typename: "Asset",
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    id: string,
    key: string,
    index?: number | null,
    type: AssetType,
    value?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateLedgerMutationVariables = {
  input: CreateLedgerInput,
  condition?: ModelLedgerConditionInput | null,
};

export type CreateLedgerMutation = {
  createLedger?:  {
    __typename: "Ledger",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID: string,
        type: EventType,
        payload: string,
        ledgerEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    ledgerID: string,
    ledger?:  {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    type: EventType,
    payload: string,
    ledgerEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetNodeQueryVariables = {
  id: string,
};

export type GetNodeQuery = {
  getNode?:  {
    __typename: "Node",
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    editorGroups?: Array< string | null > | null,
    readerGroups?: Array< string | null > | null,
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    ledgerID?: string | null,
    ledger?:  {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    objects?:  {
      __typename: "ModelEdgeConnection",
      items:  Array< {
        __typename: "Edge",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        objectID: string,
        subjectID: string,
        id: string,
        type?: EdgeType | null,
        owner?: string | null,
        weight?: number | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    subjects?:  {
      __typename: "ModelEdgeConnection",
      items:  Array< {
        __typename: "Edge",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        objectID: string,
        subjectID: string,
        id: string,
        type?: EdgeType | null,
        owner?: string | null,
        weight?: number | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    name?: string | null,
    index?: number | null,
    type: NodeType,
    status: NodeStatus,
    owner?: string | null,
    assets?:  {
      __typename: "ModelAssetConnection",
      items:  Array< {
        __typename: "Asset",
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        id: string,
        key: string,
        index?: number | null,
        type: AssetType,
        value?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListNodesQueryVariables = {
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNodesQuery = {
  listNodes?:  {
    __typename: "ModelNodeConnection",
    items:  Array< {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NodesByStatusTypeQueryVariables = {
  status: NodeStatus,
  typeUpdatedAt?: ModelNodeNodes_by_status_type_updatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NodesByStatusTypeQuery = {
  nodesByStatusType?:  {
    __typename: "ModelNodeConnection",
    items:  Array< {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NodesByOwnerStatusQueryVariables = {
  owner: string,
  statusUpdatedAt?: ModelNodeNodes_by_owner_status_updatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NodesByOwnerStatusQuery = {
  nodesByOwnerStatus?:  {
    __typename: "ModelNodeConnection",
    items:  Array< {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NodesByOwnerTypeQueryVariables = {
  owner: string,
  typeUpdatedAt?: ModelNodeNodes_by_owner_type_updatedAtCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NodesByOwnerTypeQuery = {
  nodesByOwnerType?:  {
    __typename: "ModelNodeConnection",
    items:  Array< {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEdgeQueryVariables = {
  id: string,
};

export type GetEdgeQuery = {
  getEdge?:  {
    __typename: "Edge",
    editors?: Array< string | null > | null,
    readers?: Array< string | null > | null,
    editorGroups?: Array< string | null > | null,
    readerGroups?: Array< string | null > | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    objectID: string,
    object?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    subjectID: string,
    subject?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    id: string,
    type?: EdgeType | null,
    owner?: string | null,
    weight?: number | null,
  } | null,
};

export type ListEdgesQueryVariables = {
  id?: string | null,
  filter?: ModelEdgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEdgesQuery = {
  listEdges?:  {
    __typename: "ModelEdgeConnection",
    items:  Array< {
      __typename: "Edge",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      objectID: string,
      object?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      subjectID: string,
      subject?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      id: string,
      type?: EdgeType | null,
      owner?: string | null,
      weight?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EdgesByTypeQueryVariables = {
  type: EdgeType,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEdgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EdgesByTypeQuery = {
  edgesByType?:  {
    __typename: "ModelEdgeConnection",
    items:  Array< {
      __typename: "Edge",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      objectID: string,
      object?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      subjectID: string,
      subject?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      id: string,
      type?: EdgeType | null,
      owner?: string | null,
      weight?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type EdgesByOwnerTypeQueryVariables = {
  owner: string,
  typeUpdatedAt?: ModelEdgeEdges_by_owner_typeCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEdgeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EdgesByOwnerTypeQuery = {
  edgesByOwnerType?:  {
    __typename: "ModelEdgeConnection",
    items:  Array< {
      __typename: "Edge",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      objectID: string,
      object?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      subjectID: string,
      subject?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      id: string,
      type?: EdgeType | null,
      owner?: string | null,
      weight?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLedgerQueryVariables = {
  id: string,
};

export type GetLedgerQuery = {
  getLedger?:  {
    __typename: "Ledger",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID: string,
        type: EventType,
        payload: string,
        ledgerEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListLedgersQueryVariables = {
  filter?: ModelLedgerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLedgersQuery = {
  listLedgers?:  {
    __typename: "ModelLedgerConnection",
    items:  Array< {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    ledgerID: string,
    ledger?:  {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    type: EventType,
    payload: string,
    ledgerEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID: string,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      type: EventType,
      payload: string,
      ledgerEventsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAssetSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAssetSubscription = {
  onCreateAsset?:  {
    __typename: "Asset",
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    id: string,
    key: string,
    index?: number | null,
    type: AssetType,
    value?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateAssetSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAssetSubscription = {
  onUpdateAsset?:  {
    __typename: "Asset",
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    id: string,
    key: string,
    index?: number | null,
    type: AssetType,
    value?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteAssetSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAssetSubscription = {
  onDeleteAsset?:  {
    __typename: "Asset",
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    id: string,
    key: string,
    index?: number | null,
    type: AssetType,
    value?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateLedgerSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateLedgerSubscription = {
  onCreateLedger?:  {
    __typename: "Ledger",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID: string,
        type: EventType,
        payload: string,
        ledgerEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateLedgerSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateLedgerSubscription = {
  onUpdateLedger?:  {
    __typename: "Ledger",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID: string,
        type: EventType,
        payload: string,
        ledgerEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteLedgerSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteLedgerSubscription = {
  onDeleteLedger?:  {
    __typename: "Ledger",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    nodeID: string,
    node?:  {
      __typename: "Node",
      editors?: Array< string | null > | null,
      readers?: Array< string | null > | null,
      editorGroups?: Array< string | null > | null,
      readerGroups?: Array< string | null > | null,
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      ledgerID?: string | null,
      ledger?:  {
        __typename: "Ledger",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        nodeID: string,
        owner?: string | null,
      } | null,
      objects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      subjects?:  {
        __typename: "ModelEdgeConnection",
        nextToken?: string | null,
      } | null,
      name?: string | null,
      index?: number | null,
      type: NodeType,
      status: NodeStatus,
      owner?: string | null,
      assets?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID: string,
        type: EventType,
        payload: string,
        ledgerEventsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    ledgerID: string,
    ledger?:  {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    type: EventType,
    payload: string,
    ledgerEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    ledgerID: string,
    ledger?:  {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    type: EventType,
    payload: string,
    ledgerEventsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    ledgerID: string,
    ledger?:  {
      __typename: "Ledger",
      id: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      nodeID: string,
      node?:  {
        __typename: "Node",
        editors?: Array< string | null > | null,
        readers?: Array< string | null > | null,
        editorGroups?: Array< string | null > | null,
        readerGroups?: Array< string | null > | null,
        id: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        ledgerID?: string | null,
        name?: string | null,
        index?: number | null,
        type: NodeType,
        status: NodeStatus,
        owner?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
    } | null,
    type: EventType,
    payload: string,
    ledgerEventsId?: string | null,
    owner?: string | null,
  } | null,
};
