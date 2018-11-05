$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7268335631',
        limit: 8,
        resolution: 'thumbnail',
        accessToken: '7268335631.1677ed0.9ace48d1f2da41fab0588ee488927139',
        sortBy: 'most-recent',
        template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="insta-likes"><div style="display: table; vertical-align: middle; height: 100%; width: 100%;"><span style="display: table-cell; vertical-align: middle; height: 100%; width: 100%;">{{likes}} <i class="fa fa-heart"></i><br/>{{comments}} <i class="fa fa-comment"></i></span></div></div></a></li>',

    });

    userFeed.run();


 /*  
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });*/


});