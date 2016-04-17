// Indirect loader of the symbol index for Sql.postgres.

// Inherit Postgres.postgres.
PikeDoc.loadScript("ex/predef_3A_3A/Postgres/postgres/load_index.js", "Postgres.postgres");

// Inherit Sql.pgsql.
PikeDoc.loadScript("ex/predef_3A_3A/Sql/pgsql/load_index.js", "Sql.pgsql");

PikeDoc.loadScript("ex/predef_3A_3A/Sql/postgres/index.js", false, ["Postgres.postgres","Sql.pgsql"]);
