export const scenarioDefinitions = [
  {
    "id": "requisition-to-rfq",
    "owningPlugin": "procurement-core",
    "workflowId": "procurement-order-lifecycle",
    "actionIds": [
      "procurement.requisitions.create",
      "procurement.purchase-orders.issue",
      "procurement.receipts.request",
      "procurement.requisitions.hold",
      "procurement.requisitions.release",
      "procurement.requisitions.amend",
      "procurement.requisitions.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "inventory.receipts.record",
        "traceability.links.record"
      ],
      "reconcile": [
        "accounting.billing.post",
        "traceability.reconciliation.queue"
      ]
    }
  },
  {
    "id": "award-to-purchase-order",
    "owningPlugin": "procurement-core",
    "workflowId": "procurement-order-lifecycle",
    "actionIds": [
      "procurement.requisitions.create",
      "procurement.purchase-orders.issue",
      "procurement.receipts.request",
      "procurement.requisitions.hold",
      "procurement.requisitions.release",
      "procurement.requisitions.amend",
      "procurement.requisitions.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "inventory.receipts.record",
        "traceability.links.record"
      ],
      "reconcile": [
        "accounting.billing.post",
        "traceability.reconciliation.queue"
      ]
    }
  },
  {
    "id": "receipt-request-to-bill-suggestion",
    "owningPlugin": "procurement-core",
    "workflowId": "procurement-order-lifecycle",
    "actionIds": [
      "procurement.requisitions.create",
      "procurement.purchase-orders.issue",
      "procurement.receipts.request",
      "procurement.requisitions.hold",
      "procurement.requisitions.release",
      "procurement.requisitions.amend",
      "procurement.requisitions.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "inventory.receipts.record",
        "traceability.links.record"
      ],
      "reconcile": [
        "accounting.billing.post",
        "traceability.reconciliation.queue"
      ]
    }
  },
  {
    "id": "subcontract-procurement",
    "owningPlugin": "procurement-core",
    "workflowId": "procurement-order-lifecycle",
    "actionIds": [
      "procurement.requisitions.create",
      "procurement.purchase-orders.issue",
      "procurement.receipts.request",
      "procurement.requisitions.hold",
      "procurement.requisitions.release",
      "procurement.requisitions.amend",
      "procurement.requisitions.reverse"
    ],
    "downstreamTargets": {
      "create": [],
      "advance": [
        "inventory.receipts.record",
        "traceability.links.record"
      ],
      "reconcile": [
        "accounting.billing.post",
        "traceability.reconciliation.queue"
      ]
    }
  }
] as const;
