// Indirect loader of the symbol index for Crypto.ECC.Curve.

// Inherit Nettle.ECC_Curve.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/ECC_Curve/load_index.js", "Nettle.ECC_Curve");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/ECC/Curve/index.js", false, ["Nettle.ECC_Curve"]);
