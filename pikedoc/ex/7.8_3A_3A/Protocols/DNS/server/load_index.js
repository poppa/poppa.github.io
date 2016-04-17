// Indirect loader of the symbol index for Protocols.DNS.server.

// Inherit Protocols.DNS.server.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/server/load_index.js", "Protocols.DNS.server");

PikeDoc.loadScript("ex/7.8_3A_3A/Protocols/DNS/server/index.js", false, ["Protocols.DNS.server"]);
