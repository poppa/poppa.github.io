// Indirect loader of the symbol index for Protocols.DNS.tcp_client.

// Inherit Protocols.DNS.client.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/client/load_index.js", "Protocols.DNS.client");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/tcp_client/index.js", false, ["Protocols.DNS.client"]);
