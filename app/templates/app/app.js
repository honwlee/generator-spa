require.config({
    baseUrl: "./",
    packages: [{
        name: "skylark",
        location: "/skylark"
    }, {
        name: "app",
        location: "/app"
    }],
    paths: {
        "text": "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text"
    }
});

require([
    "skylark/query",
    "skylark/spa",
    "app/main",
    "app/config/config"
], function($, spa, main, config) {
    var app = spa(config);
    app.prepare().then(function() {
        app.run();
    });
});
