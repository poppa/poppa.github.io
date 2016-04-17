// Indirect loader of the symbol index for Web.RDF()->RDFResource.

// Inherit Web.RDF()->URIResource.
PikeDoc.loadScript("ex/predef_3A_3A/Web/RDF/URIResource/load_index.js", "Web.RDF()->URIResource");

PikeDoc.loadScript("ex/predef_3A_3A/Web/RDF/RDFResource/index.js", false, ["Web.RDF()->URIResource"]);
