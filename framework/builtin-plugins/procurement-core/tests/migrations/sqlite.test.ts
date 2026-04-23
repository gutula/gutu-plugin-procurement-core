import { describe, expect, it } from "bun:test";

import {
  buildProcurementCoreSqliteMigrationSql,
  buildProcurementCoreSqliteRollbackSql,
  getProcurementCoreSqliteLookupIndexName,
  getProcurementCoreSqliteStatusIndexName
} from "../../src/sqlite";

describe("procurement-core sqlite helpers", () => {
  it("creates the business tables and indexes", () => {
    const sql = buildProcurementCoreSqliteMigrationSql().join("\n");

    expect(sql).toContain("CREATE TABLE IF NOT EXISTS procurement_core_primary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS procurement_core_secondary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS procurement_core_exception_records");
    expect(sql).toContain(getProcurementCoreSqliteLookupIndexName("procurement_core_"));
    expect(sql).toContain(getProcurementCoreSqliteStatusIndexName("procurement_core_"));
  });

  it("rolls the sqlite tables back safely", () => {
    const sql = buildProcurementCoreSqliteRollbackSql({ tablePrefix: "procurement_core_preview_" }).join("\n");
    expect(sql).toContain("DROP TABLE IF EXISTS procurement_core_preview_exception_records");
  });
});
