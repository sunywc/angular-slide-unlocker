define(['angular','slide.unlocker'], function () {
    angular.module('mc.slideUnlocker', [])
    .directive('slideUnlocker', [function () {

        return {
            restrict: 'AE',
            scope:{
                success:'&'
            },
            template: '<div class="slideunlock-wrapper">'
                        + '<div class="slideunlock-image">'
                        +   '<div class="slideunlock-image-hole"></div>'
                        +   '<div class="slideunlock-image-piece">'
                        +      '<img src="images/Scenery.jpg">'
                        +   '</div>'
                        +   '<img src="images/Scenery.jpg">'
                        + '</div>'
                        + '<input type="hidden" value="" class="slideunlock-lockable"/>'
                        + '<div class="slideunlock-slider">'
                        +   '<span class="slideunlock-label"></span>'
                        +   '<span class="slideunlock-label-tip">Slide to unlock!</span>'
                        + '</div>'
                        + '</div>',
            link: function (scope, element) {

                var elm = element.find('.slideunlock-wrapper');

                var slider = new SliderUnlock(elm, {
                    labelTip: "滑动解锁",
                    successLabelTip: "解锁成功",
                    duration: 200
                }, function(){
                    scope.success();
                }, function(){

                });

                slider.init();

            }
        }
    }]);
});


