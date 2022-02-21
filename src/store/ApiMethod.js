import Request from "./Request";

async function post(url, data, headers, token) {
  const conn = await new Request(headers, token);
  return conn.post(url, data);
}

async function get(url, params, headers, token) {
  const conn = await new Request(headers, token);
  return conn.get(url, params);
}

async function put(url, data, headers, token) {
  const conn = await new Request(headers, token);
  return conn.put(url, data);
}

async function del(url, params, headers, token) {
  const conn = await new Request(headers, token);
  return conn.delete(url + params);
}

export default {
  post,
  get,
  put,
  del,
};
