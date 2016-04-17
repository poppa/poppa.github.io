// Indirect loader of the symbol index for Web.Auth.Google.Authorization.

// Inherit Web.Auth.OAuth2.Client.
PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/OAuth2/Client/load_index.js", "Web.Auth.OAuth2.Client");

PikeDoc.loadScript("ex/predef_3A_3A/Web/Auth/Google/Authorization/index.js", false, ["Web.Auth.OAuth2.Client"]);
