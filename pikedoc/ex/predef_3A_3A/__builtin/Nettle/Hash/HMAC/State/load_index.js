// Indirect loader of the symbol index for __builtin.Nettle.Hash()->HMAC.State.

// Inherit __builtin.Nettle.MAC()->State.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/MAC/State/load_index.js", "__builtin.Nettle.MAC()->State");

PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/Hash/HMAC/State/index.js", false, ["__builtin.Nettle.MAC()->State"]);
