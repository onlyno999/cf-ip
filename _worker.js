export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      url.hostname = 'sb.box9.dedyn.io/config/https://go.onlyno999.dynv6.net4bb5-bf3d-c1fa19afd98c'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
