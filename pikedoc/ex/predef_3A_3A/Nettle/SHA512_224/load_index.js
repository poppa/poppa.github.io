// Indirect loader of the symbol index for Nettle.SHA512_224.

// Inherit Nettle.Hash.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Hash/load_index.js", "Nettle.Hash");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SHA512_224/index.js", false, ["Nettle.Hash"]);
