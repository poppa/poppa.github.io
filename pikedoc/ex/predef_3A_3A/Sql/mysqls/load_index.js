// Indirect loader of the symbol index for Sql.mysqls.

// Inherit Sql.mysql.
PikeDoc.loadScript("ex/predef_3A_3A/Sql/mysql/load_index.js", "Sql.mysql");

PikeDoc.loadScript("ex/predef_3A_3A/Sql/mysqls/index.js", false, ["Sql.mysql"]);
