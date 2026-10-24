var projects = [
    {
        name: 'mWell',
        description: '24/7 doctor consults, reimagined for mobile.',
        responsibilities: 'Maintained and added new features.',
        technology: 'Swift, SwiftUI, MVVM, Codable, Storyboard, Alamofire',
        link: 'https://apps.apple.com/ph/app/mwell-ph-24-7-doctor-consult/id1540729485',
        icon: 'images/logos/mWell.png',
        screenshots: ['images/work/mWell/1.jpg', 'images/work/mWell/2.jpg', 'images/work/mWell/3.jpg', 'images/work/mWell/4.jpg', 'images/work/mWell/5.jpg', 'images/work/mWell/6.jpg'],
        misc: 'six',
        rating: { score: 4.6, count: 779 },
        downloads: '1M+'
    },
    {
        name: 'Symptly',
        description: 'Track symptoms. Spot patterns. Feel better.',
        responsibilities: 'Maintained and added new features.',
        technology: 'SwiftUI, MVVM, Codable, In-app Purchase',
        link: 'https://apps.apple.com/au/app/symptly/id6751874212',
        screenshots: ['images/work/Symptly/1.jpg', 'images/work/Symptly/2.jpg', 'images/work/Symptly/3.jpg', 'images/work/Symptly/4.jpg', 'images/work/Symptly/5.jpg', 'images/work/Symptly/6.jpg'],
        misc: 'four',
        rating: { score: 4.9, count: 7 }
    },
    {
        name: 'Zero2Seventeen',
        description: 'A marketplace for outgrown kids\' gear.',
        responsibilities: 'Started the app from scratch, maintained and added new features.',
        technology: 'Swift, MVVM-C, Storyboard, Alamofire, Unit Testing',
        link: 'https://apps.apple.com/us/app/zero2seventeen/id6739604370',
        screenshots: ['images/work/Zero2Seventeen/1.jpg', 'images/work/Zero2Seventeen/2.jpg', 'images/work/Zero2Seventeen/3.jpg', 'images/work/Zero2Seventeen/4.jpg'],
        misc: 'five'
    },
    {
        name: 'TrackNav',
        description: 'Precision navigation for locomotive drivers.',
        responsibilities: 'Started the app from scratch and added new features.',
        technology: 'SwiftUI, MVVM-C, Maps, Unit Testing',
        link: 'https://apps.apple.com/au/app/tracknav/id6791431103',
        screenshots: ['images/work/TrackNav/1.jpg', 'images/work/TrackNav/2.jpg', 'images/work/TrackNav/3.jpg', 'images/work/TrackNav/4.jpg'],
        misc: 'one'
    },
    {
        name: 'Phoenix Live',
        description: 'Precision tools for modern agriculture.',
        responsibilities: 'Maintain and add new features.',
        technology: 'Swift, MVVM, Alamofire, Realm, Fastlane, Mapbox, Localization, Unit Testing',
        link: 'https://play.google.com/store/apps/details?id=com.appetiser.agdata&hl=en',
        icon: 'images/logos/Phoenix Live.png',
        screenshots: ['images/work/PhoenixLive/1.jpg', 'images/work/PhoenixLive/2.jpg', 'images/work/PhoenixLive/3.jpg', 'images/work/PhoenixLive/4.jpg', 'images/work/PhoenixLive/5.jpg', 'images/work/PhoenixLive/6.jpg'],
        misc: 'four'
    },
    {
        name: 'Salt Diary',
        description: 'The data-driven fishing diary.',
        link: 'https://apps.apple.com/ph/app/salt-diary/id6780346074',
        screenshots: ['images/work/SaltDiary/1.jpg', 'images/work/SaltDiary/2.jpg', 'images/work/SaltDiary/3.jpg', 'images/work/SaltDiary/4.jpg', 'images/work/SaltDiary/5.jpg'],
        misc: 'three'
    },
    {
        name: 'Crown Asia',
        description: 'Premium homes and condos, searchable online.',
        link: 'https://www.crownasia.com.ph/',
        screenshots: ['images/work/CrownAsia/1.jpg'],
        wide: true,
        misc: 'one'
    },
    {
        name: 'Bizu',
        description: 'Online ordering for a patisserie and cafe.',
        link: 'https://bizu.ph/',
        screenshots: ['images/work/Bizu/1.jpg'],
        wide: true,
        misc: 'two'
    },
    {
        name: 'Thirty One Digital',
        description: 'A digital solutions company for forward-thinking brands.',
        link: 'https://thirtyonedigital.com/',
        screenshots: ['images/work/ThirtyOneDigital/1.jpg'],
        wide: true,
        misc: 'three'
    }
];

