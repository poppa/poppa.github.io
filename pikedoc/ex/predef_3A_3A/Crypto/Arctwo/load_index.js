// Indirect loader of the symbol index for Crypto.Arctwo.

// Inherit Nettle.ARCTWO.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/ARCTWO/load_index.js", "Nettle.ARCTWO");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/Arctwo/index.js", false, ["Nettle.ARCTWO"]);
