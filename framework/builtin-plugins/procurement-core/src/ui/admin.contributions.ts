import {
  defineAdminNav,
  defineCommand,
  definePage,
  defineWorkspace,
  type AdminContributionRegistry
} from "@platform/admin-contracts";

import { BusinessAdminPage } from "./admin/main.page";

export const adminContributions: Pick<AdminContributionRegistry, "workspaces" | "nav" | "pages" | "commands"> = {
  workspaces: [
    defineWorkspace({
      id: "procurement",
      label: "Procurement",
      icon: "shopping-cart",
      description: "Sourcing, purchasing, supplier commitments, and receipt expectation control.",
      permission: "procurement.requisitions.read",
      homePath: "/admin/business/procurement",
      quickActions: ["procurement-core.open.control-room"]
    })
  ],
  nav: [
    defineAdminNav({
      workspace: "procurement",
      group: "control-room",
      items: [
        {
          id: "procurement-core.overview",
          label: "Control Room",
          icon: "shopping-cart",
          to: "/admin/business/procurement",
          permission: "procurement.requisitions.read"
        }
      ]
    })
  ],
  pages: [
    definePage({
      id: "procurement-core.page",
      kind: "dashboard",
      route: "/admin/business/procurement",
      label: "Procurement Control Room",
      workspace: "procurement",
      group: "control-room",
      permission: "procurement.requisitions.read",
      component: BusinessAdminPage
    })
  ],
  commands: [
    defineCommand({
      id: "procurement-core.open.control-room",
      label: "Open Procurement Core",
      permission: "procurement.requisitions.read",
      href: "/admin/business/procurement",
      keywords: ["procurement core","procurement","business"]
    })
  ]
};
