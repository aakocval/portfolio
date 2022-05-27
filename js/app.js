var app = angular.module('app', []);

app.controller('AboutCtrl', ['$scope',
    function ($scope) {
        $scope.firstName = "val";
        $scope.lastName = "Moratalla";
        $scope.position = "iOS Developer";
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
            }
        ]
    }
]);

app.controller('ProjCtrl', ['$scope',
    function ($scope) {
        $scope.projects = [
            {
                index: 0,
                name: 'Phoenix Live',
                description: 'Phoenix is unrivalled in the ag software industry in terms of its ability to cover an entire rural production system. While other programs have come and gone, Phoenix remains the premier farm management software solution - designed specifically for Aussie producers.',
                technology: 'MVVM, RXSwift, Alamofire, Realm, Fastlane, Mapbox, Unit Testing',
                link: 'https://apps.apple.com/au/app/phoenix-live/id1503981683',
                delay: '2s',
                animName: 'fadeInUp',
                misc: 'one'
            },
            {
                index: 1,
                name: 'Quest Rewards',
                description: 'An enterprise gamification software with employee motivation at its core.',
                technology: 'MVVM, RxSwift, Moya, Realm, RxDataSources, ObjectMapper, SnapKit, Unit Testing',
                link: 'https://apps.apple.com/la/app/quest-rewards/id1501470735',
                delay: '2.1s',
                animName: 'fadeInUp',
                misc: 'two'
            },
            {
                index: 2,
                name: 'Carry Ph',
                description: 'Imagine having the things you need and want delivered right to your doorsteps, fast, affordable and reliable, nothing comes close to CARRY, crafted to be the BETTER normal during these trying times.',
                technology: 'MVP, Moya, Storyboard/Xib, Fastlane, Google Maps and Places, Firebase, APNs',
                link: 'https://apps.apple.com/ph/app/carry-ph/id1531075542',
                delay: '2.2s',
                animName: 'fadeInUp',
                misc: 'three'
            },
            {
                index: 3,
                name: 'Kitika',
                description: 'Get the right care,right at home! No need to brave metro’s traffic. Skip the long lines and wait time. Plus, reduce your risk of exposure to COVID-19. ',
                technology: 'MVP, Moya, SwiftLint, ObjectMapper, Firebase, SnapKit, MessageKit, FB Login',
                link: 'https://kitika.com',
                delay: '2.3s',
                animName: 'fadeInUp',
                misc: 'four'
            },
            {
                index: 4,
                name: 'beepbeep',
                description: 'Beep Beep is an online platform that aims to link automobile owners with car establishments around Metro Manila.',
                technology: 'MVC, SwiftyJson, Moya, Google Maps, APNs',
                link: 'https://beepbeep.ph',
                delay: '2.4s',
                animName: 'fadeInUp',
                misc: 'five'
            }
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
            $scope.projName = $scope.projects[key].misc;
            $scope.activeMenu = $scope.projects[key];
        }

        $scope.getIndex = function (currentIndex, shift) {
            var len = $scope.projects.length;
            return (((currentIndex + shift) + len) % len)
        }


    }
]);



$(document).ready(function () {
    $('#preloader').addClass('animated bounceOut out', function () {
        $(this).remove();
    });
    $('.v').addClass('active');
    new WOW().init();

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
