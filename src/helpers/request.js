const request = async (url, params = {}, method = "GET", data) => {
  let options = {
    method,
  }
  url =
    import.meta.env.VITE_APP_TARGET +
    url +
    "?" +
    new URLSearchParams(params).toString()
  if ("POST" === method.toLocaleUpperCase()) {
    options.body = JSON.stringify(data)
  }

  return await fetch(url, options).then(res => res.json())
}
export default request
