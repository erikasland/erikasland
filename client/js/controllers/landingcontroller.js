myModule.controller('landingController', function($location, $anchorScroll, $window){
    var _this = this;
    this.showUpArrow = false;

    this.goToAnchor = function(anchorLink){
        console.log(anchorLink)
        if($location.hash() !== anchorLink){
            $location.hash(anchorLink);
        }else{
            $anchorScroll();
        }
    }

    this.redirToProject = function(sitenum){
        if(sitenum === 1){
            window.open('http://ec2-52-37-90-251.us-west-2.compute.amazonaws.com');
        }else if(sitenum === 2){
            window.open('http://ec2-52-36-78-35.us-west-2.compute.amazonaws.com');
        }else if(sitenum === 3){
            window.open('http://54.218.54.156');
        }else if (sitenum === 4){
            window.open('http://ec2-52-33-95-40.us-west-2.compute.amazonaws.com');
        }
    }
})