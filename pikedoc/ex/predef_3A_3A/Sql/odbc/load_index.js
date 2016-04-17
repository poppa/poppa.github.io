// Indirect loader of the symbol index for Sql.odbc.

// Inherit Odbc.odbc.
PikeDoc.loadScript("ex/predef_3A_3A/Odbc/odbc/load_index.js", "Odbc.odbc");

PikeDoc.loadScript("ex/predef_3A_3A/Sql/odbc/index.js", false, ["Odbc.odbc"]);
