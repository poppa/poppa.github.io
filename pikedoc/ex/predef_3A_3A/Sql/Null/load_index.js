// Indirect loader of the symbol index for Sql.null.

// Inherit __builtin.Sql.Connection.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Sql/Connection/load_index.js", "__builtin.Sql.Connection");

PikeDoc.loadScript("ex/predef_3A_3A/Sql/null/index.js", false, ["__builtin.Sql.Connection"]);
