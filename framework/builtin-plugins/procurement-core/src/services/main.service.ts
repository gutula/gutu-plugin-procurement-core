import {
  createBusinessDomainStateStore,
  createBusinessOrchestrationState,
  createBusinessPluginService,
  type BusinessAdvancePrimaryRecordInput,
  type BusinessCreatePrimaryRecordInput,
  type BusinessFailPendingDownstreamItemInput,
  type BusinessReconcilePrimaryRecordInput,
  type BusinessReplayDeadLetterInput,
  type BusinessResolvePendingDownstreamItemInput
} from "@platform/business-runtime";

import { type ExceptionRecord, type PrimaryRecord, type SecondaryRecord } from "../model";

export type CreatePrimaryRecordInput = BusinessCreatePrimaryRecordInput;
export type AdvancePrimaryRecordInput = BusinessAdvancePrimaryRecordInput;
export type ReconcilePrimaryRecordInput = BusinessReconcilePrimaryRecordInput;
export type ResolvePendingDownstreamItemInput = BusinessResolvePendingDownstreamItemInput;
export type FailPendingDownstreamItemInput = BusinessFailPendingDownstreamItemInput;
export type ReplayDeadLetterInput = BusinessReplayDeadLetterInput;

function seedState() {
  return {
    primaryRecords: [
      {
        id: "procurement-core:seed",
        tenantId: "tenant-platform",
        title: "Procurement Core Seed Record",
        counterpartyId: "party:seed",
        companyId: "company:primary",
        branchId: "branch:head-office",
        recordState: "active",
        approvalState: "approved",
        postingState: "unposted",
        fulfillmentState: "none",
        amountMinor: 125000,
        currencyCode: "USD",
        revisionNo: 1,
        reasonCode: null,
        effectiveAt: "2026-04-23T00:00:00.000Z",
        correlationId: "procurement-core:seed",
        processId: "procurement-order-lifecycle:seed",
        upstreamRefs: [],
        downstreamRefs: [],
        updatedAt: "2026-04-23T00:00:00.000Z"
      }
    ] satisfies PrimaryRecord[],
    secondaryRecords: [] satisfies SecondaryRecord[],
    exceptionRecords: [] satisfies ExceptionRecord[],
    orchestration: createBusinessOrchestrationState()
  };
}

const store = createBusinessDomainStateStore({
  pluginId: "procurement-core",
  sqlite: {
    primaryTable: "procurement_core_primary_records",
    secondaryTable: "procurement_core_secondary_records",
    exceptionTable: "procurement_core_exception_records",
    dbFileName: "business-runtime.sqlite"
  },
  postgres: {
    schemaName: "procurement_core"
  },
  seedStateFactory: seedState
});

const service = createBusinessPluginService({
  pluginId: "procurement-core",
  displayName: "Procurement Core",
  primaryResourceId: "procurement.requisitions",
  secondaryResourceId: "procurement.purchase-orders",
  exceptionResourceId: "procurement.receipt-requests",
  createEvent: "procurement.requisition-created.v1",
  advanceEvent: "procurement.purchase-order-issued.v1",
  reconcileEvent: "procurement.receipt-requested.v1",
  projectionJobId: "procurement.projections.refresh",
  reconciliationJobId: "procurement.reconciliation.run",
  advanceActionLabel: "Issue Purchase Order",
  orchestrationTargets: {
  "create": [],
  "advance": [
    "inventory.receipts.record",
    "traceability.links.record"
  ],
  "reconcile": [
    "accounting.billing.post",
    "traceability.reconciliation.queue"
  ]
},
  store
});

export const {
  listPrimaryRecords,
  listSecondaryRecords,
  listExceptionRecords,
  listPublishedMessages,
  listPendingDownstreamItems,
  listDeadLetters,
  listProjectionRecords,
  getBusinessOverview,
  createPrimaryRecord,
  advancePrimaryRecord,
  reconcilePrimaryRecord,
  resolvePendingDownstreamItem,
  failPendingDownstreamItem,
  replayDeadLetter
} = service;
