// Indirect loader of the symbol index for Protocols.DNS.async_tcp_client.

// Inherit Protocols.DNS.async_client.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/async_client/load_index.js", "Protocols.DNS.async_client");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/async_tcp_client/index.js", false, ["Protocols.DNS.async_client"]);
