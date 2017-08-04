define([
    "skylark/spa",
    "text!app/templates/home.html"
], function(spa, homeTpl) {
    return {
        pathto: "/",
        type: spa.Route,
        data: {
            name: 'home',
            navName: "Home"
        },
        content: homeTpl,
        rendering: function(e) {

        },
        entered: function(){
        },
        exited: function() {
        }
    };
});
