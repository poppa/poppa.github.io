// Indirect loader of the symbol index for Crypto.SHA256.

// Inherit Nettle.SHA256.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SHA256/load_index.js", "Nettle.SHA256");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/SHA256/index.js", false, ["Nettle.SHA256"]);
