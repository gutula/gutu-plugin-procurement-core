import {
  advancePrimaryRecord,
  createPrimaryRecord,
  reconcilePrimaryRecord,
  type AdvancePrimaryRecordInput,
  type CreatePrimaryRecordInput,
  type ReconcilePrimaryRecordInput
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
