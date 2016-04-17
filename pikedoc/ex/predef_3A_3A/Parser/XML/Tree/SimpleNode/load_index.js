// Indirect loader of the symbol index for Parser.XML.Tree.SimpleNode.

// Inherit Parser.XML.Tree.AbstractSimpleNode.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/AbstractSimpleNode/load_index.js", "Parser.XML.Tree.AbstractSimpleNode");

// Inherit Parser.XML.Tree.VirtualNode.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/VirtualNode/load_index.js", "Parser.XML.Tree.VirtualNode");

PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/SimpleNode/index.js", false, ["Parser.XML.Tree.AbstractSimpleNode","Parser.XML.Tree.VirtualNode"]);
