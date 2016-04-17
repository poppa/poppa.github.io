// Indirect loader of the symbol index for SSL.Cipher.KeyExchangePSK.

// Inherit SSL.Cipher.KeyExchange.
PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchange/load_index.js", "SSL.Cipher.KeyExchange");

PikeDoc.loadScript("ex/predef_3A_3A/SSL/Cipher/KeyExchangePSK/index.js", false, ["SSL.Cipher.KeyExchange"]);
