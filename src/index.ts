import { HandleRequest, HttpRequest, HttpResponse } from "@fermyon/spin-sdk"
//@ts-ignore
import tinyBadgeMaker from 'tiny-badge-maker'

const encoder = new TextEncoder()

export const handleRequest: HandleRequest = async function (request: HttpRequest): Promise<HttpResponse> {

  let queryParams = new URL(request.headers["spin-full-url"]).searchParams

  if (!queryParams.has("src")) {
    return {
      status: 400,
      headers: {},
      body: encoder.encode("There needs to be a query paramaeter src pointing at the json file").buffer
    }
    // return {
    //   status: 200,
    //   headers:{ "content-type":"text/html"},
    //   body: encoder.encode("<html><head></head><body><img src=\"http://localhost:3000?src=https://gist.githubusercontent.com/karthik2804/3bd187a2ec3087f16c651d3d63fa5da1/raw/c22790bd6227df7be8dccdbd845e7585465d70cb/test.json\"></body></html>").buffer
    // }
  }

  let response = await fetch(queryParams.get("src") || "")

  if (response.status >= 400 && response.status < 600) {
    return {
      status: response.status,
      headers: {},
      body: encoder.encode(response.statusText).buffer
    }
  }

  let badgeData = await response.json()

  //@ts-ignore
  console.log(badgeData.label)

  let badge = tinyBadgeMaker(badgeData)
  console.log(badge)
  return {
    status: 200,
    headers: { "Content-Type": "image/svg+xml" },
    body: encoder.encode(badge).buffer
  }
}
