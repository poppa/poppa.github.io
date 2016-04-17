// Indirect loader of the symbol index for Parser.XML.Tree.SimpleRootNode.

// Inherit Parser.XML.Tree.SimpleNode.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/SimpleNode/load_index.js", "Parser.XML.Tree.SimpleNode");

// Inherit Parser.XML.Tree.XMLParser.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/XMLParser/load_index.js", "Parser.XML.Tree.XMLParser");

PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/SimpleRootNode/index.js", false, ["Parser.XML.Tree.SimpleNode","Parser.XML.Tree.XMLParser"]);
