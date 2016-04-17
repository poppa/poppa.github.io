// Indirect loader of the symbol index for Crypto.CAST.

// Inherit Nettle.CAST128.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/CAST128/load_index.js", "Nettle.CAST128");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/CAST/index.js", false, ["Nettle.CAST128"]);
