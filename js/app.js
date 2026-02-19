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

app.controller('ProjCtrl', ['$scope', '$timeout',
    function ($scope, $timeout) {
        $scope.projects = [
            {
                index: 0,
                name: 'mWell',
                description: 'mWell is the Philippines first fully integrated, fully digital health and wellness platform - Winner Best Mobile Innovation for Digital Life 2023 Global Mobile (GLOMO) Awards',
                position: 'iOS Developer',
                responsibilities: 'Develop & maintain product features. Collaborate with different teams.',
                link: 'https://apps.apple.com/ph/app/mwell-ph-24-7-doctor-consult/id1540729485',
                technology: 'Swift, MVVM, Codable, Storyboard, Alamofire, Unit Testing, Crashlytics, Jira',
                delay: '2s',
                animName: 'fadeInUp',
                misc: 'one'
            },
            {
                index: 1,
                name: 'Pinch',
                description: 'Video Collaboration App',
                position: 'iOS Developer',
                responsibilities: 'Started the app from scratch, maintained and added new features.',
                technology: 'SwiftUI, MVVM-C, Codable, Storyboard, Alamofire, In-app Purchase',
                link: 'https://apps.apple.com/au/app/pinch-share-edit/id6475806094',
                delay: '2.1s',
                animName: 'fadeInUp',
                misc: 'two'
            },
            {
                index: 2,
                name: 'Phoenix Live',
                description: 'Phoenix is unrivalled in the ag software industry in terms of its ability to cover an entire rural production system.',
                technology: 'Swift, MVVM, RxSwift, RxDatasources, Alamofire, Realm, Fastlane, Mapbox, Localization, Unit Testing',
                position: 'Mobile Application Developer - iOS',
                responsibilities: 'Develop and maintain product features. Coordinates directly with the client',
                link: 'https://apps.apple.com/au/app/phoenix-live/id1503981683',
                delay: '2.2s',
                animName: 'fadeInUp',
                misc: 'three'
            },
            {
                index: 3,
                name: 'Dermobella',
                description: 'New professional system for measurement of skin/hair care products ideal for any dermatological professional and brand consultants.​',
                technology: 'Swift, MVVM-Clean Architecture, RxSwift, Alamofire, SnapKit, Localization',
                position: 'iOS Developer',
                responsibilities: 'Convert iPAD views to iPhone views. Develop and maintain product features.',
                link: 'https://apps.apple.com/us/app/dermobella-skin-2-evo/id1529570669',
                delay: '2.3s',
                animName: 'fadeInUp',
                misc: 'four'
            },
            {
                index: 4,
                name: 'CabinKeep',
                description: 'Your all-in-one home management app',
                technology: 'SwiftUI, MVVM-C, InApp Purchase, Unit Testing',
                position: 'iOS Developer',
                responsibilities: 'Started the app from scratch and added new features.',
                link: 'https://apps.apple.com/au/app/cabinkeep-house-management/id6755082635',
                noInvert: true,
                delay: '2.4s',
                animName: 'fadeInUp',
                misc: 'five'
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
            $scope.transitioning = true;
            $timeout(function () {
                $scope.current = $scope.projects[key];
                $scope.next = $scope.next + 1;
                if ($scope.next === $scope.projects.length) {
                    $scope.next = 0;
                }
                $scope.projName = $scope.projects[key].misc;
                $scope.activeMenu = $scope.projects[key];
                $scope.transitioning = false;
            }, 250);
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
