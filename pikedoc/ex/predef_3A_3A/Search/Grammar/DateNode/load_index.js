// Indirect loader of the symbol index for Search.Grammar.DateNode.

// Inherit Search.Grammar.ParseNode.
PikeDoc.loadScript("ex/predef_3A_3A/Search/Grammar/ParseNode/load_index.js", "Search.Grammar.ParseNode");

PikeDoc.loadScript("ex/predef_3A_3A/Search/Grammar/DateNode/index.js", false, ["Search.Grammar.ParseNode"]);
