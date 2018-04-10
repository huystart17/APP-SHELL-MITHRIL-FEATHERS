import m from "mithril";

import { buildUriLink, errorHandle } from "../lib/helper";

export default class Actions {
    constructor(entity) {
        this.api_get = buildUriLink(entity, "get");
        this.api_find = buildUriLink(entity, "find");
        this.api_update = buildUriLink(entity, "update");
        this.api_remove = buildUriLink(entity, "remove");
    }
    get(data, callback, errorHandle = errorHandle) {
        m
            .request({ method: "POST", url: this.api_get, data: data })
            .then(callback)
            .catch(errorHandle);
    }
    find(data, callback, errorHandle = errorHandle) {
        m
            .request({ method: "POST", url: this.api_find, data: data })
            .then(callback)
            .catch(errorHandle);
    }
    update(data, callback, errorHandle = errorHandle) {
        m
            .request({ method: "POST", url: this.api_update, data: data })
            .then(callback)
            .catch(errorHandle);
    }
    remove(data, callback, errorHandle = errorHandle) {
        m
            .request({ method: "POST", url: this.api_remove, data: data })
            .then(callback)
            .catch(errorHandle);
    }
}
