// Indirect loader of the symbol index for Parser.XML.Tree.RootNode.

// Inherit Parser.XML.Tree.Node.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/Node/load_index.js", "Parser.XML.Tree.Node");

// Inherit Parser.XML.Tree.XMLParser.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/XMLParser/load_index.js", "Parser.XML.Tree.XMLParser");

PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/RootNode/index.js", false, ["Parser.XML.Tree.Node","Parser.XML.Tree.XMLParser"]);
