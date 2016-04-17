// Indirect loader of the symbol index for Serializer.Encodeable.

// Inherit Serializer.Serializable.
PikeDoc.loadScript("ex/predef_3A_3A/Serializer/Serializable/load_index.js", "Serializer.Serializable");

PikeDoc.loadScript("ex/predef_3A_3A/Serializer/Encodeable/index.js", false, ["Serializer.Serializable"]);
