const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const typingText = document.getElementById("typingText");
const skillItems = document.querySelectorAll(".skill-item");
const skillDescription = document.getElementById("skillDescription");
const langButtons = document.querySelectorAll(".lang-btn");
const year = document.getElementById("year");

/* ---------- Configuração de contato (Formspree) ----------
   Envio profissional, direto pelo site (sem abrir o provedor de e-mail) e com
   painel de mensagens + anti-spam. Configuração única (~2 min):
     1. Crie uma conta grátis em https://formspree.io (pode entrar com o Google).
     2. "New Form" > dê um nome > destino: contato.samuelsl@gmail.com
     3. Copie só o ID do endpoint gerado — a parte final de
        "https://formspree.io/f/XXXXXXXX" (ex.: "xdorwqkz").
     4. Cole esse ID em FORMSPREE_ID abaixo e salve.
   Enquanto o ID estiver vazio, o formulário avisa que ainda não foi configurado.
*/
const FORMSPREE_ID = "mgojqgpg"; // ex.: "xdorwqkz"
const CONTACT_EMAIL = "contato.samuelsl@gmail.com";

/* ---------- Traduções PT / EN ---------- */
const translations = {
    pt: {
        nav_home: "Início",
        nav_about: "Sobre mim",
        nav_services: "Especializações",
        nav_projects: "Projetos",
        nav_skills: "Habilidades",
        nav_contact: "Contato",

        hero_eyebrow: "# Olá, eu sou",
        hero_description: "Desenvolvedor fullstack apaixonado por criar soluções web modernas, responsivas e funcionais, unindo design, performance e código limpo.",
        hero_btn_projects: "Ver projetos",
        hero_btn_contact: "Fale comigo",

        about_title: "Sobre mim",
        about_subtitle: "Minha trajetória e motivação na tecnologia",
        about_h3: "Desenvolvedor Fullstack em evolução constante",
        about_p1: "Sou de 2003 e desde sempre fui apaixonado pelo mundo tecnológico. Meu primeiro contato com programação foi em 2022, quando ingressei em uma faculdade, e desde então venho estudando, praticando e desenvolvendo projetos para transformar ideias em soluções reais.",
        about_p2: "Meus setores de atuação incluem desenvolvimento web, sistemas internos, automações e aplicações que melhoram processos dentro de empresas. Busco criar interfaces agradáveis, organizadas e responsivas, sem perder o foco na lógica e na funcionalidade.",
        about_info_location: "Brasil",
        about_info_role: "Fullstack",
        about_info_edu: "Sistemas de Informação",

        services_title: "Especializações",
        services_subtitle: "Áreas onde posso contribuir",
        service_web_title: "Desenvolvimento Web",
        service_web_desc: "Criação de páginas, landing pages e interfaces responsivas com HTML, CSS e JavaScript.",
        service_back_title: "Back-end",
        service_back_desc: "Construção de regras de negócio, APIs e integrações utilizando tecnologias como C# e Node.js.",
        service_db_title: "Banco de Dados",
        service_db_desc: "Modelagem e manipulação de dados para sistemas, relatórios e aplicações internas.",
        service_auto_title: "Automações",
        service_auto_desc: "Automação de tarefas repetitivas e criação de ferramentas para melhorar processos.",
        service_resp_title: "Responsividade",
        service_resp_desc: "Layouts adaptáveis para celular, tablet e desktop, mantendo boa experiência visual.",
        service_ui_title: "UI Moderna",
        service_ui_desc: "Interfaces com visual atual, animações suaves, boa hierarquia e foco na usabilidade.",

        projects_title: "Projetos",
        projects_subtitle: "Alguns trabalhos e ideias em desenvolvimento",
        project_solar_desc: "Sistema voltado para geração e automação de documentos para projetos solares.",
        tech_pdf: "PDF",
        tech_automation: "Automação",
        tech_mobile: "Mobile",
        tech_responsive: "Responsivo",
        project_pro_tag: "Projeto profissional",
        project_view: "Ver no GitHub",
        project_brawl_desc: "Projeto web feito em parceria com o artista Gustavo Almeida, unindo código e arte autoral.",
        project_termo_title: "App de Jogo (estilo Termo)",
        project_termo_desc: "Aplicativo mobile inspirado no jogo Termo, desenvolvido com Flutter e Dart.",
        project_landing_title: "Landing Page de Jogos",
        project_landing_desc: "Página visual para apresentação de conteúdo gamer, com foco em layout e estilo.",
        project_php_title: "Site com PHP",
        project_php_desc: "Projeto web utilizando PHP, HTML e CSS para praticar estrutura e páginas dinâmicas.",
        project_tlou_title: "Layout Responsivo",
        project_tlou_desc: "Página web responsiva com temática da série The Last of Us, focada em responsividade.",
        projects_all: "Ver todos no GitHub",

        skills_title: "Habilidades",
        skills_subtitle: "Tecnologias que fazem parte da minha rotina",
        skill_hint: "Passe o mouse ou toque em uma habilidade para ver uma descrição.",

        contact_title: "Vamos trabalhar juntos?",
        contact_subtitle: "Entre em contato comigo",
        form_name: "Seu nome",
        form_email: "Seu e-mail",
        form_subject: "Assunto",
        form_message: "Como posso ajudar?",
        contact_btn: "Enviar mensagem",

        footer_rights: "Todos os direitos reservados.",
        form_sending: "Enviando...",
        form_success: "Mensagem enviada! Em breve retorno o contato.",
        form_error: "Não foi possível enviar. Tente novamente ou envie um e-mail diretamente.",
        form_config: "Envio ainda não configurado. Adicione o ID do Formspree no script.js.",

        typing: [
            "Desenvolvedor Fullstack",
            "Desenvolvedor Web",
            "Criador de Soluções Digitais",
            "Apaixonado por Tecnologia"
        ]
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Expertise",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",

        hero_eyebrow: "# Hi, I'm",
        hero_description: "Fullstack developer passionate about building modern, responsive and functional web solutions, blending design, performance and clean code.",
        hero_btn_projects: "View projects",
        hero_btn_contact: "Get in touch",

        about_title: "About me",
        about_subtitle: "My journey and motivation in technology",
        about_h3: "Fullstack developer in constant evolution",
        about_p1: "I was born in 2003 and have always been passionate about the tech world. My first contact with programming was in 2022, when I joined a university, and since then I've been studying, practicing and building projects to turn ideas into real solutions.",
        about_p2: "My areas of work include web development, internal systems, automations and applications that improve processes within companies. I aim to build pleasant, organized and responsive interfaces without losing focus on logic and functionality.",
        about_info_location: "Brazil",
        about_info_role: "Fullstack",
        about_info_edu: "Information Systems",

        services_title: "Expertise",
        services_subtitle: "Areas where I can contribute",
        service_web_title: "Web Development",
        service_web_desc: "Building pages, landing pages and responsive interfaces with HTML, CSS and JavaScript.",
        service_back_title: "Back-end",
        service_back_desc: "Building business rules, APIs and integrations using technologies such as C# and Node.js.",
        service_db_title: "Databases",
        service_db_desc: "Modeling and handling data for systems, reports and internal applications.",
        service_auto_title: "Automations",
        service_auto_desc: "Automating repetitive tasks and creating tools to improve processes.",
        service_resp_title: "Responsiveness",
        service_resp_desc: "Adaptable layouts for phone, tablet and desktop, keeping a great visual experience.",
        service_ui_title: "Modern UI",
        service_ui_desc: "Interfaces with a current look, smooth animations, good hierarchy and a focus on usability.",

        projects_title: "Projects",
        projects_subtitle: "Some work and ideas in development",
        project_solar_desc: "System focused on generating and automating documents for solar energy projects.",
        tech_pdf: "PDF",
        tech_automation: "Automation",
        tech_mobile: "Mobile",
        tech_responsive: "Responsive",
        project_pro_tag: "Professional project",
        project_view: "View on GitHub",
        project_brawl_desc: "Web project made in partnership with artist Gustavo Almeida, blending code and original art.",
        project_termo_title: "Word Game App (Wordle-style)",
        project_termo_desc: "Mobile app inspired by the Wordle-style game 'Termo', built with Flutter and Dart.",
        project_landing_title: "Games Landing Page",
        project_landing_desc: "Visual page to showcase gaming content, focused on layout and style.",
        project_php_title: "PHP Website",
        project_php_desc: "Web project using PHP, HTML and CSS to practice structure and dynamic pages.",
        project_tlou_title: "Responsive Layout",
        project_tlou_desc: "Responsive web page themed after the series The Last of Us, focused on responsiveness.",
        projects_all: "See all on GitHub",

        skills_title: "Skills",
        skills_subtitle: "Technologies that are part of my routine",
        skill_hint: "Hover or tap a skill to see a description.",

        contact_title: "Let's work together?",
        contact_subtitle: "Get in touch with me",
        form_name: "Your name",
        form_email: "Your e-mail",
        form_subject: "Subject",
        form_message: "How can I help?",
        contact_btn: "Send message",

        footer_rights: "All rights reserved.",
        form_sending: "Sending...",
        form_success: "Message sent! I'll get back to you soon.",
        form_error: "Couldn't send it. Please try again or e-mail me directly.",
        form_config: "Sending is not set up yet. Add your Formspree ID in script.js.",

        typing: [
            "Fullstack Developer",
            "Web Developer",
            "Digital Solutions Builder",
            "Passionate about Technology"
        ]
    }
};

