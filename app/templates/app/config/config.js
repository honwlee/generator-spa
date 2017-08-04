define([
    "app/config/routes",
    "app/plugins/navbar/navbar"
], function(routes, navbar) {
    var config = {
        "name": "<%= appName %>",
        "title": "--SPA--",
        "baseUrl" : "/spa" ,
        "homePath": "/",
        "page": {
            "routeViewer": "#pageContainer"
        },
        "plugins": {
            "navbar": navbar
        }
    };
    config.routes = routes;
    return config;
});
