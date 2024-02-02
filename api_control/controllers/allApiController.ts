import RequestBuilder from "../requestBuilder";

export class emptyTemplateWithAnIdea {
    async getAllApi(urltails: string | number) {
        return {
            await request.url(`/${urltails}/`).send(<operations[method][responses][200/300/400]['shema']>).body
        }
    }
}

// class  AllApiController {
//     static getAllApi() {
//         return new RequestBuilder()
//             .setMethod('GET')
//             .setHeaders({'Content-Type': 'application/json'})
//             .build();
//     }    
// }

// export default AllApiController;