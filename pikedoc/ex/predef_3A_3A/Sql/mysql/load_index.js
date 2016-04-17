// Indirect loader of the symbol index for Sql.mysql.

// Inherit Mysql.mysql.
PikeDoc.loadScript("ex/predef_3A_3A/Mysql/mysql/load_index.js", "Mysql.mysql");

PikeDoc.loadScript("ex/predef_3A_3A/Sql/mysql/index.js", false, ["Mysql.mysql"]);
