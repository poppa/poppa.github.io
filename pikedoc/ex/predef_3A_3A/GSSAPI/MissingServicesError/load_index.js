// Indirect loader of the symbol index for GSSAPI.MissingServicesError.

// Inherit Error.Generic.
PikeDoc.loadScript("ex/predef_3A_3A/Error/Generic/load_index.js", "Error.Generic");

PikeDoc.loadScript("ex/predef_3A_3A/GSSAPI/MissingServicesError/index.js", false, ["Error.Generic"]);
