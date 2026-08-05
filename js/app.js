var projects = [
    {
        name: 'mWell',
        description: 'Telemedicine platform.',
        responsibilities: 'Maintained and added new features.',
        technology: 'Swift, SwiftUI, MVVM, Codable, Storyboard, Alamofire',
        link: 'https://apps.apple.com/ph/app/mwell-ph-24-7-doctor-consult/id1540729485',
        icon: 'images/logos/mWell.png',
        misc: 'five'
    },
    {
        name: 'Phoenix Live',
        description: 'Farm management platform for agriculture.',
        responsibilities: 'Maintain and add new features.',
        technology: 'Swift, MVVM, Alamofire, Realm, Fastlane, Mapbox, Localization, Unit Testing',
        link: 'https://apps.apple.com/au/app/phoenix-live/id1503981683',
        icon: 'images/logos/Phoenix Live.png',
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
        description: 'Your all-in-one home management platform.',
        responsibilities: 'Started the app from scratch and added new features.',
        technology: 'SwiftUI, MVVM-C, In-app Purchase, Unit Testing',
        link: 'https://apps.apple.com/au/app/cabinkeep-house-management/id6755082635',
        icon: 'images/logos/CabinKeep.png',
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
        icon: 'images/logos/CoNectar.png',
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
        description: 'Video collaboration platform.',
        responsibilities: 'Started the app from scratch, maintained and added new features.',
        technology: 'SwiftUI, MVVM-C, Codable, Storyboard, Alamofire, In-app Purchase',
        link: 'https://apps.apple.com/au/app/pinch-share-edit/id6475806094',
        icon: 'images/logos/Pinch.png',
        misc: 'three'
    },
    {
        name: 'Dermobella Skin & DermobellaHair',
        description: 'Skin &amp; hair analyzer.',
        responsibilities: 'Maintained and added new features.',
        technology: 'Swift, MVVM Architecture, RxSwift, Alamofire, SnapKit, Localization',
        link: 'https://apps.apple.com/us/app/dermobella-skin-2-evo/id1529570669',
        icon: 'images/logos/Dermobella.png',
        misc: 'one'
    },
];

