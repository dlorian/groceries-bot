const got = require('got');

module.exports = class RestService {

    constructor(host, port, resourcePath) {
        this.host = host;
        this.port = port;
        this.resourcePath = resourcePath;
    }

    findAll() {
        console.log(`RestService.findAll()`);
        return got.get(this._getBaseUrl());
    };

    findById(id) {
        console.log(`RestService.findById(${id})`);
        return got.get(this._getBaseUrl() + `/${id}`);
    };

    create(data) {
        console.log(`RestService.create(${data})`);
        return got.post(this._getBaseUrl(), { json: true, body: data });
    }

    _getBaseUrl() {
        return `http://${this.host}:${this.port}/${this.resourcePath}`;
    }
}