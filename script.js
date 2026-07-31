const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const typingText = document.getElementById("typingText");
const skillItems = document.querySelectorAll(".skill-item");
const langButtons = document.querySelectorAll(".lang-btn");
const year = document.getElementById("year");
const progressBar = document.getElementById("progress");
const previewButtons = document.querySelectorAll(".project-preview");
const videoModal = document.getElementById("videoModal");
const videoModalPlayer = document.getElementById("videoModalPlayer");
const videoModalTitle = document.getElementById("videoModalTitle");
const videoModalDesc = document.getElementById("videoModalDesc");

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

        wordmark_role: "Dev. Fullstack",

        hero_eyebrow: "Desenvolvedor fullstack",
        hero_place: "Espírito Santo, Brasil",
        hero_status: "no momento",
        hero_stamp: "movido a curiosidade",
        hero_email: "E-mail",
        portrait_caption: "Samuel S. Leite, retrato",
        hero_description: "Construo sistemas web, aplicações internas e automações que resolvem problemas reais de empresas, com a mesma atenção para a lógica do back-end e para o acabamento da interface.",
        hero_btn_projects: "Ver projetos",
        hero_btn_contact: "Fale comigo",

        about_title: "Sobre mim",
        about_subtitle: "Minha trajetória e motivação na tecnologia",
        about_lead: "Nasci em 2003 e nunca soube ficar longe de um computador. Hoje transformo essa curiosidade em software que empresas usam todos os dias.",
        about_h3: "Desenvolvedor Fullstack em evolução constante",
        about_p1: "Meu primeiro contato com programação foi em 2022, quando ingressei no Centro Universitário do Espírito Santo (UNESC). De lá para cá, foram anos estudando, praticando e desenvolvendo projetos para transformar ideias em soluções reais.",
        about_p2: "Atuo em desenvolvimento web, sistemas internos, automações e aplicações que melhoram processos dentro de empresas. Busco interfaces agradáveis e organizadas, sem nunca perder o foco na lógica e na funcionalidade.",
        about_label_location: "Local",
        about_label_role: "Atuação",
        about_label_edu: "Formação",
        about_info_location: "Espírito Santo, Brasil",
        about_info_role: "Fullstack",
        about_info_edu: "Sistemas de Informação — UNESC",

        services_title: "Especializações",
        services_subtitle: "Áreas onde posso contribuir",
        service_web_title: "Desenvolvimento Web",
        service_web_desc: "Criação de páginas, landing pages e interfaces responsivas com HTML, CSS e JavaScript.",
        service_back_title: "Back-end",
        service_back_desc: "Construção de regras de negócio, APIs e integrações utilizando tecnologias como C# e PHP.",
        service_db_title: "Banco de Dados",
        service_db_desc: "Modelagem e manipulação de dados para sistemas, relatórios e aplicações internas.",
        service_auto_title: "Automações",
        service_auto_desc: "Automação de tarefas repetitivas e criação de ferramentas para melhorar processos.",
        service_resp_title: "Responsividade",
        service_resp_desc: "Layouts adaptáveis para celular, tablet e desktop, mantendo boa experiência visual.",
        service_ui_title: "Interface",
        service_ui_desc: "Interfaces com hierarquia clara, animações discretas e foco total na usabilidade.",

        projects_title: "Projetos",
        projects_subtitle: "Alguns trabalhos e ideias em desenvolvimento",
        project_solar_desc: "Sistema voltado para geração e automação de documentos para projetos solares.",
        tech_pdf: "PDF",
        tech_automation: "Automação",
        tech_mobile: "Mobile",
        tech_responsive: "Responsivo",
        project_pro_tag: "Projeto profissional",
        project_view: "GitHub",
        project_watch: "Visualizar",
        project_brawl_desc: "Projeto web feito em parceria com o artista Gustavo Almeida, unindo código e arte autoral.",
        project_termo_title: "Palavriado",
        project_termo_desc: "Aplicativo mobile inspirado no jogo Termo, desenvolvido com Flutter e Dart.",
        project_unity_title: "Jogo 2D (Unity)",
        project_unity_desc: "Jogo 2D desenvolvido na engine Unity com C#, explorando mecânicas de gameplay, física e design de fases.",
        project_php_title: "Site com PHP",
        project_php_desc: "Projeto web utilizando PHP, HTML e CSS para praticar estrutura e páginas dinâmicas.",
        project_tlou_title: "Layout Responsivo",
        project_tlou_desc: "Página web responsiva com temática da série The Last of Us, focada em responsividade.",
        projects_all: "Ver todos no GitHub",

        skills_title: "Habilidades",
        skills_subtitle: "Tecnologias que fazem parte da minha rotina",
        cat_front: "Front-end",
        cat_back: "Back-end",
        cat_data: "Dados",
        cat_mobile: "Mobile",

        contact_title: "Contato",
        contact_subtitle: "Aberto a oportunidades e parcerias",
        contact_lead: "Vamos construir alguma coisa juntos?",
        form_name: "Seu nome",
        form_email: "Seu e-mail",
        form_subject: "Assunto",
        form_message: "Como posso ajudar?",
        contact_btn: "Enviar mensagem",

        footer_rights: "Todos os direitos reservados.",
        footer_made: "Feito à mão com HTML, CSS e JavaScript.",
        form_sending: "Enviando...",
        form_success: "Mensagem enviada! Em breve retorno o contato.",
        form_error: "Não foi possível enviar. Tente novamente ou envie um e-mail diretamente.",
        form_config: "Envio ainda não configurado. Adicione o ID do Formspree no script.js.",

        typing: [
            "Desenvolvedor Fullstack",
            "Sistemas internos e automações",
            "Interfaces web sob medida",
            "Especializando em C# e .NET"
        ]
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Expertise",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",

        wordmark_role: "Fullstack Dev.",

        hero_eyebrow: "Fullstack developer",
        hero_place: "Espírito Santo, Brazil",
        hero_status: "currently",
        hero_stamp: "driven by curiosity",
        hero_email: "E-mail",
        portrait_caption: "Samuel S. Leite, portrait",
        hero_description: "I build web systems, internal applications and automations that solve real business problems, with the same care for back-end logic and interface craft.",
        hero_btn_projects: "View projects",
        hero_btn_contact: "Get in touch",

        about_title: "About me",
        about_subtitle: "My journey and motivation in technology",
        about_lead: "I was born in 2003 and never learned how to stay away from a computer. Today I turn that curiosity into software companies use every day.",
        about_h3: "Fullstack developer in constant evolution",
        about_p1: "My first contact with programming was in 2022, when I joined Centro Universitário do Espírito Santo (UNESC). Since then, I've spent years studying, practicing and building projects to turn ideas into real solutions.",
        about_p2: "I work on web development, internal systems, automations and applications that improve processes within companies. I aim for pleasant, well-organized interfaces without ever losing focus on logic and functionality.",
        about_label_location: "Based in",
        about_label_role: "Focus",
        about_label_edu: "Education",
        about_info_location: "Espírito Santo, Brazil",
        about_info_role: "Fullstack",
        about_info_edu: "Information Systems — UNESC",

        services_title: "Expertise",
        services_subtitle: "Areas where I can contribute",
        service_web_title: "Web Development",
        service_web_desc: "Building pages, landing pages and responsive interfaces with HTML, CSS and JavaScript.",
        service_back_title: "Back-end",
        service_back_desc: "Building business rules, APIs and integrations using technologies such as C# and PHP.",
        service_db_title: "Databases",
        service_db_desc: "Modeling and handling data for systems, reports and internal applications.",
        service_auto_title: "Automations",
        service_auto_desc: "Automating repetitive tasks and creating tools to improve processes.",
        service_resp_title: "Responsiveness",
        service_resp_desc: "Adaptable layouts for phone, tablet and desktop, keeping a great visual experience.",
        service_ui_title: "Interface",
        service_ui_desc: "Interfaces with clear hierarchy, restrained animation and full focus on usability.",

        projects_title: "Projects",
        projects_subtitle: "Some work and ideas in development",
        project_solar_desc: "System focused on generating and automating documents for solar energy projects.",
        tech_pdf: "PDF",
        tech_automation: "Automation",
        tech_mobile: "Mobile",
        tech_responsive: "Responsive",
        project_pro_tag: "Professional project",
        project_view: "GitHub",
        project_watch: "Preview",
        project_brawl_desc: "Web project made in partnership with artist Gustavo Almeida, blending code and original art.",
        project_termo_title: "Palavriado",
        project_termo_desc: "Mobile app inspired by the Wordle-style game 'Termo', built with Flutter and Dart.",
        project_unity_title: "2D Game (Unity)",
        project_unity_desc: "2D game built in the Unity engine with C#, exploring gameplay mechanics, physics and level design.",
        project_php_title: "PHP Website",
        project_php_desc: "Web project using PHP, HTML and CSS to practice structure and dynamic pages.",
        project_tlou_title: "Responsive Layout",
        project_tlou_desc: "Responsive web page themed after the series The Last of Us, focused on responsiveness.",
        projects_all: "See all on GitHub",

        skills_title: "Skills",
        skills_subtitle: "Technologies that are part of my routine",
        cat_front: "Front-end",
        cat_back: "Back-end",
        cat_data: "Data",
        cat_mobile: "Mobile",

        contact_title: "Contact",
        contact_subtitle: "Open to opportunities and partnerships",
        contact_lead: "Shall we build something together?",
        form_name: "Your name",
        form_email: "Your e-mail",
        form_subject: "Subject",
        form_message: "How can I help?",
        contact_btn: "Send message",

        footer_rights: "All rights reserved.",
        footer_made: "Handcrafted with HTML, CSS and JavaScript.",
        form_sending: "Sending...",
        form_success: "Message sent! I'll get back to you soon.",
        form_error: "Couldn't send it. Please try again or e-mail me directly.",
        form_config: "Sending is not set up yet. Add your Formspree ID in script.js.",

        typing: [
            "Fullstack Developer",
            "Internal systems & automation",
            "Tailor-made web interfaces",
            "Specializing in C# and .NET"
        ]
    }
};

