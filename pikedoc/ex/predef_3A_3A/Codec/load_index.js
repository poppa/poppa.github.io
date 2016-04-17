// Indirect loader of the symbol index for Codec.

// Inherit Decoder.
PikeDoc.loadScript("ex/predef_3A_3A/Decoder/load_index.js", "Decoder");

// Inherit Encoder.
PikeDoc.loadScript("ex/predef_3A_3A/Encoder/load_index.js", "Encoder");

PikeDoc.loadScript("ex/predef_3A_3A/Codec/index.js", false, ["Decoder","Encoder"]);
