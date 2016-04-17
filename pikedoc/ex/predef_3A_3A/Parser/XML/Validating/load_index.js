// Indirect loader of the symbol index for Parser.XML.Validating.

// Inherit Parser.XML.Simple.
PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Simple/load_index.js", "Parser.XML.Simple");

PikeDoc.loadScript("ex/predef_3A_3A/Parser/XML/Validating/index.js", false, ["Parser.XML.Simple"]);
