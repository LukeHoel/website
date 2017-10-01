function mainController () {

    var vm = this;
    // to access functions from html, it seems as though you need to declare like this
    // and call with brackets, even though the variable vm.test has none
    vm.test = function test(){
        return "test";
    }

    vm.links = [
        {name : "Home", route: "/"},
        {name : "Bio", route: "/bio"}
    ]


}
    
    angular
      .module('hoelApp')
      .controller('mainController', mainController);