function renderProjects() {
    var list = document.getElementById('projects-list');
    if (!list) return;
    var sorted = projects.slice().sort(function (a, b) {
        var aCount = a.rating ? a.rating.count : -1;
        var bCount = b.rating ? b.rating.count : -1;
        if (aCount !== bCount) return bCount - aCount;
        var aScore = a.rating ? a.rating.score : 0;
        var bScore = b.rating ? b.rating.score : 0;
        return bScore - aScore;
    });
    list.innerHTML = sorted.map(function (project) {
        var tag = project.link ? 'a' : 'div';
        var linkAttrs = project.link ? ' href="' + project.link + '" target="_blank" rel="noopener"' : '';
        var gallery = '';
        if (project.screenshots && project.screenshots.length) {
            var shotClass = 'project-shot' + (project.landscape ? ' project-shot--landscape' : '');
            var shots = project.screenshots.map(function (src, i) {
                return '<img class="' + shotClass + '" src="' + src + '" alt="' + project.name + ' screenshot ' + (i + 1) + '" loading="lazy">';
            }).join('');
            gallery = '<span class="project-gallery">' + shots + '</span><span class="project-shade"></span>';
        }
        var stats = '';
        if (project.downloads) {
            stats += '<span class="project-stat">' + project.downloads + ' downloads</span>';
        }
        if (project.rating) {
            var ratingLabel = project.rating.count === 1 ? 'rating' : 'ratings';
            stats += '<span class="project-stat">★ ' + project.rating.score.toFixed(1) + ' · ' + project.rating.count + ' ' + ratingLabel + '</span>';
        }
        var statsMarkup = stats ? '<span class="project-stats">' + stats + '</span>' : '';
        return (
            '<li class="project-item stagger-item ' + project.misc + (project.wide ? ' project-item--wide' : '') + '">' +
            '<' + tag + linkAttrs + '>' +
            gallery +
            '<span class="project-name">' + project.name + '</span>' +
            '<span class="project-desc">' + project.description + '</span>' +
            statsMarkup +
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
    }, { threshold: 0 });
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

function initCopyrightVisibility() {
    var copyright = document.querySelector('.site-copyright');
    var contact = document.getElementById('contact');
    if (!copyright || !contact) return;
    if (!('IntersectionObserver' in window)) {
        copyright.classList.add('is-visible');
        return;
    }
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            copyright.classList.toggle('is-visible', entry.isIntersecting);
        });
    }, { rootMargin: '-45% 0px -45% 0px' });
    observer.observe(contact);
}

var heroRoles = [
    'Software Developer',
    'Coffee Lover',
    'Mobile App Builder',
    'Product-Minded Engineer',
    'Bug Whisperer',
    'Full-Time Shipper',
    'Pixel Perfectionist',
    'Weekend Tinkerer',
    'Professional Cmd+S-er'
];

function initHeroRoleRotation() {
    var els = document.querySelectorAll('.hero-role');
    if (!els.length || heroRoles.length < 2) return;
    var index = 0;
    setInterval(function () {
        index = (index + 1) % heroRoles.length;
        els.forEach(function (el) { el.style.opacity = 0; });
        setTimeout(function () {
            els.forEach(function (el) { el.textContent = heroRoles[index]; });
            els.forEach(function (el) { el.style.opacity = 1; });
        }, 300);
    }, 6000);
}