function renderProjects() {
    var list = document.getElementById('projects-list');
    if (!list) return;
    list.innerHTML = projects.map(function (project) {
        var tag = project.link ? 'a' : 'div';
        var linkAttrs = project.link ? ' href="' + project.link + '" target="_blank" rel="noopener"' : '';
        var icon = ''; // temporarily disabled — colors only for now, project.icon kept for later
        return (
            '<li class="project-item stagger-item ' + project.misc + '">' +
            '<' + tag + linkAttrs + '>' +
            icon +
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
    document.querySelectorAll('.site-logo').forEach(function (logo) {
        logo.addEventListener('click', function () {
            location.reload();
        });
    });
}

// Placeholder copy — swap for real per-section text/imagery later.
var panelCopy = {
    hero: [
        'Building things that ship.',
        'Turning ideas into products.',
        'Code, coffee, repeat.',
        'Mobile and web, end to end.',
        'Software Engineer, always shipping.',
        'Pixels on the outside, logic underneath.',
        'From idea to App Store, and back again.',
        'Ten years in, still shipping on Fridays.',
        'One more feature, one more coffee.',
        'Quezon City, PH — open to the world.',
        'Ship it, measure it, improve it.',
        'A decade of turning specs into screens.',
        'Not just an app — a product.',
        'Built for App Store and browser tabs alike.',
        'Small team energy, big shipping habit.',
        'Hello there, thanks for scrolling.',
        'Where design meets a bit of engineering.',
        'A portfolio, still very much in progress.',
        'Powered by curiosity and too much coffee.',
        'Somewhere between Xcode and a text editor.'
    ],
    about: [
        'Getting to know the human behind the code.',
        'A decade of shipping mobile and web.',
        'Based in Quezon City, working worldwide.',
        'Clean design, real products.',
        'Coffee first, then code.',
        'Ten years, one craft, still curious.',
        'Started on iOS, never really stopped.',
        'Ships fast, cares about the details.',
        'Products over projects.',
        'Still sweating the small stuff.',
        'Grew up debugging, never really stopped.',
        'Believes good software feels invisible.',
        'Enjoys the messy middle of a build.',
        'Learned web first, picked up mobile along the way.',
        'Prefers shipping over perfecting forever.',
        'Ten years of client work, still curious.',
        'Reviews code like it\'s a craft, not a chore.',
        'Mentors when he can, learns when he can\'t.',
        'Believes good docs save future headaches.',
        'Somewhere between engineer and designer.'
    ],
    skills: [
        'A toolbox built over a decade.',
        'Swift by day, curious by night.',
        'Always learning the next stack.',
        'Mobile native, web capable.',
        'From Swift to SQL and everything between.',
        'Ten years of tools, still adding more.',
        'Comfortable in Xcode and the terminal.',
        'MVVM by default, pragmatic when needed.',
        'Ships apps, builds sites, tests everything.',
        'Picks the right tool, not the trendy one.',
        'Ten years deep, still filling gaps.',
        'Fluent in Swift, dangerous in SQL.',
        'One stack for mobile, another for the web.',
        'Tools change, the fundamentals don\'t.',
        'Tests things before they break in prod.',
        'Comfortable shipping CI/CD pipelines too.',
        'From Realm to PostgreSQL, whatever fits.',
        'Docker on the side, Xcode most days.',
        'Figma to code, without losing the details.',
        'Clean architecture, pragmatic delivery.'
    ],
    work: [
        'Selected work, shipped to production.',
        'Apps used by real people.',
        'A few favorites from the archive.',
        'Built from scratch, maintained with care.',
        'A decade of features, big and small.',
        'Telemedicine, farming, dating, and more.',
        'Every card here started as a blank file.',
        'Shipped, iterated, shipped again.',
        'Some built solo, some built with teams.',
        'More on the way — this list keeps growing.',
        'From startups to solo passion projects.',
        'Health, farming, dating, collecting — a bit of everything.',
        'Icons removed for now — colors do the talking.',
        'Ten apps, ten different problems solved.',
        'Web projects joining this list soon.',
        'Client work, side projects, a bit of both.',
        'Started from scratch more times than not.',
        'Maintained, refactored, and loved anyway.',
        'Every box here is a real shipped product.',
        'Colors for now, screenshots coming soon.'
    ],
    contact: [
        "Let's build something together.",
        'Say hello, or pitch an idea.',
        'Open to the next opportunity.',
        'Always up for a coffee chat.',
        "Let's talk about your next app.",
        'Freelance, full-time, or just curious — reach out.',
        'Replies faster than most App Store reviews.',
        'One email away from a first call.',
        'Got a rough idea? That\'s a good enough start.',
        'Based in PH, working with teams everywhere.',
        'The inbox is open, the coffee is ready.',
        'Happy to jump on a quick call.',
        'No project too small to talk about.',
        'Let\'s figure out what you\'re building.',
        'Currently open to freelance and full-time.',
        'Mobile, web, or both — happy to chat.',
        'One message away from a first chat.',
        'Serious inquiries and casual hellos both welcome.',
        'Would love to hear what you\'re working on.'
    ]
};

function initPanelText() {
    var panelText = document.getElementById('site-panel-text');
    if (!panelText || !('IntersectionObserver' in window)) return;
    var current = '';
    var textIndex = {};
    function setText(key) {
        if (key === current || !panelCopy[key]) return;
        current = key;
        var list = panelCopy[key];
        if (!(key in textIndex)) {
            textIndex[key] = Math.floor(Math.random() * list.length);
        }
        var idx = textIndex[key] % list.length;
        textIndex[key] = idx + 1;
        panelText.style.opacity = 0;
        setTimeout(function () {
            panelText.textContent = list[idx];
            panelText.style.opacity = 1;
        }, 300);
    }
    var targets = document.querySelectorAll('.hero, main .section');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                setText(entry.target.id);
            }
        });
    }, { rootMargin: '-45% 0px -45% 0px' });
    targets.forEach(function (el) { observer.observe(el); });
    setText('hero');
    panelText.style.opacity = 1;
}

function initProjectColorShuffle() {
    var work = document.getElementById('work');
    var items = document.querySelectorAll('.project-item');
    if (!work || !items.length || !('IntersectionObserver' in window)) return;
    var palette = ['one', 'two', 'three', 'four', 'five'];
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            items.forEach(function (item) {
                palette.forEach(function (c) { item.classList.remove(c); });
                item.classList.add(palette[Math.floor(Math.random() * palette.length)]);
            });
        });
    }, { threshold: 0.2 });
    observer.observe(work);
}

document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
    initReveal();
    initScrollProgress();
    initNavHighlight();
    initLogoRefresh();
    initPanelText();
    initProjectColorShuffle();
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    requestAnimationFrame(function () {
        document.querySelector('.hero').classList.add('is-visible');
    });
});
