// Indirect loader of the symbol index for Sql.pgsqls.

// Inherit Sql.pgsql.
PikeDoc.loadScript("ex/predef_3A_3A/Sql/pgsql/load_index.js", "Sql.pgsql");

PikeDoc.loadScript("ex/predef_3A_3A/Sql/pgsqls/index.js", false, ["Sql.pgsql"]);
