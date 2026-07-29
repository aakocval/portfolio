var projects = [
    {
        name: 'mWell',
        description: 'Telemedicine App.',
        responsibilities: 'Maintained and added new features.',
        technology: 'Swift, SwiftUI, MVVM, Codable, Storyboard, Alamofire',
        link: 'https://apps.apple.com/ph/app/mwell-ph-24-7-doctor-consult/id1540729485',
        misc: 'five'
    },
    {
        name: 'Phoenix Live',
        description: 'Farm management app for agriculture.',
        responsibilities: 'Maintain and add new features.',
        technology: 'Swift, MVVM, Alamofire, Realm, Fastlane, Mapbox, Localization, Unit Testing',
        link: 'https://apps.apple.com/au/app/phoenix-live/id1503981683',
        misc: 'four'
    },
    {
        name: 'Intro.u',
        description: 'Match and meet with people around you according to your preferences.',
        responsibilities: 'Started the app from scratch and added new features.',
        technology: 'SwiftUI, MVVM-C, Google Maps, In-app Purchase, Unit Testing',
        link: 'https://apps.apple.com/ph/app/intro-u-real-connections/id6758976647',
        misc: 'one'
    },
    {
        name: 'PnutGo',
        description: 'Explore the world, discover rare creatures, and build your ultimate collection.',
        responsibilities: 'Maintained and added new features.',
        technology: 'SwiftUI, MVVM-C, Google Maps, In-app Purchase, Unit Testing',
        link: 'https://apps.apple.com/au/app/pnutgo-collect-cute-animals/id6755419201',
        misc: 'two'
    },
    {
        name: 'CabinKeep',
        description: 'Your all-in-one home management app.',
        responsibilities: 'Started the app from scratch and added new features.',
        technology: 'SwiftUI, MVVM-C, In-app Purchase, Unit Testing',
        link: 'https://apps.apple.com/au/app/cabinkeep-house-management/id6755082635',
        misc: 'three'
    },
    {
        name: 'Symptly',
        description: 'Health Tracking Made Easy.',
        responsibilities: 'Maintained and added new features.',
        technology: 'SwiftUI, MVVM, Codable, In-app Purchase',
        link: 'https://apps.apple.com/au/app/symptly/id6751874212',
        misc: 'four'
    },
    {
        name: 'CoNectar',
        description: 'Space for safe, transparent and easy connection with people that understand.',
        responsibilities: 'Started the app from scratch, maintained and added new features.',
        technology: 'Swift, MVVM-C, Codable, Storyboard, Alamofire, Unit Testing',
        link: 'https://apps.apple.com/ph/app/conectar/id6743191827',
        misc: 'five'
    },
    {
        name: 'Zero2Seventeen',
        description: 'Marketplace for 2nd hand items from ages 0 to 17.',
        responsibilities: 'Started the app from scratch, maintained and added new features.',
        technology: 'Swift, MVVM-C, Storyboard, Alamofire, Unit Testing',
        link: 'https://apps.apple.com/us/app/zero2seventeen/id6739604370',
        misc: 'one'
    },
    {
        name: 'Pinch',
        description: 'Video Collaboration App.',
        responsibilities: 'Started the app from scratch, maintained and added new features.',
        technology: 'SwiftUI, MVVM-C, Codable, Storyboard, Alamofire, In-app Purchase',
        link: 'https://apps.apple.com/au/app/pinch-share-edit/id6475806094',
        misc: 'three'
    },
    {
        name: 'Dermobella Skin & DermobellaHair',
        description: 'Analyzer Apps.',
        responsibilities: 'Maintained and added new features.',
        technology: 'Swift, MVVM Architecture, RxSwift, Alamofire, SnapKit, Localization',
        link: 'https://apps.apple.com/us/app/dermobella-skin-2-evo/id1529570669',
        misc: 'one'
    },
];

function renderProjects() {
    var list = document.getElementById('projects-list');
    if (!list) return;
    list.innerHTML = projects.map(function (project) {
        var tag = project.link ? 'a' : 'div';
        var linkAttrs = project.link ? ' href="' + project.link + '" target="_blank" rel="noopener"' : '';
        return (
            '<li class="project-item stagger-item ' + project.misc + '">' +
            '<' + tag + linkAttrs + '>' +
            '<span class="project-name">' + project.name + '</span>' +
            '<span class="project-desc">' + project.description + '</span>' +
            '</' + tag + '>' +
            '</li>'
        );
    }).join('');
}

function initReveal() {
    var sections = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        sections.forEach(function (el) { el.classList.add('is-visible'); });
        return;
    }
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    sections.forEach(function (el) { observer.observe(el); });
}

function initScrollProgress() {
    var bar = document.getElementById('scroll-progress');
    if (!bar) return;
    function update() {
        var scrollTop = window.scrollY;
        var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        var pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
        bar.style.width = pct + '%';
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
}

function initNavHighlight() {
    var navLinks = document.querySelectorAll('#hero-nav a[data-nav]');
    if (!navLinks.length || !('IntersectionObserver' in window)) return;
    var sections = Array.prototype.slice.call(document.querySelectorAll('main .section'));
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            var link = document.querySelector('#hero-nav a[data-nav="' + entry.target.id + '"]');
            if (!link) return;
            if (entry.isIntersecting) {
                navLinks.forEach(function (l) { l.classList.remove('active'); });
                link.classList.add('active');
            }
        });
    }, { rootMargin: '-45% 0px -45% 0px' });
    sections.forEach(function (el) { observer.observe(el); });
}

function initLogoRefresh() {
    document.querySelectorAll('.hero-logo, .about-logo').forEach(function (logo) {
        logo.addEventListener('click', function () {
            location.reload();
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
    initReveal();
    initScrollProgress();
    initNavHighlight();
    initLogoRefresh();
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    requestAnimationFrame(function () {
        document.querySelector('.hero').classList.add('is-visible');
    });
});
