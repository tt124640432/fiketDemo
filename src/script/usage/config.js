//router
angular.module("app").config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
        .when('/home','/home/homepage/wlan')
        .when('/home/homepage','/home/homepage/wlan')
        // .when('/home/fbLive/:Id', {
        //     templateUrl: 'view/Id.html'
        // })
        //.when('/home/fbLive','/home/fbLive/1')
        // .when('/home/fbLive','/home/fbLive/1')
        // .when('/home/fbLive','/home/fbLive/1')
        // .when('/home/fbLive','/home/fbLive/1')
        .when('','/guide');
        ///.otherwise("guide");

    $stateProvider
        .state("guide", {
            url: "/guide",
            templateUrl: "src/view/guide.html",
            controller:"guideCtrl"
        })
        .state("home", {
            url: "/home",
            templateUrl: "src/view/home.html",
            controller: "homeCtrl"
        })
        .state('home.homepage',{
            url: "/homepage",
            templateUrl: "src/view/homepage.html",
            controller:'fbCtrl'
        })
        .state('home.homepage.wlan',{
            url: "/wlan",
            templateUrl: "src/view/wlan.html",
            controller:'fbCtrl'
        })
        .state('home.homepage.guanzhu',{
            url: "/guanzhu",
            templateUrl: "src/view/guanzhu.html"
        })
         .state('home.faxian',{
             url: "/faxian",
             templateUrl: "src/view/faxian.html"
        })
         .state('home.camera',{
             url: "/camera",
             templateUrl: "src/view/camera.html"
         })
         .state('home.mine',{
            url: "/mine",
            templateUrl: "src/view/mine.html"
        })
        .state('home.exit',{
            url: "/exit",
            templateUrl: "src/view/exit.html",
            controller:'exitCtrl'
        })
})