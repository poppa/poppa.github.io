// Indirect loader of the symbol index for Web.RDFS.

// Inherit Web.RDF.
PikeDoc.loadScript("ex/predef_3A_3A/Web/RDF/load_index.js", "Web.RDF");

PikeDoc.loadScript("ex/predef_3A_3A/Web/RDFS/index.js", false, ["Web.RDF"]);
