// Indirect loader of the symbol index for Protocols.DNS.dual_server.

// Inherit Protocols.DNS.tcp_server.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/tcp_server/load_index.js", "Protocols.DNS.tcp_server");

// Inherit Protocols.DNS.server.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/server/load_index.js", "Protocols.DNS.server");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/dual_server/index.js", false, ["Protocols.DNS.tcp_server","Protocols.DNS.server"]);
