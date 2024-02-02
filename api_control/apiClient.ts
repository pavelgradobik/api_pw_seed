import { url } from "inspector";
import { emptyTemplateWithAnIdea } from "./controllers/allApiController";

export class ApiClient {
    public readonly allApiController: emptyTemplateWithAnIdea

    constructor(options: Partial<baseControllerOptions>){
        const defaultUrl = {
            url: urlfromConfig
            middleUrl: middleurl

        }
        const mergedOptions = {...defaultUrl ,...defaultOptions, ...options}
        this.allApiController = new emptyTemplateWithAnIdea(mergedOptions);


    }

    unauthorized(){...

    loginBasicAuth(username: string, password: string){...

    loginOAuth2(username: string, password: string){...
}