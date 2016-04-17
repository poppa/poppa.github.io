// Indirect loader of the symbol index for Crypto.SHA224.

// Inherit Nettle.SHA224.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SHA224/load_index.js", "Nettle.SHA224");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/SHA224/index.js", false, ["Nettle.SHA224"]);
