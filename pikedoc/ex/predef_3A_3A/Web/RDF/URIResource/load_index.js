// Indirect loader of the symbol index for Web.RDF()->URIResource.

// Inherit Web.RDF()->Resource.
PikeDoc.loadScript("ex/predef_3A_3A/Web/RDF/Resource/load_index.js", "Web.RDF()->Resource");

PikeDoc.loadScript("ex/predef_3A_3A/Web/RDF/URIResource/index.js", false, ["Web.RDF()->Resource"]);
