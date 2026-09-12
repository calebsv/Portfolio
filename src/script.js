function createRipple(event) {
    const button = event.currentTarget
    const circle = document.createElement("span")
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`
    circle.classList.add(
        "absolute",
        "rounded-full",
        "bg-white/30",
        "animate-ripple"
    )

    const ripple = button.getElementsByClassName("ripple")[0]
    if (ripple) ripple.remove()

    circle.classList.add("ripple")
    button.appendChild(circle)
}


const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(el => obs.observe(el));


const glow = document.getElementById("glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX - 80 + "px";
    glow.style.top = e.clientY - 80 + "px";
});

const slider = document.getElementById("frontSlider");
const prevBtn = document.getElementById("prevFront");
const nextBtn = document.getElementById("nextFront");

function updateButtons() {
    if (slider.scrollLeft <= 0) {
        prevBtn.classList.add("opacity-0", "pointer-events-none");
    } else {
        prevBtn.classList.remove("opacity-0", "pointer-events-none");
    }

    if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 5
    ) {
        nextBtn.classList.add("opacity-0", "pointer-events-none");
    } else {
        nextBtn.classList.remove("opacity-0", "pointer-events-none");
    }
}
nextBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: 220,
        behavior: "smooth",
    });
});
prevBtn.addEventListener("click", () => {
    slider.scrollBy({
        left: -220,
        behavior: "smooth",
    });
});
slider.addEventListener("scroll", updateButtons);
updateButtons();


const sliderr = document.getElementById("develoupSlider");
const previBtn = document.getElementById("previousFront");
const nextiBtn = document.getElementById("nextiousFront");


function updateeButtons() {
    if (sliderr.scrollLeft <= 0) {
        previBtn.classList.add("opacity-0", "pointer-events-none");
    } else {
        previBtn.classList.remove("opacity-0", "pointer-events-none");
    }

    if (
        sliderr.scrollLeft + sliderr.clientWidth >=
        sliderr.scrollWidth - 5
    ) {
        nextiBtn.classList.add("opacity-0", "pointer-events-none");
    } else {
        nextiBtn.classList.remove("opacity-0", "pointer-events-none");
    }
}
nextiBtn.addEventListener("click", () => {
    sliderr.scrollBy({
        left: 220,
        behavior: "smooth",
    });
});
previBtn.addEventListener("click", () => {
    sliderr.scrollBy({
        left: -220,
        behavior: "smooth",
    });
});
sliderr.addEventListener("scroll", updateeButtons);
updateeButtons();

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");
const mobileLinks = document.querySelectorAll(".mobile-link");

function toggleMenu() {
    menuBtn.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    menuOverlay.classList.toggle("open");
    document.body.classList.toggle("overflow-hidden");
}

menuBtn.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (mobileMenu.classList.contains("open")) toggleMenu();
    });
});

const footerYear = document.getElementById("footer-year");
if (footerYear) footerYear.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

/* =========================================================
   PARTICLES (background)
========================================================= */
(function () {
    const container = document.getElementById('particles');
    if (!container) return;
    const count = 34;
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('span');
        dot.className = 'particle';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        const size = 1 + Math.random() * 2;
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.animationDelay = (Math.random() * 6) + 's';
        dot.style.animationDuration = (4 + Math.random() * 4) + 's';
        container.appendChild(dot);
    }
})();

/* =========================================================
   SERVICES — now bilingual (EN/PT)
   window.__renderServices(lang) re-renders in place, keeping
   whichever card is currently selected.
========================================================= */
(function () {
    const servicesData = {
        en: [
            {
                icon: 'bi-code-slash',
                title: 'Development Front-End',
                desc: 'Building responsive and interactive web interfaces using modern front-end technologies and best practices. Using HTML, CSS, JavaScript, React and TailwindCSS.',
                items: ['Responsive web design', 'Interactive UI components', 'Cross-browser compatibility']
            },
            {
                icon: 'bi-window',
                title: 'Websites & Landing Pages',
                desc: 'Corporate websites and conversion pages designed to load quickly and convey credibility.',
                items: ['Basic technical SEO', 'Performance optimization', 'Integration with forms/CTAs']
            },
            {
                icon: 'bi-plug',
                title: 'Systems',
                desc: 'Custom systems to manage your business\'s data, processes, users, and key operations.',
                items: ['Administrative', 'Management', 'Basic Control and monitoring of processes']
            },
            {
                icon: 'bi-tools',
                title: 'Maintenance & Improvements',
                desc: 'Bug fixes, refactoring and optimization of existing projects, without breaking what already works.',
                items: ['Bug fixes', 'Legacy code refactoring', 'Performance and accessibility improvements']
            },
            {
                icon: 'bi-chat-dots',
                title: 'Technical Consulting',
                desc: 'Support in choosing the stack, front-end architecture, and best practices to ensure your project gets off to the right start.',
                items: ['Technology selection', 'Architecture planning', 'Code review and best practices']
            }
        ],
        pt: [
            {
                icon: 'bi-code-slash',
                title: 'Desenvolvimento Front-End',
                desc: 'Construção de interfaces web responsivas e interativas utilizando tecnologias front-end modernas e boas práticas. Usando HTML, CSS, JavaScript, React e TailwindCSS.',
                items: ['Design web responsivo', 'Componentes de UI interativos', 'Compatibilidade entre navegadores']
            },
            {
                icon: 'bi-window',
                title: 'Sites & Landing Pages',
                desc: 'Sites institucionais e páginas de conversão projetadas para carregar rápido e transmitir credibilidade.',
                items: ['SEO técnico básico', 'Otimização de performance', 'Integração com formulários/CTAs']
            },
            {
                icon: 'bi-plug',
                title: 'Sistemas',
                desc: 'Sistemas personalizados para gerenciar os dados, processos, usuários e operações principais do seu negócio.',
                items: ['Administrativo', 'Gestão', 'Controle e monitoramento básico de processos']
            },
            {
                icon: 'bi-tools',
                title: 'Manutenção & Melhorias',
                desc: 'Correção de bugs, refatoração e otimização de projetos existentes, sem quebrar o que já funciona.',
                items: ['Correção de bugs', 'Refatoração de código legado', 'Melhorias de performance e acessibilidade']
            },
            {
                icon: 'bi-chat-dots',
                title: 'Consultoria Técnica',
                desc: 'Apoio na escolha da stack, arquitetura front-end e boas práticas para garantir que seu projeto comece com o pé direito.',
                items: ['Seleção de tecnologia', 'Planejamento de arquitetura', 'Revisão de código e boas práticas']
            }
        ]
    };

    const nav = document.getElementById('servicesNav');
    const card = document.getElementById('serviceCard');
    if (!nav || !card) return;

    let current = 0;
    let lang = 'en';

    function buildNav() {
        nav.innerHTML = '';
        servicesData[lang].forEach((_, i) => {
            const btn = document.createElement('button');
            btn.className = 'service-num group';
            btn.setAttribute('data-index', i);
            btn.innerHTML = `<span class="service-num-label">${String(i + 1).padStart(2, '0')}</span>`;
            btn.addEventListener('click', () => {
                if (i !== current) goTo(i);
            });
            nav.appendChild(btn);
        });
        updateNav(current);
    }

    function renderCard(index) {
        const s = servicesData[lang][index];
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
            card.innerHTML = `
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-900 to-slate-900
                      flex items-center justify-center text-secondary text-2xl mb-5">
            <i class="bi ${s.icon}"></i>
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">${s.title}</h3>
          <p class="text-slate-400 leading-relaxed mb-5 max-w-xl">${s.desc}</p>
          <ul class="space-y-2">
            ${s.items.map(item => `
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <i class="bi bi-check-circle-fill text-secondary"></i> ${item}
              </li>
            `).join('')}
          </ul>
        `;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200);
    }

    function updateNav(index) {
        [...nav.children].forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
    }

    function goTo(index) {
        current = index;
        renderCard(index);
        updateNav(index);
    }

    // Called by the i18n engine whenever the language changes.
    // Keeps the currently selected service, just swaps the text.
    window.__renderServices = function (newLang) {
        lang = (newLang === 'pt') ? 'pt' : 'en';
        buildNav();
        renderCard(current);
    };

    buildNav();
    goTo(0);
})();

/* =========================================================
   TERMINAL TYPING EFFECT — bilingual (EN/PT)
   Call window.__runTerminal(lang) to (re)play it.
========================================================= */
(function () {
    const el = document.getElementById('terminal-body');
    if (!el) return;

    const sequences = {
        en: [
            { type: 'cmd', text: 'whoami' },
            { type: 'out', text: 'caleb-lira · front-end developer', cls: 'text-slate-300' },
            { type: 'gap' },
            { type: 'cmd', text: 'mission.txt' },
            { type: 'out', text: 'Developing interfaces', cls: 'text-white font-semibold' },
            { type: 'out', text: 'that shape perspectives.', cls: 'text-secondary font-semibold' },
            { type: 'gap' },
            { type: 'cmd', text: 'status --check' },
            { type: 'out', text: '[ok] building modern, high-performance apps', cls: 'text-sky-400' },
            { type: 'out', text: '[ok] focused on user experience', cls: 'text-yellow-400' },
        ],
        pt: [
            { type: 'cmd', text: 'whoami' },
            { type: 'out', text: 'caleb-lira · desenvolvedor front-end', cls: 'text-slate-300' },
            { type: 'gap' },
            { type: 'cmd', text: 'mission.txt' },
            { type: 'out', text: 'Desenvolvendo interfaces', cls: 'text-white font-semibold' },
            { type: 'out', text: 'que moldam perspectivas.', cls: 'text-secondary font-semibold' },
            { type: 'gap' },
            { type: 'cmd', text: 'status --check' },
            { type: 'out', text: '[ok] construindo apps modernos e de alta performance', cls: 'text-sky-400' },
            { type: 'out', text: '[ok] focado na experiência do usuário', cls: 'text-yellow-400' },
        ]
    };

    let runToken = 0; 

    function finish(el) {
        const cur = document.createElement('span');
        cur.className = 'terminal-cursor';
        el.appendChild(cur);
    }

    function run(lang) {
        const myToken = ++runToken;
        const seq = sequences[lang] || sequences.en;
        el.innerHTML = '';
        let i = 0;

        function next() {
            if (myToken !== runToken) return; 
            if (i >= seq.length) {
                finish(el);
                return;
            }
            const item = seq[i++];

            if (item.type === 'gap') {
                const gap = document.createElement('div');
                gap.className = 'h-3';
                el.appendChild(gap);
                next();
                return;
            }

            const line = document.createElement('div');
            line.className = 'flex gap-2';

            if (item.type === 'cmd') {
                const prompt = document.createElement('span');
                prompt.className = 'text-secondary shrink-0';
                prompt.textContent = '$';
                line.appendChild(prompt);
            }

            const span = document.createElement('span');
            span.className = item.cls || 'text-slate-200';
            line.appendChild(span);
            el.appendChild(line);

            let c = 0;
            const speed = item.type === 'cmd' ? 55 : 18;
            const timer = setInterval(() => {
                if (myToken !== runToken) { clearInterval(timer); return; }
                span.textContent += item.text[c];
                c++;
                if (c >= item.text.length) {
                    clearInterval(timer);
                    setTimeout(next, item.type === 'cmd' ? 250 : 350);
                }
            }, speed);
        }

        next();
    }

    let started = false;
    window.__runTerminal = function (lang) {
        started = true;
        run(lang);
    };

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !started) {
                run(window.currentLang || 'en');
                started = true;
                io.disconnect();
            }
        });
    });
    io.observe(el);
})();

(function () {
    const translations = {
        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_skills: 'Skills',
            nav_projects: 'Projects',
            nav_services: 'Services',
            aria_back: 'Go back to previous page',
            aria_menu: 'Open menu',
            btn_view_projects: 'View My Projects',
            btn_download_cv: 'Download CV',
            about_badge: 'ABOUT ME',
            about_heading1: 'Turning curiosity into',
            about_heading2: 'real front-end experience.',
            about_paragraph: 'My name is Caleb da Silva Lira Ribeiro. I work as a front-end developer, creating clean, pleasing digital solutions that exceed expectations, while always striving to incorporate development best practices. And I believe that every month without a solid digital presence is a month of customers going straight to the competitor who has already sorted this out.',
            stat_year: 'Year Experience',
            stat_projects: 'Projects Completed',
            stat_dedication: 'Dedication',
            stat_learn: 'Willingness to Learn',
            skills_title: 'Technology Stack',
            skills_subtitle: 'The technologies I have affinity for to achieve better performance in <br>building web applications.',
            skills_dev_title: 'Development',
            skills_styling_title: 'Styling UI',
            skills_tools_title: 'Tools',
            skill_c: 'Language C',
            projects_title: 'My Projects',
            projects_subtitle: 'A range of projects I have developed in pursuit of improving my development skills.<br> All built with a focus on Web development and problem solving.',
            proj1_desc: 'A document conversion system for PDF uploads all in real time and fully operational. The goal is to make the process as convenient as possible.',
            proj2_desc: 'Welcome to Vertex Digital, a leading digital marketing company poised to boost your business. Developed with a focus on front-end practices.',
            proj3_desc: 'Important application that consumes the public Github API. The project aims to consolidate knowledge in the study of APIs.',
            proj4_desc: 'StudyFlow is an application designed to facilitate the organization of study materials or important notes.',
            proj5_desc: 'Welcome to GrandHorizon, a premier hotel and inn booking system. Featuring exceptional suites and a wide range of additional services to make your experience unforgettable.',
            proj6_desc: 'VoxSneakers is a modern e-commerce platform for buying and selling sneakers. Developed with a focus on user experience and seamless transactions. Some features include a sleek design, fast loading times, and a user-friendly interface.',
            btn_access: 'Access here',
            services_title: 'Services',
            services_subtitle: 'My proposed solution for your situation, from scratch to delivery.<br> With the best possible practices and a focus on user experience.',
            footer_tagline: 'Front-End developer creating<br />interactive and professional interfaces.',
            footer_connect: 'Connect',
            footer_links: 'Links',
            footer_copyright: 'Developed by Caleb Lira. All rights reserved.',
        },
        pt: {
            nav_home: 'Início',
            nav_about: 'Sobre',
            nav_skills: 'Habilidades',
            nav_projects: 'Projetos',
            nav_services: 'Serviços',
            aria_back: 'Voltar para a página anterior',
            aria_menu: 'Abrir menu',
            btn_view_projects: 'Ver Meus Projetos',
            btn_download_cv: 'Baixar Currículo',
            about_badge: 'SOBRE MIM',
            about_heading1: 'Transformando curiosidade em',
            about_heading2: 'experiência real em front-end.',
            about_paragraph: 'Meu nome é Caleb da Silva Lira Ribeiro. Atuo como desenvolvedor front-end, criando soluções digitais limpas e agradáveis que superam expectativas, sempre buscando incorporar as melhores práticas de desenvolvimento. E acredito que cada mês sem uma presença digital sólida é um mês de clientes indo direto para o concorrente que já resolveu isso.',
            stat_year: 'Ano de Experiência',
            stat_projects: 'Projetos Concluídos',
            stat_dedication: 'Dedicação',
            stat_learn: 'Vontade de Aprender',
            skills_title: 'Stack de Tecnologias',
            skills_subtitle: 'As tecnologias com as quais tenho afinidade para alcançar melhor desempenho no <br>desenvolvimento de aplicações web.',
            skills_dev_title: 'Desenvolvimento',
            skills_styling_title: 'Estilização de UI',
            skills_tools_title: 'Ferramentas',
            skill_c: 'Linguagem C',
            projects_title: 'Meus Projetos',
            projects_subtitle: 'Uma variedade de projetos que desenvolvi em busca de aprimorar minhas habilidades de desenvolvimento.<br> Todos construídos com foco em desenvolvimento Web e resolução de problemas.',
            proj1_desc: 'Um sistema de conversão de documentos para uploads de PDF, totalmente em tempo real e operacional. O objetivo é tornar o processo o mais conveniente possível.',
            proj2_desc: 'Bem-vindo à Vertex Digital, uma empresa líder em marketing digital pronta para impulsionar seu negócio. Desenvolvido com foco em boas práticas de front-end.',
            proj3_desc: 'Aplicação importante que consome a API pública do Github. O projeto tem como objetivo consolidar conhecimento no estudo de APIs.',
            proj4_desc: 'StudyFlow é uma aplicação projetada para facilitar a organização de materiais de estudo ou anotações importantes.',
            proj5_desc: 'Bem-vindo ao GrandHorizon, um sistema premium de reservas de hotéis e pousadas. Com suítes excepcionais e uma ampla gama de serviços adicionais para tornar sua experiência inesquecível.',
            proj6_desc: 'VoxSneakers é uma plataforma de e-commerce moderna para compra e venda de tênis. Desenvolvida com foco na experiência do usuário e transações fluidas. Alguns recursos incluem design elegante, carregamento rápido e interface amigável.',
            btn_access: 'Acessar aqui',
            services_title: 'Serviços',
            services_subtitle: 'Minha solução proposta para sua situação, do zero até a entrega.<br> Com as melhores práticas possíveis e foco na experiência do usuário.',
            footer_tagline: 'Desenvolvedor Front-End criando<br />interfaces interativas e profissionais.',
            footer_connect: 'Conecte-se',
            footer_links: 'Links',
            footer_copyright: 'Desenvolvido por Caleb Lira. Todos os direitos reservados.',
        }
    };

    const STORAGE_KEY = 'site-lang';
    const langBtn = document.getElementById('langToggle');

    function applyLanguage(lang) {
        const dict = translations[lang] || translations.en;

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) el.textContent = dict[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) el.innerHTML = dict[key];
        });

        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.getAttribute('data-i18n-aria');
            if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
        });

        document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');

        if (langBtn) {
            langBtn.textContent = lang === 'en' ? 'PT' : 'EN';
            langBtn.setAttribute('aria-label', lang === 'en' ? 'Mudar para português' : 'Switch to English');
        }

        window.currentLang = lang;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage may be unavailable */ }

        if (typeof window.__runTerminal === 'function') {
            window.__runTerminal(lang);
        }
        if (typeof window.__renderServices === 'function') {
            window.__renderServices(lang);
        }
    }

    function getInitialLang() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'en' || saved === 'pt') return saved;
        } catch (e) { /* ignore */ }
        return 'en';
    }

    let lang = getInitialLang();
    applyLanguage(lang);

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            lang = lang === 'en' ? 'pt' : 'en';
            applyLanguage(lang);
        });
    }

    window.translations = translations;
    window.applyLanguage = applyLanguage;
})();