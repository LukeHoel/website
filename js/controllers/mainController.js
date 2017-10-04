function mainController() {

    var vm = this;
    vm.pageLoaded = false;
    // to access functions from html, it seems as though you need to declare like this
    // and call with brackets, even though the variable vm.test has none
    vm.test = function test() {
        return "test";
    }

    vm.links = [
        {name: "Home", html: "html/home.html", linkcolor: "#53B3CB"},
        {name : "Projects", html: "html/projects.html", linkcolor:"#F9C22E"}
    ]
    vm.selectedLink = vm.links[0];
    vm.setLink = function setLink($event, link) {
        if (vm.isNavbarOpen) {
            $event.stopPropagation();
            vm.selectedLink = link;
        }
    }

    vm.closeNavForMobile = function closeNavForMobile() {
        if (window.innerWidth <= 992)
            vm.closeNav();
    }

    vm.closeNav = function closeNav() {
        if (vm.isNavbarOpen)
            vm.isNavbarOpen = false;
    }
    vm.isSmallScreen = function isSmallScreen() {
        if (window.innerWidth <= 992)
            return true;
        return false;
    }

}

angular
    .module('hoelApp')
    .controller('mainController', mainController);
