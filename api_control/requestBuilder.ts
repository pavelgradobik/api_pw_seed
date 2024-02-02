import { request } from "@playwright/test";

export class PlayWRequest {
     protected options: Partial<{
          url: string;
          middleUrl: string; // rephrase this to be more clear /middleUrl/?searchParams
          method: string;
          headers: Record<string, string>;
          data: object | null;
     }> = {};

     callUrl(url: string | URL): this {
          this.options.url = url.toString();
          return this;
     }

     // probably remove set to avoid confusion in future use this is no setter

     // rename to smth more usameble plan to use when api/resourseCollectiion/resourse
     setMiddleUrl(middleUrl: string | URL): this {
          this.options.middleUrl = middleUrl.toString();
          return this;
     }

     setMethod(method: string): this {
          this.options.method = method;
          return this;
     }

     setHeaders(headers: Record<string, string>): this {
          this.options.headers = this.options.headers ?? {};
          this.options.headers = {...this.options.headers, ...headers};
          return this;
     }

     setBody(data: object): this {
          this.options.data = data;
          return this;
     }

     //params after ? in the url

     async sendRequest<T>() {
          if (!this.options.url) {
               throw new Error('URL is undefined');
          }

          const requestContext =  await request.newContext({
               baseURL: this.options.url,
          });

          const response = await requestContext.fetch(this.options.url ?? this.options.middleUrl , {
               ...this.options
          });

          const responseBody = response.json() as T;
          

     }

}

// class RequestBuilder {
//    private method: string;
//    private headers: Record<string, string> = {};
//    private body: object | null;

//    constructor() {
//       this.method = 'GET';
//    }

//    public setMethod(method: string): RequestBuilder {
//         this.method = method;
//         return this;
//    }

//    public setHeaders(headers: Record<string, string>): RequestBuilder {
//         this.headers = headers;
//         return this;
//    }

//    public setBody(body: object): RequestBuilder {
//         this.body = body;
//         return this;
//    }

//    public build() {
//         return {
//             method: this.method,
//             headers: this.headers,
//             body: this.body
//         }
//    }   
// }

// export default RequestBuilder;