// Indirect loader of the symbol index for Crypto.Hash.

// Inherit Nettle.Hash.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Hash/load_index.js", "Nettle.Hash");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/Hash/index.js", false, ["Nettle.Hash"]);
