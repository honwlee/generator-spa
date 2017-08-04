define([
    "skylark/spa",
    "app/pages/home",
    "app/pages/test",
], function(spa, home, test) {
    var routes = {
        home: home,
        test: test
    };
    return routes;
});
