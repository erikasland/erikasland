var myModule = angular.module('myApp', ['ngRoute'])

.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 0;   // always scroll by 50 extra pixels
}])

myModule.directive('buttonDisappear', function($window, $timeout){
    return function(scope){
        angular.element($window).bind("scroll", function() {
            var elem = angular.element('#mystory')[0].offsetTop
            var topOfScreen = $window.scrollY;
            if (topOfScreen > elem) {
                scope.landingControl.showUpArrow = true;
                scope.$apply()
            }else{
                scope.landingControl.showUpArrow = false;
                scope.$apply()
            }
        });
    }
})

myModule.directive('headerChange', function($window){
    return function(scope){
        angular.element($window).bind("scroll", function() {
            var headerElem = angular.element('header');
            var myStoryElem = angular.element('#mystory');
            var techElem = angular.element('.tech-wrap');
            var projectsElem = angular.element('#projects');
            var contactElem = angular.element('#contact');
            var finalProjectWrap = angular.element('#final-img');
            var topOfScreen = $window.scrollY;

            if (topOfScreen > myStoryElem[0].offsetTop - 100 && topOfScreen < techElem[0].offsetTop - 200) {
                headerElem.html('<h1 class="main-title">ABOUT</h1>');
                headerElem.css('background-color', 'black');
            }else if(topOfScreen > techElem[0].offsetTop - 200 && topOfScreen < projectsElem[0].offsetTop - 100){
                headerElem.html('<h1 class="main-title">TECHNOLOGIES</h1>');
                headerElem.css('background-color', 'black');
            }else if(topOfScreen > projectsElem[0].offsetTop - 100 && topOfScreen < contactElem[0].offsetTop - 100){
                headerElem.html('<h1 class="main-title">PROJECTS');
                headerElem.css('background-color', 'black');
            }else if(topOfScreen > contactElem[0].offsetTop - 100){
                headerElem.html("<h1 class='main-title'>CONTACT");
                headerElem.css('background-color', 'black');
            }else{
                headerElem.html('<h1 class="main-title">ERIK ÁSLAND</h1>');
                headerElem.css('background-color', 'transparent');
            }
            scope.$apply();
        });
    }
})

myModule.directive('iDo', function(){
    return function(scope){
        var element = angular.element('.changing-text');
        var words = ['front-end.', 'back-end.', 'e-commerce websites.', 'landing-pages.', 'with Javascript.', 'with Python.', 'the internet.']
        var startStopBool = false;
        var word_count = 0;
        var letter_count = 0;

        function updateText(){
            if(words[word_count] === undefined){ //if no more words in array stop
                word_count = 0;
            }else if(element[0].innerHTML.length === words[word_count].length){  //switch to next word
                word_count++;
                letter_count = 0;
                clearInterval(frontDisplay);
                element.css('animation', 'blink 2s infinite');
                setTimeout(function(){restartInterval()}, 3000); //wait 1 second and then restart the text
            }else{
                element[0].innerHTML += words[word_count][letter_count]
                letter_count++;
            }
        }
        
        function restartInterval(){
            element[0].innerHTML = '';
            frontDisplay = setInterval(updateText, 100);
        }

        var frontDisplay = setInterval(updateText, 100)  //Starts text cycle
    }
})

myModule.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/landing.html',
            controller: 'landingController',
            controllerAs: 'landingControl'
        })
})