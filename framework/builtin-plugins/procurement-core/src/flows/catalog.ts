import {
  advancePrimaryRecord,
  amendPrimaryRecord,
  createPrimaryRecord,
  placePrimaryRecordOnHold,
  reconcilePrimaryRecord,
  releasePrimaryRecordHold,
  reversePrimaryRecord,
  type AdvancePrimaryRecordInput,
  type AmendPrimaryRecordInput,
  type CreatePrimaryRecordInput,
  type PlacePrimaryRecordOnHoldInput,
  type ReconcilePrimaryRecordInput,
  type ReleasePrimaryRecordHoldInput,
  type ReversePrimaryRecordInput
} from "../services/main.service";

export const businessFlowDefinitions = [
  {
    "id": "procurement.requisitions.create",
    "label": "Create Requisition",
    "phase": "create",
    "methodName": "createRequisition"
  },
  {
    "id": "procurement.purchase-orders.issue",
    "label": "Issue Purchase Order",
    "phase": "advance",
    "methodName": "issuePurchaseOrder"
  },
  {
    "id": "procurement.receipts.request",
    "label": "Request Receipt",
    "phase": "reconcile",
    "methodName": "requestReceipt"
  },
  {
    "id": "procurement.requisitions.hold",
    "label": "Place Record On Hold",
    "phase": "hold",
    "methodName": "placeRecordOnHold"
  },
  {
    "id": "procurement.requisitions.release",
    "label": "Release Record Hold",
    "phase": "release",
    "methodName": "releaseRecordHold"
  },
  {
    "id": "procurement.requisitions.amend",
    "label": "Amend Record",
    "phase": "amend",
    "methodName": "amendRecord"
  },
  {
    "id": "procurement.requisitions.reverse",
    "label": "Reverse Record",
    "phase": "reverse",
    "methodName": "reverseRecord"
  }
] as const;

export async function createRequisition(input: CreatePrimaryRecordInput) {
  return createPrimaryRecord(input);
}

export async function issuePurchaseOrder(input: AdvancePrimaryRecordInput) {
  return advancePrimaryRecord(input);
}

export async function requestReceipt(input: ReconcilePrimaryRecordInput) {
  return reconcilePrimaryRecord(input);
}

export async function placeRecordOnHold(input: PlacePrimaryRecordOnHoldInput) {
  return placePrimaryRecordOnHold(input);
}

export async function releaseRecordHold(input: ReleasePrimaryRecordHoldInput) {
  return releasePrimaryRecordHold(input);
}

export async function amendRecord(input: AmendPrimaryRecordInput) {
  return amendPrimaryRecord(input);
}

export async function reverseRecord(input: ReversePrimaryRecordInput) {
  return reversePrimaryRecord(input);
}
