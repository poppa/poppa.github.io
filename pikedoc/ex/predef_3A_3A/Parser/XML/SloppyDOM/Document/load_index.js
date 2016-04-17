// Indirect loader of the symbol index for Parser.XML.SloppyDOM.Document.

// Inherit Parser.XML.SloppyDOM.NodeWithChildElements.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/SloppyDOM/NodeWithChildElements/load_index.js", "Parser.XML.SloppyDOM.NodeWithChildElements");

PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/SloppyDOM/Document/index.js", false, ["Parser.XML.SloppyDOM.NodeWithChildElements"]);
