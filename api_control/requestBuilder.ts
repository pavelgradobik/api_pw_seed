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
     
     middleUrl(middleUrl: string | URL): this {
          this.options.middleUrl = middleUrl.toString();
          return this;
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