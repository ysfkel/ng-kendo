(function(){
    angular.module('app',['kendo.directives'])
    .controller('ctr',function($http){
       var vm=this;
      vm.name="yusuf"
       vm.options=['apples','oranges'];

           vm.selectOptions = {
      placeholder: "Select products...",
      dataTextField: "ProductName",
      dataValueField: "ProductID",
      dataSource: {
        transport: {
                 read: function(options) {
                    url = "http://demos.telerik.com/kendo-ui/service/products";
                    $http.jsonp(url).success(function (data, status, headers, config) {
                        options.success(data);
                    }).error(function (data, status, headers, config) {
                        options.error(data);
                    });
                }
        //   read: {
        //     url: "http://demos.telerik.com/kendo-ui/service/products",
        //     dataType: "jsonp"
        //   }
        }
      }
    };
    vm.selectedIds = [1, 9] ;

    //
    //    vm.mainGridOptions = {
    //             dataSource: {
    //                 type: "odata",
    //                 transport: {
    //                     read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
    //                 }
    //             },
    //             columns: [{
    //                 field: "FirstName",
    //                 title: "First Name {{1+1}}",
    //                 headerAttributes: {"ng-non-bindable": true},
    //                 width: "180px"
    //                 },{
    //                 field: "LastName",
    //                 title: "Last Name",
    //                 width: "120px"
    //                 },{
    //                 field: "Country",
    //                 width: "120px"
    //                 },{
    //                 field: "City",
    //                 width: "120px"
    //                 }]
    //         };
    //

    });
})();



/**
 * 
 *   dataSource: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                    url = "http://www.mocky.io/v2/543d67f4774fb48400c53072?callback=JSON_CALLBACK";
                    $http.jsonp(url).success(function (data, status, headers, config) {
                        options.success(data);
                    }).error(function (data, status, headers, config) {
                        options.error(data);
                    });
                }
            }
        })
 * 
 */