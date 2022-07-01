enum AllowedMethods {
  "post",
  "POST",
  "get",
  "GET",
  "put",
  "PUT",
}
export type Body =
  | string
  | Blob
  | ArrayBufferView
  | ArrayBuffer
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | null
  | undefined;
export type Method = keyof typeof AllowedMethods;
export type _Headers =
  | Headers
  | string[][]
  | Record<string, string>
  | undefined;
  interface WeatherMain {
    temp: string;
  }
  
  interface WeatherData {
    icon: string;
    description: string;
  }
  
  export interface SearchWeather {
    dt_txt: string;
    main: WeatherMain;
    weather: WeatherData[];
  }

  export interface responseData {
    loading: boolean,
    data: SearchWeather[],
    error: string,
  }