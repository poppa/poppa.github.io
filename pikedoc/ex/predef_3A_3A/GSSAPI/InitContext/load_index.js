// Indirect loader of the symbol index for GSSAPI.InitContext.

// Inherit GSSAPI.Context.
PikeDoc.loadScript("ex/predef_3A_3A/GSSAPI/Context/load_index.js", "GSSAPI.Context");

PikeDoc.loadScript("ex/predef_3A_3A/GSSAPI/InitContext/index.js", false, ["GSSAPI.Context"]);
