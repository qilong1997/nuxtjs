export default defineEventHandler(async event => {
  const { url, token } = getQuery(event);
  const query = { ...getQuery(event) } as any;
  delete query.url;
  delete query.token;
  const queryString = new URLSearchParams(Object.entries(query)).toString();
  const r = await fetch(`${url}?${queryString}`, {
    headers: {
      csrf: token,
      cookie: `kw_token=${token}`,
      Referer: "https://www.kuwo.cn/",
    },
  });
  const data = await r.json()
  return data
})