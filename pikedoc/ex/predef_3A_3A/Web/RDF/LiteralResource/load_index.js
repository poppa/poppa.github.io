// Indirect loader of the symbol index for Web.RDF()->LiteralResource.

// Inherit Web.RDF()->Resource.
PikeDoc.loadScript("ex/predef_3A_3A/Web/RDF/Resource/load_index.js", "Web.RDF()->Resource");

PikeDoc.loadScript("ex/predef_3A_3A/Web/RDF/LiteralResource/index.js", false, ["Web.RDF()->Resource"]);