function initLogoRefresh() {
    document.querySelectorAll('.site-logo').forEach(function (logo) {
        logo.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function initTopbarAutoHide() {
    var bar = document.getElementById('site-topbar');
    if (!bar) return;
    var mq = window.matchMedia('(max-width: 900px)');
    var lastY = window.scrollY;
    function update() {
        if (!mq.matches) {
            bar.classList.remove('is-hidden');
            lastY = window.scrollY;
            return;
        }
        var currentY = window.scrollY;
        if (currentY > lastY && currentY > 80) {
            bar.classList.add('is-hidden');
        } else {
            bar.classList.remove('is-hidden');
        }
        lastY = currentY;
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
}

function initLogoScrollRotate() {
    var logo = document.querySelector('.site-logo');
    var work = document.getElementById('work');
    if (!logo || !work) return;
    var mq = window.matchMedia('(min-width: 901px)');
    function update() {
        if (!mq.matches) {
            logo.style.removeProperty('--logo-progress');
            return;
        }
        var end = work.offsetTop;
        var progress = end > 0 ? Math.min(Math.max(window.scrollY / end, 0), 1) : 0;
        logo.style.setProperty('--logo-progress', progress);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
}

// Placeholder copy — swap for real per-section text/imagery later.
var panelCopy = {
    about: [
        'Building things that ship.',
        'Turning ideas into products.',
        'Code, coffee, repeat.',
        'Mobile and web, end to end.',
        'Software Developer, always shipping.',
        'Pixels on the outside, logic underneath.',
        'From idea to launch, and back again.',
        'Ten years in, still shipping on Fridays.',
        'One more feature, one more coffee.',
        'Quezon City, PH — open to the world.',
        'Ship it, measure it, improve it.',
        'A decade of turning specs into screens.',
        'Not just an app — a product.',
        'Built for app stores and browser tabs alike.',
        'Small team energy, big shipping habit.',
        'Hello there, thanks for scrolling.',
        'Where design meets a bit of engineering.',
        'A portfolio, still very much in progress.',
        'Powered by curiosity and too much coffee.',
        'Somewhere between an IDE and a text editor.',
        'Getting to know the human behind the code.',
        'A decade of shipping mobile and web.',
        'Based in Quezon City, working worldwide.',
        'Clean design, real products.',
        'Coffee first, then code.',
        'Ten years, one craft, still curious.',
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
    work: [
        'Selected work, shipped to production.',
        'Products used by real people.',
        'A few favorites from the archive.',
        'Built from scratch, maintained with care.',
        'A decade of features, big and small.',
        'Telemedicine, farming, fishing, real estate, and more.',
        'Shipped, iterated, shipped again.',
        'Some built solo, some built with teams.',
        'More on the way — this list keeps growing.',
        'From startups to solo passion projects.',
        'Health, farming, fishing, real estate — a bit of everything.',
        'Real screenshots, straight from production.',
        'Different problems, one craft.',
        'Apps and websites, side by side.',
        'Client work, side projects, a bit of both.',
        'Started from scratch more times than not.',
        'Maintained, refactored, and loved anyway.',
        'Every box here is a real shipped product.'
    ],
    contact: [
        "Let's build something together.",
        'Say hello, or pitch an idea.',
        'Open to the next opportunity.',
        'Always up for a coffee chat.',
        "Let's talk about your next project.",
        'Freelance, full-time, or just curious — reach out.',
        'Replies faster than most pull requests get reviewed.',
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
    var targets = document.querySelectorAll('main .section');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                setText(entry.target.id);
            }
        });
    }, { rootMargin: '-45% 0px -45% 0px' });
    targets.forEach(function (el) { observer.observe(el); });
    setText('about');
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
    }, { threshold: 0 });
    observer.observe(work);
}

