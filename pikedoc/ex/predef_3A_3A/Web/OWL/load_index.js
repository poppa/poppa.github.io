// Indirect loader of the symbol index for Web.OWL.

// Inherit Web.RDFS.
PikeDoc.loadScript("ex/predef_3A_3A/Web/RDFS/load_index.js", "Web.RDFS");

PikeDoc.loadScript("ex/predef_3A_3A/Web/OWL/index.js", false, ["Web.RDFS"]);
