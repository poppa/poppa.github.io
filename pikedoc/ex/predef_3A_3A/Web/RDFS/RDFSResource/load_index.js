// Indirect loader of the symbol index for Web.RDFS()->RDFSResource.

// Inherit Web.RDF()->URIResource.
PikeDoc.loadScript("ex/predef_3A_3A/Web/RDF/URIResource/load_index.js", "Web.RDF()->URIResource");

PikeDoc.loadScript("ex/predef_3A_3A/Web/RDFS/RDFSResource/index.js", false, ["Web.RDF()->URIResource"]);
