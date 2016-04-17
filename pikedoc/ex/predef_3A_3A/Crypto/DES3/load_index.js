// Indirect loader of the symbol index for Crypto.DES3.

// Inherit Nettle.DES3.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/DES3/load_index.js", "Nettle.DES3");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/DES3/index.js", false, ["Nettle.DES3"]);
