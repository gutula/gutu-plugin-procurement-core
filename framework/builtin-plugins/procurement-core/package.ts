import { definePackage } from "@platform/kernel";

export default definePackage({
  "id": "procurement-core",
  "kind": "plugin",
  "version": "0.1.0",
  "contractVersion": "1.0.0",
  "sourceRepo": "gutu-plugin-procurement-core",
  "displayName": "Procurement Core",
  "domainGroup": "Operational Data",
  "defaultCategory": {
    "id": "business",
    "label": "Business",
    "subcategoryId": "procurement_sourcing",
    "subcategoryLabel": "Procurement & Sourcing"
  },
  "description": "Source-to-procure commitments including requisitions, sourcing outcomes, purchase orders, receipt expectations, and supplier exception management.",
  "extends": [],
  "dependsOn": [
    "auth-core",
    "org-tenant-core",
    "role-policy-core",
    "audit-core",
    "workflow-core",
    "party-relationships-core",
    "product-catalog-core",
    "pricing-tax-core",
    "traceability-core"
  ],
  "dependencyContracts": [
    {
      "packageId": "auth-core",
      "class": "required",
      "rationale": "Required for Procurement Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "org-tenant-core",
      "class": "required",
      "rationale": "Required for Procurement Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "role-policy-core",
      "class": "required",
      "rationale": "Required for Procurement Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "audit-core",
      "class": "required",
      "rationale": "Required for Procurement Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "workflow-core",
      "class": "required",
      "rationale": "Required for Procurement Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "party-relationships-core",
      "class": "required",
      "rationale": "Required for Procurement Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "product-catalog-core",
      "class": "required",
      "rationale": "Required for Procurement Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "pricing-tax-core",
      "class": "required",
      "rationale": "Required for Procurement Core to keep its boundary governed and explicit."
    },
    {
      "packageId": "traceability-core",
      "class": "required",
      "rationale": "Required for Procurement Core to keep its boundary governed and explicit."
    }
  ],
  "optionalWith": [],
  "conflictsWith": [],
  "providesCapabilities": [
    "procurement.requisitions",
    "procurement.purchase-orders",
    "procurement.receipt-requests"
  ],
  "requestedCapabilities": [
    "ui.register.admin",
    "api.rest.mount",
    "data.write.procurement",
    "events.publish.procurement"
  ],
  "ownsData": [
    "procurement.requisitions",
    "procurement.sourcing-events",
    "procurement.purchase-orders",
    "procurement.receipt-requests"
  ],
  "extendsData": [],
  "publicCommands": [
    "procurement.requisitions.create",
    "procurement.purchase-orders.issue",
    "procurement.receipts.request",
    "procurement.requisitions.hold",
    "procurement.requisitions.release",
    "procurement.requisitions.amend",
    "procurement.requisitions.reverse"
  ],
  "publicQueries": [
    "procurement.commitment-summary",
    "procurement.source-award-summary"
  ],
  "publicEvents": [
    "procurement.requisition-created.v1",
    "procurement.purchase-order-issued.v1",
    "procurement.receipt-requested.v1"
  ],
  "domainCatalog": {
    "erpnextModules": [
      "Buying",
      "Subcontracting"
    ],
    "erpnextDoctypes": [
      "Supplier",
      "Request for Quotation",
      "Supplier Quotation",
      "Purchase Order",
      "Purchase Receipt",
      "Supplier Scorecard",
      "Subcontracting Order"
    ],
    "ownedEntities": [
      "Purchase Requisition",
      "RFQ",
      "Supplier Quote",
      "Purchase Order",
      "Receipt Request",
      "Supplier Return",
      "Supplier Scorecard"
    ],
    "reports": [
      "Purchase Register",
      "Supplier Scorecard Summary",
      "Purchase Order Trends",
      "Receipt versus Bill Variance"
    ],
    "exceptionQueues": [
      "price-variance-review",
      "short-receipt-review",
      "over-receipt-review",
      "supplier-delay-replan"
    ],
    "operationalScenarios": [
      "requisition-to-rfq",
      "award-to-purchase-order",
      "receipt-request-to-bill-suggestion",
      "subcontract-procurement"
    ],
    "settingsSurfaces": [
      "Buying Settings",
      "Supplier Scorecard",
      "Request for Quotation"
    ],
    "edgeCases": [
      "substitute items",
      "rejected goods billing policy",
      "PO closure without full receipt",
      "three-way-match variance"
    ]
  },
  "slotClaims": [],
  "trustTier": "first-party",
  "reviewTier": "R1",
  "isolationProfile": "same-process-trusted",
  "compatibility": {
    "framework": "^0.1.0",
    "runtime": "bun>=1.3.12",
    "db": [
      "postgres",
      "sqlite"
    ]
  }
});
