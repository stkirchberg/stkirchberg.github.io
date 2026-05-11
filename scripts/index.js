const links = document.querySelectorAll('.nav-link');
const activeInd = document.querySelector('.nav-indicator-active');
const hoverInd = document.querySelector('.nav-indicator-hover');
const sections = document.querySelectorAll('section');

function moveIndicator(element, indicator) {
    if (element) {
        indicator.style.width = `${element.offsetWidth}px`;
        indicator.style.left = `${element.offsetLeft}px`;
    }
}

links.forEach(link => {
    link.addEventListener('mouseenter', () => moveIndicator(link, hoverInd));
});

window.addEventListener('scroll', () => {
    let current = "about";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
            moveIndicator(link, activeInd);
        }
    });
});


document.querySelector('.whatsapp-link').addEventListener('click', (e) => {
    e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});




const translations = {
    de: {
        nav_about: "Info",
        nav_skills: "Wissen",
        nav_projects: "Arbeit",
        nav_contact: "Kontakt",

        bio_dev: "Ich bin <span class='highlight'>Fullstack-Entwickler</span>.",
        bio_linux: "Mit einer Vorliebe für <span class='highlight'>Linux</span>.",
        bio_crypto: "Und einem speziellen Interesse an <span class='highlight'>Kryptographie</span>.",
        whatsapp_popup: "WhatsApp ist absoluter Müll.<br>Nutzen Sie Telegram.",

        about_p1: "<p>Für gewöhnlich beschreibe ich mich mit dem hochtrabenden Titel: „<span class='highlight'>Gründer</span> und <span class='highlight'>führender Entwickler</span> von <span class='highlight'>Vincere</span>“.<br> Wie gesagt. Hochtrabend. <br>Vincere könnte man als kleinen <span class='highlight'>Chatraum im Tor-Netzwerk</span> bezeichnen. Ein Testprojekt für mich, um mich an Kryptografie zu probieren. <br>Das Kernstück ist das Zusammenspiel aus Curve25519, AES-IGE (nach dem Vorbild Telegrams) und Sha256. <br>In der Zukunft möchte ich ein <span class='highlight'>hybrides PQC Protokoll</span> nutzen. X-Wing vermutlich. Allerdings wird das schwer einzubauen, ohne die Netzwerk-Latenz völlig zu sprengen. Stichwort: 512 Byte Zellen.</p>",
        about_p2: "<p>Man sieht, ich hege eine gewisse Leidenschaft für die <span class='highlight'>Kryptographie</span> <br>Ein Themengebiet, mit dem ich Jahrelang eigentlich gar nichts anfangen konnten. Die, die sich dafür interessiert haben, waren für mich immer die absoluten Nerds, die ungeduscht in ihren Kellern sitzen. (Ich persönlich <span class='highlight'>dusche regelmäßig</span>!)</p>",
        about_p3: "<p>Kurz zu meinem Werdegang: <br>Im Alter von 11 Jahren startete ich parallel <span class='highlight'>Java</span> und <span class='highlight'>Python</span> zu lernen. Mit 13 begann ich ab und an mich mit <span class='highlight'>Webentwicklung</span> zu beschäftigen. Entwickelte Spiele, Portale und Homepages. <br> Mit 15 Jahren wechselte ich (übrigens) auf <span class='highlight'>Arch Linux</span>. <br>Andere Linux Distributionen nutzte ich ebenfalls. <span class='highlight'>Alpine</span> auf dem Server, <span class='highlight'>Void</span> auf meinem alten Laptop und mit Mint und Zorin habe ich gearbeitet, um es meinen Familienmitgliedern schmackhaft zu machen.</p>",
        about_p4: "<p>Wenn ich gerade nicht programmiere oder an meinem alten Laptop herumschraube, dann bin ich viel draußen unterwegs. Gehe <span class='highlight'>wandern</span>, in Seen <span class='highlight'>schwimmen</span> oder <span class='highlight'>Rennradfahren</span>.<br>Auch habe ich einen kleinen Faible für alles mit <span class='highlight'>Motoren</span>. Zum Beispiel baue ich gern an meinem alten Fahrrad, an welches ich einen 1<span class='highlight'>100ccm Motor</span> gebastelt habe. </p>",

        skill_web_title: "Web-Entwicklung",
        skill_web_desc: "Moderne Applikationen, responsive Frontends und skalierbare Backends.",
        skill_soft_title: "Software & Architektur",
        skill_soft_desc: "Systemnahe Programmierung, objektorientiertes Design und Git-Workflows.",
        skill_env_title: "Systemadministration",
        skill_env_desc: "Linux-Expertise, automatisierte Deployments und System-Hardening.",

        proj_vincere_desc: "Dezentrale, null-governance Kommunikationsplattform im Tor-Netzwerk.<br>Mit eigener Schicht kryptographischer Primitives, Multi-Hop-Onion-Routing-Integration und strikt regeloser Protokollarchitektur für absolute Datensouveränität.",
        proj_games_desc: "Telegram-Mini-App.<br>Minimalistisch, schnell, kein unnötiger Ballast.",
        proj_grit_desc: "Performance-optimierte Seite für eine Naturheilpraxis.<br>Sauberes UI und schnelle Assets.",
        proj_knot_desc: "Networking-Tool mit Telegram als Transport-Layer.<br>Token-Auth und SQLite-Backend.",

        contact_welcome: "Interaktives Kontaktmodul gestartet. Verbindung steht...",
        contact_last: "Last login:",
        contact_social_title: "[ Socials & Messaging ]",
        whatsapp_request: "Nur auf Anfrage (Telegram bevorzugt)",
        contact_status: "# Status: Bereit für neue Projekte und Kollabos.",
        contact_echo: "echo \"Schreiben Sie mir!\""
    },


    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",

        bio_dev: "I am a <span class='highlight'>fullstack developer</span>.",
        bio_linux: "With a penchant for <span class='highlight'>Linux</span>.",
        bio_crypto: "And a special interest in <span class='highlight'>cryptography</span>.",
        whatsapp_popup: "WhatsApp sucks most.<br>Use Telegram.",
        about_p1: "<p>My journey began at the age of <span class='highlight'>11</span>, when I started diving into <span class='highlight'>Java</span> and <span class='highlight'>Python</span> simultaneously. <br>By <span class='highlight'>13</span>, I had found my passion for web development, building the foundations of the digital world I inhabit today.</p>",
        about_p2: "<p>A defining moment in my technical evolution was switching to <span class='highlight'>Arch Linux</span> at age 15. <br>Since then, I’ve navigated through numerous distributions, configuring and deploying systems for myself and others. <br>I also developed a deep fascination for <span class='highlight'>cryptography</span>—realizing that what I once thought was reserved for 'basement-dwelling nerds' is actually one of the most elegant intersections of math and privacy.</p>",
        about_p3: "<p>When the screen goes off, I’m usually <span class='highlight'>outside</span>.<br> Whether I'm pushing miles on my road bike, hiking through nature, or tinkering with my custom <span class='highlight'>100cc motorized bicycle</span>, I treat every machine with the same precision I apply to my code. <br>For me, software and mechanics are both a craft.</p>",
        
        skill_web_title: "Frontend & Backend",
        skill_web_desc: "Developing modern, responsive web applications and robust server-side logic.",
        skill_soft_title: "Software & Systems",
        skill_soft_desc: "Learning low-level programming, object-oriented software design, and version control.",
        skill_env_title: "Environment",
        skill_env_desc: "Expertise in Linux distributions, including custom deployments and system hardening.",
        

        proj_vincere_desc: "A decentralized, zero-governance communication platform operating within the Tor network.<br>Featuring a proprietary cryptographic primitives layer, multi-hop onion routing integration, and a strictly rule-less protocol architecture for absolute data sovereignty.",
        proj_games_desc: "A bespoke website for Telegram mini-games.<br>Focus on minimalist aesthetics and optimized performance.",
        proj_grit_desc: "A high-performance website designed for a naturopathic practice.<br>Focus on responsive UI and seamless user experience.",
        proj_knot_desc: "A private networking tool leveraging Telegram as a transport layer.<br>Features token-based authentication and SQLite storage.",
        
        contact_welcome: "Welcome to the interactive contact module. Establishing secure connection...",
        contact_last: "Last login:",
        contact_social_title: "[ Social & Instant Messaging ]",
        whatsapp_request: "Available upon request (Telegram preferred)",
        contact_status: "# Status: Open for new opportunities and collaborations.",
        contact_echo: "echo \"Looking forward to hearing from you!\""
    }
};

const langToggle = document.getElementById('lang-toggle');

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('preferred-lang', lang);
    
    const initialActive = document.querySelector('.nav-link.active');
    setTimeout(() => moveIndicator(initialActive, activeInd), 50);
}

langToggle.addEventListener('change', () => {
    const newLang = langToggle.checked ? 'de' : 'en';
    updateLanguage(newLang);
});


window.addEventListener('load', () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    langToggle.checked = (savedLang === 'de');
    updateLanguage(savedLang);

    const initialActive = document.querySelector('.nav-link.active');
    moveIndicator(initialActive, activeInd);
});