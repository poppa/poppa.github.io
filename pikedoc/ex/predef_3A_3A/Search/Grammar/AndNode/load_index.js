// Indirect loader of the symbol index for Search.Grammar.AndNode.

// Inherit Search.Grammar.ParseNode.
PikeDoc.loadScript("ex/predef_3A_3A/Search/Grammar/ParseNode/load_index.js", "Search.Grammar.ParseNode");

PikeDoc.loadScript("ex/predef_3A_3A/Search/Grammar/AndNode/index.js", false, ["Search.Grammar.ParseNode"]);
