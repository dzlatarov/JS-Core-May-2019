function validator (request){
    const metod = ['GET','POST', 'DELETE','CONNECT'];
    const version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0'];

    let uriPattern = /^[\w.]+$/;
    let messagePattern = /^$|^[^<>\\&'"]+$/;

    if(!metod.includes(request.method)){
        throw new Error(`Invalid request header: Invalid Method`);
    } else if(!request.uri || !uriPattern.test(request.uri)){
        throw new Error(`Invalid request header: Invalid URI`);
    } else if(!version.includes(request.version)){
        throw new Error(`Invalid request header: Invalid Version`);
    } else if(request.message === undefined || !messagePattern.test(request.message)){
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return request;
}