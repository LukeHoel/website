function mainController () {

    var vm = this;
    // to access functions from html, it seems as though you need to declare like this
    // and call with brackets, even though the variable vm.test has none
    vm.test = function test(){
        return "test";
    }

    vm.getWidth = function getWidth(){
        var width = document.getElementById('sidebar').clientWidth;
    }

    vm.links = [
        {name : "Home", html: "html/main.html", controller: "js/controllers/main.js"},
        {name : "Bio", html: "html/bio.html", controller: "js/controllers/bio.js"}
    ]


}
    
    angular
      .module('hoelApp')
      .controller('mainController', mainController);
