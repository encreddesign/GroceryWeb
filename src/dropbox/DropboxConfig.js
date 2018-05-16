/**
 * Dropbox config for api
 */
export default function DropboxConfig() {
  return {
    urls: {
      domain: "https://www.dropbox.com",
      authCodeEndpoint: "/oauth2/authorize",
      authTokenEndpoint: "/oauth2/token"
    },
    security: {
      clientId: "l2adde4f7p0tr82"
    }
  };
}