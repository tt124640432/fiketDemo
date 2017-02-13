angular.module("app")
    .controller("guideCtrl", function ($scope, $state) {
        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            slidesPerView: 1,
            centeredSlides: true
        });
    })
    .controller("homeCtrl", function ($scope, $state, $http) {
        $http.get('./livelist.json')
            .success(function (data) {
                console.log(data);
                $scope.data = data.data;
            });
    })

    .controller('fbCtrl', function ($scope, $state, $timeout) {

        /*-----------------------------------------------------------------------------*/
        var mySwiper = new Swiper('.sc2', {
            // history: '#/home/homepage/fbLive',
            //setWrapperSize :true,
            //hashnavWatchState:true,
            //initialSlide:1,
            direction: "horizontal",
            onSlideChangeStart: function (swiper) {
                var index = swiper.activeIndex;
                var slip = $(".hcont");
                slip.children().eq(index).addClass("on").siblings().removeClass();
            }
        });

        var arr = $(".hcont").children("span");
        //console.log(arr);
        //arr.onclick=function(){
        //    var index=$(this).index();
        //    arr.eq(index).addClass("on").siblings().removeClass();
        //    mySwiper.slideTo(index);
        //};
        $scope.ck = function (x) {
            mySwiper.slideTo(x)
        };
        $timeout(function () {
            var myScroll = new IScroll('.ssd1', {
                scrollX: true
            });
        }, 200);
    })
    /*----------------------------------------------------------*/
    .controller('exitCtrl', function ($scope,$state) {
        $scope.exitclick = function () {
            var r = confirm("确认退出？");
            if (r == true) {
                $state.go("home",{},{reload:true});
            }
        }
    });