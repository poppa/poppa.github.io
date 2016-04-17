// Indirect loader of the symbol index for Parser.XML.NSTree.

// Inherit Parser.XML.Tree.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/load_index.js", "Parser.XML.Tree");

PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/NSTree/index.js", false, ["Parser.XML.Tree"]);
