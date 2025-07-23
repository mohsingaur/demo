class AipSuccess{
    constructor(statusCode, message, result){
        this.version = '1.0.0';
        this.timestamp = new Date().getTime().toString();
        this.statusCode = statusCode;
        this.message = message;
        this.result = result;
    }
}

class ApiError{
    constructor(statusCode, message, error){
        this.version = '1.0.0';
        this.timestamp = new Date().getTime().toString();
        this.statusCode = statusCode;
        this.message = message;
        this.error = error;
    }
}

module.exports = {
    AipSuccess,
    ApiError
}