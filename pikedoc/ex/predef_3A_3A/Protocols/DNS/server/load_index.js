// Indirect loader of the symbol index for Protocols.DNS.server.

// Inherit Protocols.DNS.server_base.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/server_base/load_index.js", "Protocols.DNS.server_base");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/server/index.js", false, ["Protocols.DNS.server_base"]);
