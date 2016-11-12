// Indirect loader of the symbol index for Nettle.Curve25519()->EdDSA.

// Inherit __builtin.Nettle.Sign.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/Sign/load_index.js", "__builtin.Nettle.Sign");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Curve25519/EdDSA/index.js", false, ["__builtin.Nettle.Sign"]);
