// Indirect loader of the symbol index for Sql.postgres_result.

// Inherit Postgres.postgres_result.
PikeDoc.loadScript("ex/predef_3A_3A/Postgres/postgres_result/load_index.js", "Postgres.postgres_result");

PikeDoc.loadScript("ex/predef_3A_3A/Sql/postgres_result/index.js", false, ["Postgres.postgres_result"]);
