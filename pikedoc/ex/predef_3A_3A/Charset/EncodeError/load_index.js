// Indirect loader of the symbol index for Charset.EncodeError.

// Inherit Error.Generic.
PikeDoc.loadScript("ex/predef_3A_3A/Error/Generic/load_index.js", "Error.Generic");

PikeDoc.loadScript("ex/predef_3A_3A/Charset/EncodeError/index.js", false, ["Error.Generic"]);
