// Indirect loader of the symbol index for Web.Auth.Google.Plus.

// Inherit Web.Auth.Google.Authorization.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/Google/Authorization/load_index.js", "Web.Auth.Google.Authorization");

PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/Google/Plus/index.js", false, ["Web.Auth.Google.Authorization"]);
