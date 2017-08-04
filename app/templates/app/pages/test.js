define([
    "skylark/spa",
    "text!app/templates/test.html"
], function(spa, testTpl) {
    return {
        pathto: "/test",
        type: spa.Route,
        data: {
            name: 'test',
            navName: "TEST"
        },
        content: testTpl,
        rendering: function(e) {

        },
        entered: function(){
        },
        exited: function() {
        }
    };
});
