// Indirect loader of the symbol index for Parser.XML.Tree.Node.

// Inherit Parser.XML.Tree.AbstractNode.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/AbstractNode/load_index.js", "Parser.XML.Tree.AbstractNode");

// Inherit Parser.XML.Tree.VirtualNode.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/VirtualNode/load_index.js", "Parser.XML.Tree.VirtualNode");

PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Tree/Node/index.js", false, ["Parser.XML.Tree.AbstractNode","Parser.XML.Tree.VirtualNode"]);
