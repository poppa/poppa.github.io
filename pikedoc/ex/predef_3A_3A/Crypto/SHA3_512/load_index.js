// Indirect loader of the symbol index for Crypto.SHA3_512.

// Inherit Nettle.SHA3_512.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SHA3_512/load_index.js", "Nettle.SHA3_512");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/SHA3_512/index.js", false, ["Nettle.SHA3_512"]);
