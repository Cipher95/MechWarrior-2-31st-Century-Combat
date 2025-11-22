
document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'en'; // Default language

    // --- SITE DATA & TRANSLATIONS ---
    const siteData = {
        en: {
            pageTitle: "MechWarrior 2: 31st Century Combat｜Activision",
            trailerUrl: "intro.mp4",
            galleryArt: {
                imageUrl: "https://cfw.sarna.net/news/wp-content/uploads/2025/09/MechWarrior-5-Mercenaries-Shadow-of-Kerensky-Key-Art.jpeg",
                title: "Trial of Position",
                details: "Official artwork depicting a climactic battle. MechWarriors engage in duels not just for survival, but to prove their skill, honor, and right to lead within the strict Clan caste system."
            },
            clans: [
                { name: "Clan Wolf", imageUrl: "https://thumbnail.imgbin.com/5/11/7/imgbin-mechwarrior-online-mechwarrior-2-31st-century-combat-battletech-gray-wolf-mechwarrior-3050-clan-xZ2JPx4VC4U6TM5SjBHLwdaRg_t.jpg", details: "Descendants of the legendary Star League general Aleksandr Kerensky, Clan Wolf is one of the most powerful and respected Clans. They are known for their cunning, strategic prowess, and adherence to the Warden ideology, believing they are the true guardians of the Inner Sphere. Their signature 'Mechs are often fast and versatile." },
                { name: "Clan Jade Falcon", imageUrl: "https://wiki.mechlivinglegends.net/images/thumb/c/c8/CJF.png/350px-CJF.png", details: "Arrogant, aggressive, and deeply devoted to the Crusader cause, Clan Jade Falcon believes it is their destiny to conquer the Inner Sphere and restore the Star League by force. They favor overwhelming firepower and jump-jet-equipped 'Mechs for aggressive, decisive strikes." }
            ],
            battlemechs: [
                { name: "Timber Wolf", imageUrl: "https://cfw.sarna.net/wiki/images/a/a7/Timber_Wolf_RGilClan_v05.png", details: "Also known by its Inner Sphere designation 'Mad Cat', the Timber Wolf is a 75-ton heavy OmniMech that strikes a terrifying balance between speed, armor, and firepower. Its iconic profile and versatile weapon pods make it one of the most feared 'Mechs on the battlefield.<br><br><strong>Weight Class:</strong> Heavy<br><strong>Chassis:</strong> Endo Steel<br><strong>Engine:</strong> XL 375<br><strong>Default Armament:</strong><br> - 2x LRM-20<br> - 2x ER Large Lasers<br> - 2x Medium Pulse Lasers<br> - 2x Machine Guns" },
                { name: "Mad Dog", imageUrl: "https://cfw.sarna.net/wiki/images/thumb/f/fb/Mad_Dog_RGilClan_v10.png/300px-2lgvsb40jbuiw4nb2mp1bfbrucmi7jp.png", details: "Known as the 'Vulture' in the Inner Sphere, the Mad Dog is a 60-ton medium OmniMech primarily designed for long-range fire support. Its torso is dominated by massive missile launchers, allowing it to saturate targets with devastating volleys before they can close range.<br><br><strong>Weight Class:</strong> Medium<br><strong>Chassis:</strong> Standard<br><strong>Engine:</strong> XL 300<br><strong>Default Armament:</strong><br> - 2x LRM-20<br> - 2x Large Pulse Lasers<br> - 2x Medium Pulse Lasers" },
                { name: "Warhawk", imageUrl: "https://cfw.sarna.net/wiki/images/1/1c/Warhawk_RGilClan_v20.png", details: "The 'Masakari' is an 85-ton assault OmniMech that embodies the Clan philosophy of overwhelming firepower. It is a relatively slow but heavily armored weapons platform, famous for its four devastating Particle Projector Cannons (PPCs) that can strip armor from enemies at extreme ranges.<br><br><strong>Weight Class:</strong> Assault<br><strong>Chassis:</strong> Standard<br><strong>Engine:</strong> XL 340<br><strong>Default Armament:</strong><br> - 4x ER PPCs<br> - 1x LRM-10" },
                { name: "Summoner", imageUrl: "https://cfw.sarna.net/wiki/images/9/9d/Summoner_RGilClan_v03.png", details: "Designated the 'Thor' by Inner Sphere forces, the Summoner is a 70-ton heavy OmniMech that combines mobility with a potent, concentrated punch. Its jump jets and varied weapon configurations allow it to outmaneuver heavier opponents and dictate the terms of engagement.<br><br><strong>Weight Class:</strong> Heavy<br><strong>Chassis:</strong> Endo Steel<br><strong>Engine:</strong> XL 350<br><strong>Default Armament:</strong><br> - 1x ER PPC<br> - 1x LB 5-X AC<br> - 1x LRM-15" },
                { name: "Dire Wolf", imageUrl: "https://cfw.sarna.net/wiki/images/9/9c/Dire_Wolf_RGilClan_v13.png", details: "The 'Daishi'. A 100-ton walking nightmare, the Dire Wolf is one of the most powerful assault OmniMechs ever created. It is a slow, lumbering fortress of armor and weapons, capable of mounting an absurd amount of firepower that can annihilate almost any opponent in a direct firefight.<br><br><strong>Weight Class:</strong> Assault<br><strong>Chassis:</strong> Standard<br><strong>Engine:</strong> XL 300<br><strong>Default Armament:</strong><br> - 2x Gauss Rifles<br> - 4x Large Pulse Lasers<br> - 2x SRM-6" },
                { name: "Stormcrow", imageUrl: "https://cfw.sarna.net/wiki/images/5/52/Storm_Crow_RGilClan_v07.png", details: "The 'Ryoken'. A 55-ton medium OmniMech that punches well above its weight class. It boasts impressive speed and a balanced array of energy and missile weapons, making it an excellent all-around skirmisher and a dangerous threat in the hands of a skilled pilot.<br><br><strong>Weight Class:</strong> Medium<br><strong>Chassis:</strong> Endo Steel<br><strong>Engine:</strong> XL 330<br><strong>Default Armament:</strong><br> - 1x ER Large Laser<br> - 4x ER Medium Lasers<br> - 1x SRM-6" }
            ],
            translations: {
                nav_story: "SITREP", nav_trailer: "INTRO", nav_clans: "THE CLANS", nav_mechs: "BATTLEMECHS", nav_gallery: "ARCHIVES", nav_details: "SYSTEM SPECS",
                release_date: "\"Information is ammunition.\"", story_title: "The Refusal War", story_subtitle1: "A Generation of Peace is Shattered",
                story_text1: "The year is 3057. Following the epic Battle of Tukayyid, a fragile truce has halted the relentless advance of the Clans into the Inner Sphere. But this peace is not to last. On the distant Clan homeworlds, a conflict born of ideology and honor is about to erupt.",
                story_subtitle2: "Trial by Combat", story_text2: "The Crusader-minded Clan Jade Falcon, humiliated by the truce, issues a challenge to the treaty's architects, the Warden-minded Clan Wolf. What begins as a political dispute escalates into a full-blown war of annihilation—The Refusal War. As a MechWarrior, you must choose your side and pilot your BattleMech to victory, for the fate of your Clan hangs in the balance.",
                trailer_title: "Intro", clans_title: "The Warring Clans", mechs_title: "Iconic BattleMechs", gallery_title: "Declassified Archives",
                details_title: "System Specifications", detail_label_released: "Released", detail_label_players: "Players",
                detail_label_platforms: "Platforms", detail_label_developer: "Developer", detail_label_genre: "Genre", detail_label_publisher: "Publisher",
                detail_value_players: "1 (16 via NetMech)", detail_value_developer: "Activision", detail_value_publisher: "Activision"
            }
        },
        ja: {
            pageTitle: "メックウォリアー2：31世紀の戦闘｜アクティビジョン",
            trailerUrl: "intro.mp4",
            galleryArt: {
                imageUrl: "https://cfw.sarna.net/news/wp-content/uploads/2025/09/MechWarrior-5-Mercenaries-Shadow-of-Kerensky-Key-Art.jpeg",
                title: "地位の試練",
                details: "クライマックスの戦闘を描いた公式アートワーク。メックウォリアーは生存のためだけでなく、厳格なクランのカースト制度の中で自らのスキル、名誉、そして指導権を証明するために決闘を行う。"
            },
            clans: [
                { name: "ウルフ氏族", imageUrl: "https://thumbnail.imgbin.com/5/11/7/imgbin-mechwarrior-online-mechwarrior-2-31st-century-combat-battletech-gray-wolf-mechwarrior-3050-clan-xZ2JPx4VC4U6TM5SjBHLwdaRg_t.jpg", details: "伝説的な星間リーグの将軍アレクサンドル・ケレンスキーの子孫であるウルフ氏族は、最も強力で尊敬されるクランの一つです。彼らはその狡猾さ、戦略的な手腕、そしてインナースフィアの真の守護者であると信じるウォーデン思想への固執で知られています。彼らの代表的なメックは、しばしば高速で多用途です。" },
                { name: "ジェイドファルコン氏族", imageUrl: "https://wiki.mechlivinglegends.net/images/thumb/c/c8/CJF.png/350px-CJF.png", details: "傲慢で攻撃的、そしてクルセイダーの大義に深く身を捧げるジェイドファルコン氏族は、インナースフィアを征服し、力によって星間リーグを再興することが自らの運命であると信じています。彼らは圧倒的な火力と、積極的で決定的な攻撃のためのジャンプジェット装備のメックを好みます。" }
            ],
            battlemechs: [
                { name: "ティンバーウルフ", imageUrl: "https://cfw.sarna.net/wiki/images/a/a7/Timber_Wolf_RGilClan_v05.png", details: "インナースフィアでは「マッドキャット」としても知られるティンバーウルフは、75トンのヘビーオムニメックで、速度、装甲、火力の恐るべきバランスを誇ります。その象徴的なシルエットと多用途な兵装ポッドは、戦場で最も恐れられるメックの一つとなっています。<br><br><strong>重量クラス:</strong> ヘビー<br><strong>シャーシ:</strong> エンドースチール<br><strong>エンジン:</strong> XL 375<br><strong>デフォルト兵装:</strong><br> - 2x LRM-20<br> - 2x ER大口径レーザー<br> - 2x 中口径パルスレーザー<br> - 2x マシンガン" },
                { name: "マッドドッグ", imageUrl: "https://cfw.sarna.net/wiki/images/thumb/f/fb/Mad_Dog_RGilClan_v10.png/300px-2lgvsb40jbuiw4nb2mp1bfbrucmi7jp.png", details: "インナースフィアで「ヴァルチャー」として知られるマッドドッグは、主に長距離火力支援のために設計された60トンの中量級オムニメックです。胴体は巨大なミサイルランチャーで占められており、敵が接近する前に壊滅的な一斉射撃で飽和攻撃を行うことができます。<br><br><strong>重量クラス:</strong> ミディアム<br><strong>シャーシ:</strong> 標準<br><strong>エンジン:</strong> XL 300<br><strong>デフォルト兵装:</strong><br> - 2x LRM-20<br> - 2x 大口径パルスレーザー<br> - 2x 中口径パルスレーザー" },
                { name: "ウォーホーク", imageUrl: "https://cfw.sarna.net/wiki/images/1/1c/Warhawk_RGilClan_v20.png", details: "「マサカリ」は、クランの圧倒的な火力という哲学を体現する85トンのアサルトオムニメックです。比較的低速ですが重装甲の兵器プラットフォームであり、遠距離から敵の装甲を剥ぎ取ることができる4門の壊滅的な粒子ビーム砲（PPC）で有名です。<br><br><strong>重量クラス:</strong> アサルト<br><strong>シャーシ:</strong> 標準<br><strong>エンジン:</strong> XL 340<br><strong>デフォルト兵装:</strong><br> - 4x ER PPC<br> - 1x LRM-10" },
                { name: "サモナー", imageUrl: "https://cfw.sarna.net/wiki/images/9/9d/Summoner_RGilClan_v03.png", details: "インナースフィア軍から「トール」と指定されたサモナーは、機動性と強力で集中した一撃を兼ね備えた70トンのヘビーオムニメックです。ジャンプジェットと多様な兵装構成により、より重い敵を凌駕し、交戦の主導権を握ることができます。<br><br><strong>重量クラス:</strong> ヘビー<br><strong>シャーシ:</strong> エンドースチール<br><strong>エンジン:</strong> XL 350<br><strong>デフォルト兵装:</strong><br> - 1x ER PPC<br> - 1x LB 5-X AC<br> - 1x LRM-15" },
                { name: "ダイアウルフ", imageUrl: "https://cfw.sarna.net/wiki/images/9/9c/Dire_Wolf_RGilClan_v13.png", details: "「ダイシ」。100トンの歩く悪夢であるダイアウルフは、これまでに作られた中で最も強力なアサルトオムニメックの一つです。低速で動きの鈍い装甲と兵器の要塞であり、直接の撃ち合いでほとんどの敵を殲滅できるほどの途方もない火力を搭載することができます。<br><br><strong>重量クラス:</strong> アサルト<br><strong>シャーシ:</strong> 標準<br><strong>エンジン:</strong> XL 300<br><strong>デフォルト兵装:</strong><br> - 2x ガウスライフル<br> - 4x 大口径パルスレーザー<br> - 2x SRM-6" },
                { name: "ストームクロウ", imageUrl: "https://cfw.sarna.net/wiki/images/5/52/Storm_Crow_RGilClan_v07.png", details: "「リョウケン」。55トンの中量級オムニメックで、その重量クラスをはるかに超えるパンチ力を持っています。印象的な速度とバランスの取れたエネルギー兵器とミサイル兵器を誇り、優れた万能スカーミッシャーであり、熟練パイロットの手にかかれば危険な脅威となります。<br><br><strong>重量クラス:</strong> ミディアム<br><strong>シャーシ:</strong> エンドースチール<br><strong>エンジン:</strong> XL 330<br><strong>デフォルト兵装:</strong><br> - 1x ER大口径レーザー<br> - 4x ER中口径レーザー<br> - 1x SRM-6" }
            ],
            translations: {
                nav_story: "状況報告", nav_trailer: "イントロ", nav_clans: "氏族", nav_mechs: "バトルメック", nav_gallery: "アーカイブ", nav_details: "システム仕様",
                release_date: "『情報は弾薬なり』", story_title: "拒絶戦争", story_subtitle1: "一世代の平和が砕かれる",
                story_text1: "西暦3057年。トゥカイードの壮大な戦いの後、脆弱な停戦がクランのインナースフィアへの絶え間ない進撃を停止させた。しかし、この平和は長くは続かない。遠く離れたクランの故郷の星々で、イデオロギーと名誉から生まれた紛争が勃発しようとしていた。",
                story_subtitle2: "戦闘による試練", story_text2: "停戦に屈辱を感じたクルセイダー志向のジェイドファルコン氏族は、条約の立案者であるウォーデン志向のウルフ氏族に挑戦状を叩きつける。政治的な論争から始まったものは、全面的な殲滅戦争へとエスカレートする—拒絶戦争。メックウォリアーとして、あなたはどちらかの側を選び、自らのクランの運命をかけてバトルメックを勝利に導かねばならない。",
                trailer_title: "イントロ", clans_title: "交戦する氏族", mechs_title: "象徴的なバトルメック", gallery_title: "機密解除アーカイブ",
                details_title: "システム仕様", detail_label_released: "発売日", detail_label_players: "プレイ人数",
                detail_label_platforms: "プラットフォーム", detail_label_developer: "開発元", detail_label_genre: "ジャンル", detail_label_publisher: "発売元",
                detail_value_players: "1人（NetMechで最大16人）", detail_value_developer: "アクティビジョン", detail_value_publisher: "アクティビジョン"
            }
        }
    };

    const gameDetails = [
        { label_key: "detail_label_released", value: "September 10, 1995" },
        { label_key: "detail_label_platforms", value: "MS-DOS, Windows, PlayStation, Sega Saturn" },
        { label_key: "detail_label_players", value_key: "detail_value_players" },
        { label_key: "detail_label_genre", value: "Vehicular Combat Simulation" },
        { label_key: "detail_label_developer", value_key: "detail_value_developer" },
        { label_key: "detail_label_publisher", value_key: "detail_value_publisher" },
    ];

    // --- DOM ELEMENT REFERENCES ---
    const languageSelectorScreen = document.getElementById('language-selector-screen');
    const introVideoContainer = document.getElementById('intro-video-container');
    const introVideo = document.getElementById('intro-video');
    const mainContent = document.getElementById('main-content');
    const langButtons = document.querySelectorAll('.lang-btn');
    const galleryContainer = document.getElementById('gallery-clickable-container');
    const modalOverlay = document.getElementById('details-modal-overlay');
    const modalContent = document.getElementById('details-modal-content');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDetails = document.getElementById('modal-details');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBackToTopBtn = document.getElementById('modal-back-to-top');

    // --- LANGUAGE & INTRO SEQUENCE ---
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            setLanguage(selectedLang);
            languageSelectorScreen.style.display = 'none';
            introVideoContainer.classList.add('is-visible');
            introVideo.play().catch(error => {
                console.error("Intro video autoplay failed:", error);
                showMainContent();
            });
        });
    });

    introVideo.addEventListener('ended', showMainContent);

    function showMainContent() {
        introVideoContainer.classList.remove('is-visible');
        mainContent.style.display = 'block';
        playAudio();
    }

    function setLanguage(lang) {
        currentLang = lang;
        const data = siteData[lang];
        document.documentElement.lang = lang;
        document.title = data.pageTitle;

        document.getElementById('gallery-img').src = data.galleryArt.imageUrl;

        const trailerVideo = document.getElementById('announce-trailer');
        const trailerSource = document.getElementById('trailer-source');
        if (trailerVideo && trailerSource) {
            trailerSource.src = data.trailerUrl;
            trailerVideo.load();
        }

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (data.translations[key]) {
                element.textContent = data.translations[key];
            }
        });
        
        populateGrid('clans-grid-container', data.clans);
        populateGrid('mech-grid-container', data.battlemechs);
        populateGameDetails(lang);
    }
    
    // --- LIVE DATE & TIME ---
    function updateLiveDateTime() {
        const container = document.getElementById('live-datetime-container');
        if (!container) return;
        const now = new Date();
        // Using a fixed format for the "31st Century" feel
        const year = now.getUTCFullYear() + 1041; // Project to 3057+
        const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
        const day = now.getUTCDate().toString().padStart(2, '0');
        const hours = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getUTCMinutes().toString().padStart(2, '0');
        const seconds = now.getUTCSeconds().toString().padStart(2, '0');

        container.textContent = `SYS-TIME: ${year}.${month}.${day} // ${hours}:${minutes}:${seconds} ZULU`;
    }

    // --- DYNAMIC CONTENT GENERATION ---
    function populateGrid(containerId, items) {
        const container = document.getElementById(containerId);
        if (!container || !items) return;
        container.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'grid-card';
            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${item.imageUrl}" alt="${item.name}">
                </div>
                <div class="card-content">
                    <p>${item.name}</p>
                </div>`;
            card.addEventListener('click', () => openModal(item.imageUrl, item.name, item.details));
            container.appendChild(card);
        });
    }
    
    function populateGameDetails(lang) {
        const container = document.getElementById('game-details-list');
        const translations = siteData[lang].translations;
        if (!container) return;
        container.innerHTML = '';
        gameDetails.forEach(detail => {
            const listItem = document.createElement('li');
            const label = translations[detail.label_key] || detail.label_key;
            const value = detail.value_key ? (translations[detail.value_key] || detail.value_key) : detail.value;
            listItem.innerHTML = `<strong>${label}:</strong> ${value}`;
            container.appendChild(listItem);
        });
    }
    
    // --- MODAL FUNCTIONS ---
    function handleModalScroll() {
        if (modalContent.scrollTop > 200) {
            modalBackToTopBtn.classList.add('visible');
        } else {
            modalBackToTopBtn.classList.remove('visible');
        }
    }

    function openModal(image, title, details) {
        modalImage.src = image;
        modalImage.alt = title; 
        modalTitle.textContent = title;
        modalDetails.innerHTML = details;
        modalOverlay.classList.remove('modal-hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        modalContent.addEventListener('scroll', handleModalScroll);
    }

    function closeModal() {
        modalOverlay.classList.add('modal-hidden');
        document.body.style.overflow = ''; // Restore background scrolling
        modalContent.scrollTop = 0; // Reset scroll position
        modalContent.removeEventListener('scroll', handleModalScroll);
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape" && !modalOverlay.classList.contains('modal-hidden')) {
            closeModal();
        }
    });
    modalBackToTopBtn.addEventListener('click', () => {
        modalContent.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // --- GALLERY CLICK LISTENER ---
    galleryContainer.addEventListener('click', () => {
        const artData = siteData[currentLang].galleryArt;
        openModal(artData.imageUrl, artData.title, artData.details);
    });

    // --- INTERACTIVITY & ANIMATIONS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

    // --- MOBILE MENU TOGGLE ---
    const menuToggle = document.getElementById('menu-toggle');
    const navWrapper = document.getElementById('nav-wrapper');
    if (menuToggle && navWrapper) {
        menuToggle.addEventListener('click', () => navWrapper.classList.toggle('active'));
        navWrapper.querySelectorAll('ul li a').forEach(link => {
            link.addEventListener('click', () => {
                if (navWrapper.classList.contains('active')) {
                    navWrapper.classList.remove('active');
                }
            });
        });
    }

    // --- BACKGROUND MUSIC HANDLER ---
    const backgroundMusic = document.getElementById('bg-music');
    backgroundMusic.volume = 0.3; // Set a more reasonable default volume
    function playAudio() {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(() => {
                console.log("Autoplay blocked. User interaction required.");
                const interactionListener = () => {
                    backgroundMusic.play();
                };
                document.body.addEventListener('click', interactionListener, { once: true });
                document.body.addEventListener('keydown', interactionListener, { once: true });
            });
        }
    }

    // --- INITIALIZATION ---
    updateLiveDateTime();
    setInterval(updateLiveDateTime, 1000);
});