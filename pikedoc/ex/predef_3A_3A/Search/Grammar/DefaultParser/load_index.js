// Indirect loader of the symbol index for Search.Grammar.DefaultParser.

// Inherit Search.Grammar.AbstractParser.
PikeDoc.loadScript("ex/predef_3A_3A/Search/Grammar/AbstractParser/load_index.js", "Search.Grammar.AbstractParser");

// Inherit Search.Grammar.Lexer.
PikeDoc.loadScript("ex/predef_3A_3A/Search/Grammar/Lexer/load_index.js", "Search.Grammar.Lexer");

PikeDoc.loadScript("ex/predef_3A_3A/Search/Grammar/DefaultParser/index.js", false, ["Search.Grammar.AbstractParser","Search.Grammar.Lexer"]);
