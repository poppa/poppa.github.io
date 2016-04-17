// Indirect loader of the symbol index for Crypto.ECC.Curve()->ECDSA.

// Inherit Nettle.ECC_Curve()->ECDSA.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/ECC_Curve/ECDSA/load_index.js", "Nettle.ECC_Curve()->ECDSA");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/ECC/Curve/ECDSA/index.js", false, ["Nettle.ECC_Curve()->ECDSA"]);
