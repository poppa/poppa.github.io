// Indirect loader of the symbol index for __builtin.Nettle.Hash()->HMAC.

// Inherit __builtin.Nettle.MAC.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/MAC/load_index.js", "__builtin.Nettle.MAC");

PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/Hash/HMAC/index.js", false, ["__builtin.Nettle.MAC"]);
