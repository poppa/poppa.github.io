// Indirect loader of the symbol index for Crypto.SHA512.

// Inherit Nettle.SHA512.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SHA512/load_index.js", "Nettle.SHA512");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/SHA512/index.js", false, ["Nettle.SHA512"]);
