// Indirect loader of the symbol index for Crypto.MD5.

// Inherit Nettle.MD5.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/MD5/load_index.js", "Nettle.MD5");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/MD5/index.js", false, ["Nettle.MD5"]);
