import RequestBuilder from "../requestBuilder";

class  AllApiController {
    static getAllApi() {
        return new RequestBuilder()
            .setMethod('GET')
            .setHeaders({'Content-Type': 'application/json'})
            .build();
    }    
}

export default AllApiController;