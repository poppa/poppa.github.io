// Indirect loader of the symbol index for Crypto.ECC.SECP_192R1.

// Inherit Crypto.ECC.Curve.
PikeDoc.loadScript("ex/predef_3A_3A/Crypto/ECC/Curve/load_index.js", "Crypto.ECC.Curve");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/ECC/SECP_192R1/index.js", false, ["Crypto.ECC.Curve"]);
