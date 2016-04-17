// Indirect loader of the symbol index for Crypto.SHA1.

// Inherit Nettle.SHA1.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SHA1/load_index.js", "Nettle.SHA1");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/SHA1/index.js", false, ["Nettle.SHA1"]);
