// Indirect loader of the symbol index for Crypto.SHA3_384.

// Inherit Nettle.SHA3_384.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SHA3_384/load_index.js", "Nettle.SHA3_384");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/SHA3_384/index.js", false, ["Nettle.SHA3_384"]);
