// Mounts the FolioBot chat widget (https://github.com/aakocval/foliobot) on this site.
// Everything the bot knows lives in profile.json (shape defined by the foliobot repo's
// schema/profile.schema.json); the widget and answer engine are loaded from the CDN in index.html.
// Edit profile.json to change what the bot says.
//
// LEARNING PATH: to make this an AI chatbot, pass `endpoint: '<your backend url>'`
// instead of the scripted responder. The roadmap is in the foliobot repo (docs/LEARNING.md).
(function () {
    if (!window.FolioBot || !FolioBot.fromProfile) return;

    fetch('profile.json')
        .then(function (res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        })
        .then(function (profile) {
            FolioBot.init(FolioBot.fromProfile(profile, {
                // Bottom-right corner of the dark side panel. 'auto' follows the
                // visitor's light/dark system setting.
                theme: 'auto',
                position: { right: 24, bottom: 24 }
            }));
        })
        .catch(function (err) {
            // No profile, no chat: better to show nothing than a broken widget.
            console.warn('[chat] Chat disabled, could not load profile.json:', err);
        });
})();
