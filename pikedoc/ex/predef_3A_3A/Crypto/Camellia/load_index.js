// Indirect loader of the symbol index for Crypto.Camellia.

// Inherit Nettle.CAMELLIA.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/CAMELLIA/load_index.js", "Nettle.CAMELLIA");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/Camellia/index.js", false, ["Nettle.CAMELLIA"]);
