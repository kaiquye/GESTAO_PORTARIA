const HTTP = require('http')

class AppError{

    AppError(status, message){
        return {
            status : status, 
            message : message || HTTP.STATUS_CODES[status],
            sucess : sucess,
        }
    }
}

module.exports = new AppError();
