export const exceptionQueueDefinitions = [
  {
    "id": "price-variance-review",
    "label": "Price Variance Review",
    "severity": "medium",
    "owner": "buyer",
    "reconciliationJobId": "procurement.reconciliation.run"
  },
  {
    "id": "short-receipt-review",
    "label": "Short Receipt Review",
    "severity": "medium",
    "owner": "buyer",
    "reconciliationJobId": "procurement.reconciliation.run"
  },
  {
    "id": "over-receipt-review",
    "label": "Over Receipt Review",
    "severity": "medium",
    "owner": "buyer",
    "reconciliationJobId": "procurement.reconciliation.run"
  },
  {
    "id": "supplier-delay-replan",
    "label": "Supplier Delay Replan",
    "severity": "medium",
    "owner": "buyer",
    "reconciliationJobId": "procurement.reconciliation.run"
  }
] as const;
