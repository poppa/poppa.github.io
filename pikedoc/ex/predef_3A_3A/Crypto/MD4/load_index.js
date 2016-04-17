// Indirect loader of the symbol index for Crypto.MD4.

// Inherit Nettle.MD4.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/MD4/load_index.js", "Nettle.MD4");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/MD4/index.js", false, ["Nettle.MD4"]);
