// Indirect loader of the symbol index for Crypto.SHA384.

// Inherit Nettle.SHA384.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/SHA384/load_index.js", "Nettle.SHA384");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/SHA384/index.js", false, ["Nettle.SHA384"]);
