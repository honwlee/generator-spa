define([
    "skylark/spa",
    "skylark/query",
    "skylark/router",
    "app/config/routes"
], function(spa, $, router, routes) {
    var currentNav,
        setActive = function(selector) {
            if (currentNav) $(currentNav).removeClass("active");
            currentNav = $(selector);
            if (currentNav) currentNav.addClass("active");
        };
    return {
        hookers: {
            starting: function(evt) {
                var spa = evt.spa,
                    basePath = spa.getConfig("baseUrl"),
                    _el = $("#nav-container");
                var ul = $("<ul>").attr({
                    class: "nav navbar-nav"
                }).delegate(".nav-item", "click", function(e) {
                    setActive(e.target.parentNode);
                });
                $(".logo-nav").on("click", function() {
                    router.go("");
                    setActive(".home-nav");
                });
                router.on("routed", function(e) {
                    setActive("." + e._args.current.route.getConfigData("name") + "-nav");
                });
                for (var key in routes) {
                    var page = routes[key],
                        name = page.data.name,
                        navName = page.data.navName,
                        path = basePath + page.pathto;
                    $("<li>").attr({
                        class: name + "-nav"
                    }).addContent("<a class='nav-item' href='" + path + "'>" + navName + "</a>").appendTo(ul);
                }
                _el.html(ul);
            }
        }
    };
});
