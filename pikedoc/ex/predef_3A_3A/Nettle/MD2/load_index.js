// Indirect loader of the symbol index for Nettle.MD2.

// Inherit Nettle.Hash.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/Hash/load_index.js", "Nettle.Hash");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/MD2/index.js", false, ["Nettle.Hash"]);
