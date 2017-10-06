function mainController() {

    var vm = this;
    vm.pageLoaded = false;
    vm.json = [];
    vm.showPage = false;
    // to access functions from html, it seems as though you need to declare like this
    // and call with brackets, even though the variable vm.test has none
    vm.test = function test() {
        var vm = this;
        debugger;
    }

    vm.links = [
        { name: "Home", html: "html/home.html", jsonLocation:"none", linkcolor: "#53B3CB" , bgimage: "url('assets/background.svg')"},
        { name: "Projects", html: "html/projects.html", jsonLocation: "json/projects.json", linkcolor: "#F9C22E" , bgimage: "url('assets/backgroundcode.svg')"},
        { name: "Gallery", html: "html/gallery.html", jsonLocation: "json/gallery.json", linkcolor: "#F15946" , bgimage: "url('assets/backgroundart.svg')"},
        { name: "Professional", html: "html/professional.html", jsonLocation: "json/experience.json", linkcolor: "#13BF63" , bgimage: "url('assets/background.svg')"}
  
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
    vm.getPageData = function getPageData(vm) {
        vm.json.push({ dummy: "dummy object" });
        for (var i = 1; i < vm.links.length; i++) {
            if (location != "none") {
                $.getJSON(vm.links[i].jsonLocation, function (json) {
                    var scope = angular.element($("#page")).scope();
                    scope.$apply(function () {
                        vm.json.push(json);
                    });
                });
            }
        }
    }
}

angular
    .module('hoelApp')
    .controller('mainController', mainController);
