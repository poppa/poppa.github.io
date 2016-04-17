// Indirect loader of the symbol index for Crypto.Random.

// Inherit Random.Fast.
PikeDoc.loadScript("ex/predef_3A_3A/Random/Fast/load_index.js", "Random.Fast");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/Random/index.js", false, ["Random.Fast"]);
