// Indirect loader of the symbol index for Protocols.DNS.async_tcp_client()->Request.

// Inherit Protocols.DNS.client()->Request.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/client/Request/load_index.js", "Protocols.DNS.client()->Request");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/async_tcp_client/Request/index.js", false, ["Protocols.DNS.client()->Request"]);
