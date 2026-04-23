export const domainCatalog = {
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
} as const;
