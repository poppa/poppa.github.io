// Indirect loader of the symbol index for Crypto.MD2.

// Inherit Nettle.MD2.
PikeDoc.loadScript("ex/predef_3A_3A/Nettle/MD2/load_index.js", "Nettle.MD2");

PikeDoc.loadScript("ex/predef_3A_3A/Crypto/MD2/index.js", false, ["Nettle.MD2"]);
