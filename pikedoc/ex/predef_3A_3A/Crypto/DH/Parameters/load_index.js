// Indirect loader of the symbol index for Crypto.DH.Parameters.

// Inherit __builtin.Nettle.DH_Params.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/DH_Params/load_index.js", "__builtin.Nettle.DH_Params");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/DH/Parameters/index.js", false, ["__builtin.Nettle.DH_Params"]);
