// Indirect loader of the symbol index for Charset.Encoder.

// Inherit Charset.Decoder.
PikeDoc.loadScript("ex/predef_3A_3A/Charset/Decoder/load_index.js", "Charset.Decoder");

PikeDoc.loadScript("ex/predef_3A_3A/Charset/Encoder/index.js", false, ["Charset.Decoder"]);
