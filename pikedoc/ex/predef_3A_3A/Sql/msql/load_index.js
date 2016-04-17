// Indirect loader of the symbol index for Sql.msql.

// Inherit Msql.msql.
PikeDoc.loadScript("ex/predef_3A_3A/Msql/msql/load_index.js", "Msql.msql");

PikeDoc.loadScript("ex/predef_3A_3A/Sql/msql/index.js", false, ["Msql.msql"]);
