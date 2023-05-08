// import axios, { AxiosResponse } from "axios";

// // 현재 mock server api 주소임
// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_URL,
//   // withCredentials: true,
// });

// interface Response<T> extends AxiosResponse {
//   data: T;
// }

// async function get<T>(endpoint: string): Promise<Response<T>> {
//   console.log(`GET 요청 : ${endpoint}`);

//   try {
//     const response = api.get(endpoint, {
//       // headers: {
//       //   Authorization: `Bearer ${localStorage.getItem("token")}`,
//       // },
//     })
//     return response as Promise<Response<T>>;
//   } catch (error) {
//     console.error('GET 요청 ERROR', error)
//     throw error
//   }
// }

// async function post<T>(endpoint: string, data: unknown): Promise<Response<T>> {
//   console.log(`POST 요청 : ${endpoint}`);

//   return api.post(endpoint, data, {
//     // headers: {
//     //   "Content-Type": "application/json",
//     //   Authorization: `Bearer ${localStorage.getItem("token")}`,
//     // },
//   }) as Promise<Response<T>>;
// }

// async function patch<T>(endpoint: string, data: unknown): Promise<Response<T>> {
//   console.log(`PATCH 요청 : ${endpoint}`);

//   return api.patch(endpoint, data, {
//     // headers: {
//     //   "Content-Type": "application/json",
//     //   Authorization: `Bearer ${localStorage.getItem("token")}`,
//     // },
//   }) as Promise<Response<T>>;
// }

// async function del<T>(endpoint: string): Promise<Response<T>> {
//   console.log(`DELETE 요청 : ${endpoint}`);

//   return api.delete(endpoint, {
//     // headers: {
//     //   Authorization: `Bearer ${localStorage.getItem("token")}`,
//     // },
//   }) as Promise<Response<T>>;
// }

// export { api, get, post, patch, del as delete };

import axios, { AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL;

async function request<T>(
  method: string,
  endpoint: string,
  data?: unknown
): Promise<AxiosResponse<T>> {
  console.log(`${method} 요청: ${endpoint}`);

  try {
    const response = await axios.request<T>({
      method,
      url: endpoint,
      baseURL,
      data,
    });

    return response;
  } catch (error) {
    console.error(`${method} 요청 ERROR`, error);
    throw error;
  }
}

 function get<T>(endpoint: string): Promise<AxiosResponse<T>> {
  return request<T>("GET", endpoint);
}

 function post<T>(
  endpoint: string,
  data: unknown
): Promise<AxiosResponse<T>> {
  return request<T>("POST", endpoint, data);
}

 function patch<T>(
  endpoint: string,
  data: unknown
): Promise<AxiosResponse<T>> {
  return request<T>("PATCH", endpoint, data);
}

 function del<T>(endpoint: string): Promise<AxiosResponse<T>> {
  return request<T>("DELETE", endpoint);
}

export { get, post, patch, del as delete };