let currentLang = localStorage.getItem("lang") || "pt";
let activeSkillItem = null;

function applyLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];

    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    // Se uma habilidade estiver selecionada, atualiza a descrição no idioma novo
    if (activeSkillItem) {
        skillDescription.textContent = activeSkillItem.dataset[lang === "pt" ? "skillPt" : "skillEn"];
    }

    langButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Reinicia o efeito de digitação no novo idioma
    resetTyping();

    localStorage.setItem("lang", lang);
}

/* ---------- Efeito de digitação ---------- */
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimer = null;

function resetTyping() {
    clearTimeout(typingTimer);
    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typingText.textContent = "";
    typeEffect();
}

function typeEffect() {
    const words = translations[currentLang].typing;
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typingSpeed = isDeleting ? 45 : 85;

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1300;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 300;
    }

    typingTimer = setTimeout(typeEffect, typingSpeed);
}

/* ---------- Menu mobile ---------- */
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});

/* ---------- Alternador de idioma ---------- */
langButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

/* ---------- Link ativo no scroll ---------- */
function updateActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach((link) => link.classList.remove("active"));
            if (activeLink) activeLink.classList.add("active");
        }
    });
}

/* ---------- Animações de revelação ---------- */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});

/* ---------- Habilidades ---------- */
skillItems.forEach((item) => {
    const showSkill = () => {
        skillItems.forEach((skill) => skill.classList.remove("active"));
        item.classList.add("active");
        activeSkillItem = item;
        skillDescription.textContent = item.dataset[currentLang === "pt" ? "skillPt" : "skillEn"];
    };

    item.addEventListener("mouseenter", showSkill);
    item.addEventListener("click", showSkill);
});

/* ---------- Formulário de contato ---------- */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

function setStatus(messageKey, type) {
    formStatus.textContent = translations[currentLang][messageKey];
    formStatus.className = "form-status " + (type || "");
}

const submitButton = contactForm.querySelector("button[type='submit']");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Enquanto o Formspree não estiver configurado, avisa em vez de enviar em vão.
    if (!FORMSPREE_ID) {
        setStatus("form_config", "error");
        return;
    }

    const data = Object.fromEntries(new FormData(contactForm).entries());

    setStatus("form_sending", "");
    submitButton.disabled = true;

    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                nome: data.nome,
                email: data.email,
                _replyto: data.email,
                assunto: data.assunto,
                mensagem: data.mensagem,
                _subject: data.assunto || `Novo contato do portfólio — ${data.nome}`
            })
        });

        if (response.ok) {
            setStatus("form_success", "success");
            contactForm.reset();
        } else {
            setStatus("form_error", "error");
        }
    } catch (err) {
        setStatus("form_error", "error");
    } finally {
        submitButton.disabled = false;
    }
});

/* ---------- Inicialização ---------- */
window.addEventListener("scroll", updateActiveLink);
year.textContent = new Date().getFullYear();
applyLanguage(currentLang);
updateActiveLink();
