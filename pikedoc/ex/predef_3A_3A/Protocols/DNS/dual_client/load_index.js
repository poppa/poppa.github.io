// Indirect loader of the symbol index for Protocols.DNS.dual_client.

// Inherit Protocols.DNS.tcp_client.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/tcp_client/load_index.js", "Protocols.DNS.tcp_client");

// Inherit Protocols.DNS.client.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/client/load_index.js", "Protocols.DNS.client");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/dual_client/index.js", false, ["Protocols.DNS.tcp_client","Protocols.DNS.client"]);
