// Indirect loader of the symbol index for Parser.CSV.

// Inherit Parser.Tabular.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/Tabular/load_index.js", "Parser.Tabular");

PikeDoc.loadScript("ex/predef_3A_3A/Parser/CSV/index.js", false, ["Parser.Tabular"]);