let currentLang = localStorage.getItem("lang") || "pt";
let activeVideoButton = null;

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

    // Atualiza a descrição de cada habilidade no idioma novo
    skillItems.forEach((item) => {
        item.querySelector(".skill-panel-text").textContent =
            item.dataset[lang === "pt" ? "skillPt" : "skillEn"];
    });

    // Se o modal de vídeo estiver aberto, atualiza a descrição no idioma novo
    if (activeVideoButton) {
        videoModalDesc.textContent = activeVideoButton.dataset[lang === "pt" ? "descPt" : "descEn"];
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
function setMenu(open) {
    navMenu.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
}

menuToggle.addEventListener("click", () => {
    setMenu(!navMenu.classList.contains("open"));
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
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

/* ---------- Régua de progresso de leitura ---------- */
function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progressBar.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
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
    const toggle = item.querySelector(".skill-toggle");

    toggle.addEventListener("click", () => {
        const willOpen = !item.classList.contains("active");

        skillItems.forEach((skill) => {
            skill.classList.remove("active");
            skill.querySelector(".skill-toggle").setAttribute("aria-expanded", "false");
        });

        if (willOpen) {
            item.classList.add("active");
            toggle.setAttribute("aria-expanded", "true");
        }
    });
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

/* ---------- Modal de vídeo dos projetos ---------- */
function openVideoModal(button) {
    activeVideoButton = button;

    videoModalTitle.textContent = button.dataset.title || "";
    videoModalDesc.textContent = button.dataset[currentLang === "pt" ? "descPt" : "descEn"] || "";
    videoModalPlayer.src = button.dataset.video;

    videoModal.classList.add("open");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Tenta iniciar o vídeo (navegadores podem exigir interação; o clique já conta)
    videoModalPlayer.play().catch(() => {});
}

function closeVideoModal() {
    videoModal.classList.remove("open");
    videoModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    videoModalPlayer.pause();
    videoModalPlayer.removeAttribute("src");
    videoModalPlayer.load(); // libera o download e reseta o player
    activeVideoButton = null;
}

previewButtons.forEach((button) => {
    button.addEventListener("click", () => openVideoModal(button));
});

videoModal.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeVideoModal);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && videoModal.classList.contains("open")) {
        closeVideoModal();
    }
});

/* ---------- Inicialização ---------- */
window.addEventListener("scroll", () => {
    updateActiveLink();
    updateProgress();
}, { passive: true });

year.textContent = new Date().getFullYear();
applyLanguage(currentLang);
updateActiveLink();
updateProgress();
