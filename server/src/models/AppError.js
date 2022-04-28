const HTTP = require('http')

class AppError {
    Status;
    message;
    message;
    constructor(status, message) {
        this.Status = status
        this.message = message
    }
    Error() {
        return {
            status: HTTP.STATUS_CODES[this.Status],
            error: this.message,
            sucess: false,
        }
    }
}

module.exports = AppError;
