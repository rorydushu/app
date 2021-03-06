/**
 * Created by luor on 2016/9/27.
 */
var app = require('../app');
var echartDir = app.directive("myEchart",function($http){
    return {
        restrict:'A',
        link:function($scope,element,attrs){
            var myChart = echarts.init(element[0]);
            
            $scope.$watch(attrs['eData'], function() {
                var option = $scope.$eval(attrs.eData);
                if (angular.isObject(option)) {
                    myChart.setOption(option);
                }
            }, true);
            
            $scope.getDom = function() {
                return {
                    'height': element[0].offsetHeight,
                    'width': element[0].offsetWidth
                };
            };
            $scope.$watch($scope.getDom, function() {
                // resize echarts图表
                myChart.resize();
            }, true);
        }
    }
});
echartDir.$inject = ['$http'];