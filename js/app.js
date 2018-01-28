var app = angular.module('app', []);

app.controller('AboutCtrl', ['$scope',
    function ($scope) {
        $scope.firstName = "val";
        $scope.lastName = "Moratalla";
        $scope.position = "front-end Developer";
        $scope.social = [
            {
                name: 'email',
                link: 'mailto:aakocval@gmail.com',
                target: '_parent'
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/in/valmoratalla/',
                target: '_blank'
            },
            {
                name: 'facebook',
                link: 'https://www.facebook.com/val.moratalla',
                target: '_blank'
            },
            {
                name: 'instagram',
                link: 'https://www.instagram.com/aakocval/',
                target: '_blank'
            },
        ]
    }
]);

app.controller('ProjCtrl', ['$scope',
    function ($scope) {
        $scope.projects = [
            {
                index: 0,
                name: 'beepbeep',
                description: 'Beep Beep is an online platform that aims to link automobile owners with car establishments around Metro Manila.',
                technology: 'html5, css3, jquery, angularjs, laravel, responsiveness, seasonal theme',
                link: 'http://beepbeep.ph/',
                delay: '2s',
                animName: 'fadeInUp'
            },
            {
                index: 1,
                name: 'playboyph',
                description: 'Playboyph is a R18 website that channels a series of blogs, videos, apps, magazines and downloadable copies which are easy-to-understand, user-friendly and download-easy. ',
                technology: 'html5, css3, jquery, laravel, responsiveness',
                link: 'http://playboyph.com/',
                delay: '2.1s',
                animName: 'fadeInUp'
            },
            {
                index: 2,
                name: 'iplayboyph',
                description: 'iPlayboyph is a R18 online magazine that provides users with some pornographic contents.',
                technology: 'html5, css3, jquery, turnjs, laravel, responsiveness',
                link: 'http://iplayboyph.com/',
                delay: '2.2s',
                animName: 'fadeInUp'
            },
            {
                index: 3,
                name: 'cheeseanything',
                description: 'Cheeseanything is an online application that aims to provide different recipes and stories to their end users. ',
                technology: 'html5, css3, jquery, laravel, responsiveness',
                link: 'http://cheeseanything.com/',
                delay: '2.3s',
                animName: 'fadeInUp'
            },
            {
                index: 4,
                name: 'thebourke',
                description: 'The Bourke is a reservation website that lets users easily look for accomodation. The website also shows the facilities and foods they offer.',
                technology: 'html5, css3, jquery, laravel, responsiveness',
                link: 'http://thebourke.com/',
                delay: '2.4s',
                animName: 'fadeInUp'
            },
            {
                index: 5,
                name: 'snickers',
                description: 'Snickers Dont Commute Hungry is an app where users can upload, add stickers and share their photo for fabulous prizes.',
                technology: 'html5, css3, jquery, laravel, responsiveness',
                link: 'https://dontcommutehungry.com',
                delay: '2.5s',
                animName: 'fadeInUp'
            },
            {
                index: 6,
                name: 'findwork',
                description: 'Findwork is a landing page website that shows an easy-to-use job search mobile app that connects companies to job seekers in Southeast Asia.',
                technology: 'html5, css3, jquery, laravel, responsiveness',
                link: 'http://findwork.asia/',
                delay: '2.6s',
                animName: 'fadeInUp'
            },
        ];

        $scope.hoverIn = function (val) {
            $scope.projName = val;
            $scope.active = 'active';
        }

        $scope.hoverOut = function () {
            $scope.projName = '';
        }

        $scope.current = $scope.projects[0];
        
        $scope.setActive = function (val, key) {
            $scope.activeMenu = val;
            $scope.current = $scope.projects[key];
            $scope.next = key + 1;
            if ($scope.next === $scope.projects.length) {
                $scope.next = 0;
            }
        }

        $scope.nextPage = function (key) {

            $scope.current = $scope.projects[key];
            $scope.next = $scope.next + 1;
            if ($scope.next === $scope.projects.length) {
                $scope.next = 0;
            }
            $scope.projName = $scope.projects[key].name;
            $scope.activeMenu = $scope.projects[key];
        }

        $scope.getIndex = function (currentIndex, shift) {
            var len = $scope.projects.length;
            return (((currentIndex + shift) + len) % len)
        }


    }
]);



$(document).ready(function () {
    
    $(window).on("load", function (e) {
        $('#preloader').addClass('animated bounceOut out', function () {
            $(this).remove();
        });
        $('.v').addClass('active');
        new WOW().init();
    });

    $('.about-link, #about-me .close-icon').on('click', function () {
        $('#main-wrapper').toggleClass('about');
        $('#about-me').toggleClass('active');
        $('#projects-list ul').toggleClass('hide');
    });

    $('#projects-list ul li a, .projects-link, #project-cont .close-icon').on('click', function () {
        $('#main-wrapper').toggleClass('projects');
        $('#project-cont').toggleClass('active');
        $('#projects-list ul, .logo-colored, .about-link').toggleClass('hide');
    });


});