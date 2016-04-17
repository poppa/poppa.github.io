// Indirect loader of the symbol index for Standards.PKCS.Signature.Signed.

// Inherit Standards.ASN1.Types.Sequence.
PikeDoc.loadScript("ex/predef_3A_3A/Standards/ASN1/Types/Sequence/load_index.js", "Standards.ASN1.Types.Sequence");

PikeDoc.loadScript("ex/predef_3A_3A/Standards/PKCS/Signature/Signed/index.js", false, ["Standards.ASN1.Types.Sequence"]);
