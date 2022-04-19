import request from "@/helpers/request"

export const getPosts = params =>
  request("/posts", { ...params, _limit: 5, _sort: "id", _order: "desc" })

export const postPosts = data => request("/posts", {}, "post", data)
