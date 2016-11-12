// Indirect loader of the symbol index for Crypto.ECC.Curve25519.

// Inherit Nettle.Curve25519.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Curve25519/load_index.js", "Nettle.Curve25519");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/ECC/Curve25519/index.js", false, ["Nettle.Curve25519"]);
