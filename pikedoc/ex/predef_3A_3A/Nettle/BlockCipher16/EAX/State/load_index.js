// Indirect loader of the symbol index for Nettle.BlockCipher16()->EAX.State.

// Inherit __builtin.Nettle.AEAD()->State.
PikeDoc.loadScript("ex/predef_3A_3A/__builtin/Nettle/AEAD/State/load_index.js", "__builtin.Nettle.AEAD()->State");

PikeDoc.loadScript("ex/predef_3A_3A/Nettle/BlockCipher16/EAX/State/index.js", false, ["__builtin.Nettle.AEAD()->State"]);
