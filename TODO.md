# Procurement Core TODO

**Maturity Tier:** `Hardened`

## Shipped Now

- Exports 7 governed actions: `procurement.requisitions.create`, `procurement.purchase-orders.issue`, `procurement.receipts.request`, `procurement.requisitions.hold`, `procurement.requisitions.release`, `procurement.requisitions.amend`, `procurement.requisitions.reverse`.
- Owns 3 resource contracts: `procurement.requisitions`, `procurement.purchase-orders`, `procurement.receipt-requests`.
- Publishes 2 job definitions with explicit queue and retry policy metadata.
- Publishes 1 workflow definition with state-machine descriptions and mandatory steps.
- Adds richer admin workspace contributions on top of the base UI surface.
- Ships explicit SQL migration or rollback helpers alongside the domain model.
- Documents 7 owned entity surface(s): `Purchase Requisition`, `RFQ`, `Supplier Quote`, `Purchase Order`, `Receipt Request`, `Supplier Return`, and more.
- Carries 4 report surface(s) and 4 exception queue(s) for operator parity and reconciliation visibility.
- Tracks ERPNext reference parity against module(s): `Buying`, `Subcontracting`.
- Operational scenario matrix includes `requisition-to-rfq`, `award-to-purchase-order`, `receipt-request-to-bill-suggestion`, `subcontract-procurement`.
- Governs 3 settings or policy surface(s) for operator control and rollout safety.

## Current Gaps

- No additional gaps were identified beyond the plugin’s stated non-goals.

## Recommended Next

- Deepen sourcing, tolerance, and exception handling before more warehouse and financial flows depend on procurement commitments.
- Add stronger scorecard and substitution support where supplier governance becomes critical.
- Broaden lifecycle coverage with deeper orchestration, reconciliation, and operator tooling where the business flow requires it.
- Add more explicit domain events or follow-up job surfaces when downstream systems need tighter coupling.
- Convert more ERP parity references into first-class runtime handlers where needed, starting from `Supplier`, `Request for Quotation`, `Supplier Quotation`.

## Later / Optional

- Outbound connectors, richer analytics, or portal-facing experiences once the core domain contracts harden.
