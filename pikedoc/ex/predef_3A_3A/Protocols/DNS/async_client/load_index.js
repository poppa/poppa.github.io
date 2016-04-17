// Indirect loader of the symbol index for Protocols.DNS.async_client.

// Inherit Protocols.DNS.client.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/client/load_index.js", "Protocols.DNS.client");

// Inherit Stdio.UDP.
PikeDoc.loadScript("ex/predef_3A_3A/Stdio/UDP/load_index.js", "Stdio.UDP");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/DNS/async_client/index.js", false, ["Protocols.DNS.client","Stdio.UDP"]);
