// Indirect loader of the symbol index for Protocols.Bittorrent.DHT()->GetPeers.

// Inherit Protocols.Bittorrent.DHT()->DHTOperation.
PikeDoc.loadScript("ex/predef_3A_3A/Protocols/Bittorrent/DHT/DHTOperation/load_index.js", "Protocols.Bittorrent.DHT()->DHTOperation");

PikeDoc.loadScript("ex/predef_3A_3A/Protocols/Bittorrent/DHT/GetPeers/index.js", false, ["Protocols.Bittorrent.DHT()->DHTOperation"]);
