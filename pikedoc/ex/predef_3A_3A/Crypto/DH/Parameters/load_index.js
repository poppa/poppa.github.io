// Indirect loader of the symbol index for Crypto.DH.Parameters.

// Inherit Nettle.DH_Params.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/DH_Params/load_index.js", "Nettle.DH_Params");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/DH/Parameters/index.js", false, ["Nettle.DH_Params"]);
