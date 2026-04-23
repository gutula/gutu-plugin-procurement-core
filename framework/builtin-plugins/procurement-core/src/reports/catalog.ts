export const reportDefinitions = [
  {
    "id": "procurement-core.report.01",
    "label": "Purchase Register",
    "owningPlugin": "procurement-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "price-variance-review",
      "short-receipt-review",
      "over-receipt-review",
      "supplier-delay-replan"
    ]
  },
  {
    "id": "procurement-core.report.02",
    "label": "Supplier Scorecard Summary",
    "owningPlugin": "procurement-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "price-variance-review",
      "short-receipt-review",
      "over-receipt-review",
      "supplier-delay-replan"
    ]
  },
  {
    "id": "procurement-core.report.03",
    "label": "Purchase Order Trends",
    "owningPlugin": "procurement-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "price-variance-review",
      "short-receipt-review",
      "over-receipt-review",
      "supplier-delay-replan"
    ]
  },
  {
    "id": "procurement-core.report.04",
    "label": "Receipt versus Bill Variance",
    "owningPlugin": "procurement-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "price-variance-review",
      "short-receipt-review",
      "over-receipt-review",
      "supplier-delay-replan"
    ]
  }
] as const;
