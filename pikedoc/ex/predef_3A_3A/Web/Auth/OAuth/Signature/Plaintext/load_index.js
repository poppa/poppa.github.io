// Indirect loader of the symbol index for Web.Auth.OAuth.Signature.Plaintext.

// Inherit Web.Auth.OAuth.Signature.Base.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth/Signature/Base/load_index.js", "Web.Auth.OAuth.Signature.Base");

PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth/Signature/Plaintext/index.js", false, ["Web.Auth.OAuth.Signature.Base"]);
