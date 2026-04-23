import { describe, expect, it } from "bun:test";

import {
  buildProcurementCoreMigrationSql,
  buildProcurementCoreRollbackSql,
  getProcurementCoreLookupIndexName,
  getProcurementCoreStatusIndexName
} from "../../src/postgres";

describe("procurement-core postgres helpers", () => {
  it("creates the business tables and indexes", () => {
    const sql = buildProcurementCoreMigrationSql().join("\n");

    expect(sql).toContain("CREATE TABLE IF NOT EXISTS procurement_core.primary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS procurement_core.secondary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS procurement_core.exception_records");
    expect(sql).toContain(getProcurementCoreLookupIndexName());
    expect(sql).toContain(getProcurementCoreStatusIndexName());
  });

  it("rolls the schema back safely", () => {
    const sql = buildProcurementCoreRollbackSql({ schemaName: "procurement_core_preview", dropSchema: true }).join("\n");
    expect(sql).toContain("DROP TABLE IF EXISTS procurement_core_preview.exception_records");
    expect(sql).toContain("DROP SCHEMA IF EXISTS procurement_core_preview CASCADE");
  });
});
