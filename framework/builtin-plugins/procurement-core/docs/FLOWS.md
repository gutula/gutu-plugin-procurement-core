# Procurement Core Flows

## Happy paths

- `procurement.requisitions.create`: Create Requisition
- `procurement.purchase-orders.issue`: Issue Purchase Order
- `procurement.receipts.request`: Request Receipt

## Operational scenario matrix

- `requisition-to-rfq`
- `award-to-purchase-order`
- `receipt-request-to-bill-suggestion`
- `subcontract-procurement`

## Action-level flows

### `procurement.requisitions.create`

Create Requisition

Permission: `procurement.requisitions.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s idempotent semantics.

Side effects:

- Mutates or validates state owned by `procurement.requisitions`, `procurement.purchase-orders`, `procurement.receipt-requests`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `procurement.purchase-orders.issue`

Issue Purchase Order

Permission: `procurement.purchase-orders.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `procurement.requisitions`, `procurement.purchase-orders`, `procurement.receipt-requests`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `procurement.receipts.request`

Request Receipt

Permission: `procurement.receipt-requests.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `procurement.requisitions`, `procurement.purchase-orders`, `procurement.receipt-requests`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


## Cross-package interactions

- Direct dependencies: `auth-core`, `org-tenant-core`, `role-policy-core`, `audit-core`, `workflow-core`, `party-relationships-core`, `product-catalog-core`, `pricing-tax-core`, `traceability-core`
- Requested capabilities: `ui.register.admin`, `api.rest.mount`, `data.write.procurement`, `events.publish.procurement`
- Integration model: Actions+Resources+Jobs+Workflows+UI
- ERPNext doctypes used as parity references: `Supplier`, `Request for Quotation`, `Supplier Quotation`, `Purchase Order`, `Purchase Receipt`, `Supplier Scorecard`, `Subcontracting Order`
- Recovery ownership should stay with the host orchestration layer when the plugin does not explicitly export jobs, workflows, or lifecycle events.
