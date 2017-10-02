function mainController() {

    var vm = this;
    // to access functions from html, it seems as though you need to declare like this
    // and call with brackets, even though the variable vm.test has none
    vm.test = function test() {
        return "test";
    }

    vm.links = [
        { name: "Home", html: "html/main.html", linkcolor: "#53B3CB" },
        { name: "Bio", html: "html/bio.html", linkcolor: "#F9C22E" }
    ]
    vm.selectedLink = vm.links[0];
    vm.setLink = function setLink($event,link) {
        if (vm.isNavbarOpen) {
            $event.stopPropagation(); 
            vm.selectedLink = link;
        }
    }

}

angular
    .module('hoelApp')
    .controller('mainController', mainController);