function initDotField() {
    var canvas = document.getElementById('dot-field');
    if (!canvas || !canvas.getContext) return;

    var ctx = canvas.getContext('2d');
    var SPACING = 24;
    var RADIUS = 2.4;
    var REACH = 120;
    var PUSH = 26;
    var EASE = 0.16;
    var LEVELS = 8;
    var color = canvas.getAttribute('data-dot-color') || '#a3a3aa';
    var dots = [];
    var buckets = [];
    var mouse = null;
    var running = false;
    var dim = 1;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = color;
        buckets.forEach(function (bucket, i) {
            ctx.globalAlpha = ((i + 1) / LEVELS) * dim;
            ctx.beginPath();
            bucket.forEach(function (d) {
                ctx.moveTo(d.x + RADIUS, d.y);
                ctx.arc(d.x, d.y, RADIUS, 0, Math.PI * 2);
            });
            ctx.fill();
        });
        ctx.globalAlpha = 1;
    }

    function build() {
        var rect = canvas.getBoundingClientRect();
        var dpr = window.devicePixelRatio || 1;
        var w = rect.width;
        var h = rect.height;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        var narrow = w < 700;
        dim = narrow ? 0.5 : 1;
        var top = -h * 0.12;
        var height = h * 1.2;
        var halfWidth = narrow ? w * 0.5 : w * 0.4;
        var thick = narrow ? 140 : 290;
        var cx = narrow ? w / 2 : w * 0.7;
        dots = [];
        buckets = [];
        for (var i = 0; i < LEVELS; i++) buckets.push([]);

        for (var y = SPACING / 2; y < h; y += SPACING) {
            var t = (y - top) / height;
            if (t < 0 || t > 1) continue;
            var arm = halfWidth * (1 - t);
            for (var x = SPACING / 2; x < w; x += SPACING) {
                var dist = Math.min(Math.abs(x - (cx - arm)), Math.abs(x - (cx + arm)));
                var inside = thick / 2 - dist;
                if (inside <= 0) continue;
                var fade = Math.min(1, inside / (SPACING * 1.5), (y - top) / 40);
                if (fade <= 0) continue;
                var d = { ox: x, oy: y, x: x, y: y };
                dots.push(d);
                buckets[Math.min(LEVELS, Math.ceil(fade * LEVELS)) - 1].push(d);
            }
        }
        draw();
    }

    function step() {
        var moving = 0;
        dots.forEach(function (d) {
            var tx = d.ox;
            var ty = d.oy;
            if (mouse) {
                var dx = d.ox - mouse.x;
                var dy = d.oy - mouse.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < REACH && dist > 0.001) {
                    var f = 1 - dist / REACH;
                    var push = f * f * PUSH;
                    tx += (dx / dist) * push;
                    ty += (dy / dist) * push;
                }
            }
            d.x += (tx - d.x) * EASE;
            d.y += (ty - d.y) * EASE;
            moving = Math.max(moving, Math.abs(tx - d.x), Math.abs(ty - d.y));
        });
        draw();
        if (moving > 0.05) requestAnimationFrame(step);
        else running = false;
    }

    function kick() {
        if (running) return;
        running = true;
        requestAnimationFrame(step);
    }

    build();

    var lastWidth = window.innerWidth;
    var resizeTimer = null;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            // Mobile browsers fire resize when the URL bar collapses; the canvas height is fixed (100vh), so skip those.
            if (window.innerWidth === lastWidth && window.matchMedia('(hover: none)').matches) return;
            lastWidth = window.innerWidth;
            build();
        }, 150);
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('mousemove', function (e) {
        mouse = { x: e.clientX, y: e.clientY };
        kick();
    });
    document.documentElement.addEventListener('mouseleave', function () {
        mouse = null;
        kick();
    });
}

function initCursorRing() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    var ring = document.createElement('div');
    ring.className = 'cursor-ring';
    ring.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ring);

    var shown = false;
    window.addEventListener('mousemove', function (e) {
        if (!shown) {
            shown = true;
            document.documentElement.classList.add('has-custom-cursor');
        }
        ring.style.transform = 'translate3d(' + e.clientX + 'px,' + e.clientY + 'px,0)';
        ring.classList.add('is-visible');
        ring.classList.toggle('is-active', !!(e.target.closest && e.target.closest('a, button, [role="button"], input, textarea, select, label')));
    });
    document.documentElement.addEventListener('mouseleave', function () {
        ring.classList.remove('is-visible');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    renderProjects();
    initReveal();
    initScrollProgress();
    initNavHighlight();
    initCopyrightVisibility();
    initHeroRoleRotation();
    initLogoRefresh();
    initTopbarAutoHide();
    initLogoScrollRotate();
    initPanelText();
    initDotField();
    initCursorRing();
    initProjectColorShuffle();
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
