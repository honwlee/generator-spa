define([
    "skylark/query"
], function($) {
    $.ready(function(){
        $("footer").html("Copyright © 2016-" +
            (new Date()).getFullYear() +
            "  <a href='http://hudaokeji.com'>hudaokeji</a>"
        );
    })
});
