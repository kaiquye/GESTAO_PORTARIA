const cors = require('cors');

// adicionar mais configurações...

class Cors {

    #config = {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 200
    }

    Config() {
        return cors(this.#config);
    }
}

module.exports = new Cors();