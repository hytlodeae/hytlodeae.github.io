// Num visitors tracker

// Get all text elements you want to animate
const textElements = document.querySelectorAll('p, h1, h2, h3, section, span, li'); // Add more selectors if needed
const visitedTimes = localStorage.getItem('visitedTimes');
const n_elements = textElements.length;
var typed = 0;
var isTyping = true;
if(localStorage.getItem('visitedTimes') >= 6){
  document.getElementById("vis_button").style.display = "block";
}

textElements.forEach(textElement => {
  if(isTyping && parseInt(localStorage.getItem('visitedTimes')) < 6){

    const old_inner = textElement.innerHTML;
    let wrappedText = "";
    for (let i = 0; i < textElement.textContent.length; i++) {
      wrappedText += `<span style="visibility: hidden;">${textElement.textContent.charAt(i)}</span>`;
    }
    textElement.innerHTML = wrappedText;

    const children  = textElement.children;

    let index = 0;
    let typingSpeed = 100; // Initial speed
    const maxSpeed = 20; // Maximum speed (lower value is faster)
    const acceleration = 5; // How quickly the speed increases

    function typeWriter() {
      if (index < children.length && isTyping && parseInt(localStorage.getItem('visitedTimes')) < 6) {
        children[index].style.visibility = "visible";

        index++;

        typingSpeed = Math.max(typingSpeed - acceleration, maxSpeed);
        typingSpeed += (Math.random() *10) - 5

        setTimeout(typeWriter, typingSpeed);
      } else{ 
        textElement.innerHTML = old_inner;
        typed++;
      }
    }

    setTimeout(typeWriter, 500);
  }
});

// Stop typing on click event
document.addEventListener('click', () => {
  if(parseInt(localStorage.getItem('visitedTimes')) < 6 && isTyping && typed < n_elements){
  if(localStorage.getItem('visitedTimes') === null){
      localStorage.setItem("visitedTimes", 1);
    } else{
      localStorage.setItem("visitedTimes", parseInt(localStorage.getItem('visitedTimes')) + 1);
    }
  }
  isTyping = false; // Update the state so typewriters stop
});

// Stop typing on click event
document.addEventListener('touchstart', () => {
  if(parseInt(localStorage.getItem('visitedTimes')) < 6 && isTyping && typed < n_elements){
    if(localStorage.getItem('visitedTimes') === null){
      localStorage.setItem("visitedTimes", 1);
    } else{
      localStorage.setItem("visitedTimes", parseInt(localStorage.getItem('visitedTimes')) + 1);
    }
  }
  isTyping = false; // Update the state so typewriters stop
});



// TRANSLATIONS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TRANSLATIONS



// --- Language support -------------------------------------------------------
const translations = {
  en: {
    name_title: "Georgia Fonseca",
    name_subtitle: "MSc in Artificial Intelligence",

    intro_1: "Welcome to my portfolio,",
    intro_2: "I’m Georgia Fonseca, a machine learning and software engineer specializing in Transformer models. My work ranges from research-driven prototypes to production systems and end-to-end application development.",
    intro_3: "I am proficient in Python, JavaScript, HTML, CSS, and R, and I am also experienced in SQL and Django. Currently, I am developing skills in Node.js and React.",

    see_cv_text: "See and download my complete CV",
    // cv_label: "CV",

    projects_title: "Projects",
    project_1: "Machine Summarization Pipelines with Different Transformer Models",
    project_2: "Integration of Computer Vision and Reinforcement Learning for Teaching Robots to Navigate a Room",
    project_3: "Modulating Chat GPT with Mental Data from EEG",
    project_4: "Interactive Website for Phonology Students",
    project_5: "Acoustic Analysis of Accent in Second-Language English Speakers",

    education_title: "Education",
    education_msc: "MSc in Artificial Intelligence at Vrije University Amsterdam",
    education_ba: "BA in Cognitive Linguistics, minor in AI at Leiden University"
  },

  pt: {
    name_title: "Georgia Fonseca",
    name_subtitle: "MSc em Inteligência Artificial",

    intro_1: "Bem-vindo(a) ao meu portfólio,",
    intro_2: "Sou a Georgia Fonseca, engenheira de software e IA/ML especializada em modelos Transformer. Meu trabalho vai de protótipos de pesquisa a sistemas em produção e desenvolvimento de aplicações ponta a ponta.",
    intro_3: "Tenho experiência em Python, JavaScript, HTML, CSS e R, além de SQL e Django. Atualmente estou aprofundando minhas habilidades em Node.js e React.",

    see_cv_text: "Veja e baixe o meu CV",
    cv_label: "eja e baixe o meu CV",

    projects_title: "Projetos",
    project_1: "Pipelines de Sumarização Automática com Diferentes Modelos Transformer",
    project_2: "Integração de Visão Computacional e Reinforcement Learning para Ensinar Robôs a Navegar em um Ambiente",
    project_3: "Modulação do ChatGPT com Dados Mentais de EEG",
    project_4: "Website Interativo para Estudantes de Fonologia",
    project_5: "Análise Acústica de Acento em Falantes de Inglês como Segunda Língua",

    education_title: "Formação acadêmica",
    education_msc: "Mestrado em Inteligência Artificial na Vrije Universiteit Amsterdam",
    education_ba: "Bacharelado em Linguística Cognitiva, com minor em IA, na Universidade de Leiden"
  },

  es: {
    name_title: "Georgia Fonseca",
    name_subtitle: "MSc en Inteligencia Artificial",

    intro_1: "Bienvenido(a) a mi portafolio,",
    intro_2: "Soy Georgia Fonseca, ingeniera de software e IA/ML especializada en modelos Transformer. Mi trabajo va desde prototipos de investigación hasta sistemas en producción y desarrollo de aplicaciones de extremo a extremo.",
    intro_3: "Tengo experiencia en Python, JavaScript, HTML, CSS y R, además de SQL y Django. Actualmente estoy desarrollando habilidades en Node.js y React.",

    see_cv_text: "Consulta y descarga mi",
    cv_label: "CV completo",

    projects_title: "Proyectos",
    project_1: "Pipelines de Resumen Automático con Distintos Modelos Transformer",
    project_2: "Integración de Visión por Computador y Aprendizaje por Refuerzo para Enseñar a Robots a Navegar en una Habitación",
    project_3: "Modulación de ChatGPT con Datos Mentales de EEG",
    project_4: "Sitio Web Interactivo para Estudiantes de Fonología",
    project_5: "Análisis Acústico del Acento en Hablantes de Inglés como Segunda Lengua",

    education_title: "Formación",
    education_msc: "Máster en Inteligencia Artificial en la Vrije Universiteit Amsterdam",
    education_ba: "Grado en Lingüística Cognitiva, con minor en IA, en la Universidad de Leiden"
  },

  nl: {
    name_title: "Georgia Fonseca",
    name_subtitle: "MSc Kunstmatige Intelligentie",

    intro_1: "Welkom op mijn portfolio,",
    intro_2: "Ik ben Georgia Fonseca, een AI/ML en software engineer met een specialisatie in Transformer modellen. Mijn werk loopt van onderzoeksgedreven prototypes tot productiesystemen en end-to-end applicatieontwikkeling.",
    intro_3: "Ik heb ervaring met Python, JavaScript, HTML, CSS en R, en daarnaast met SQL en Django. Op dit moment ben ik mijn vaardigheden in Node.js en React aan het verdiepen.",

    see_cv_text: "Bekijk en download mijn",
    cv_label: "volledige CV",

    projects_title: "Projecten",
    project_1: "Machine-samenvattingspipelines met Verschillende Transformer-modellen",
    project_2: "Integratie van Computer Vision en Reinforcement Learning om Robots te Leren een Ruimte te Navigeren",
    project_3: "Modulatie van ChatGPT met Mentale Data uit EEG",
    project_4: "Interactieve Website voor Studenten Fonologie",
    project_5: "Akoestische Analyse van Accent bij Tweedetaalsprekers van het Engels",

    education_title: "Opleiding",
    education_msc: "MSc Kunstmatige Intelligentie aan de Vrije Universiteit Amsterdam",
    education_ba: "BA Cognitieve Taalwetenschap, minor AI, aan de Universiteit Leiden"
  },

  fr: {
    name_title: "Georgia Fonseca",
    name_subtitle: "MSc en Intelligence Artificielle",

    intro_1: "Bienvenue sur mon portfolio,",
    intro_2: "Je suis Georgia Fonseca, ingénieure en machine learning et en développement logiciel spécialisée en modèles Transformer. Mon travail va de prototypes de recherche à des systèmes en production et au développement d’applications de bout en bout.",
    intro_3: "Je maîtrise Python, JavaScript, HTML, CSS et R, et j’ai également de l’expérience avec SQL et Django. Actuellement, je développe mes compétences en Node.js et React.",

    see_cv_text: "Voir et télécharger mon",
    cv_label: "CV complet",

    projects_title: "Projets",
    project_1: "Pipelines de Résumé Automatique avec Différents Modèles Transformer",
    project_2: "Intégration de la Vision par Ordinateur et du Reinforcement Learning pour Apprendre aux Robots à Naviguer dans une Pièce",
    project_3: "Modulation de ChatGPT avec des Données Mentales issues de l’EEG",
    project_4: "Site Web Interactif pour Étudiants en Phonologie",
    project_5: "Analyse Acoustique de l’Accent chez des Locuteurs d’Anglais Langue Seconde",

    education_title: "Formation",
    education_msc: "Master en Intelligence Artificielle à la Vrije Universiteit Amsterdam",
    education_ba: "Licence en Linguistique Cognitive, avec mineure en IA, à l’Université de Leiden"
  }
};

const cvByLang = {
  en: "pdfs/cv/georgia-cv-en.pdf",
  pt: "pdfs/cv/georgia-cv-pt.pdf",
  es: "pdfs/cv/georgia-cv-es.pdf",
  nl: "pdfs/cv/georgia-cv-nl.pdf",
  fr: "pdfs/cv/georgia-cv-fr.pdf",
};


/* ---------- MAIN LANGUAGE FUNCTION ---------- */
function setLanguage(lang) {
  if (!translations[lang]) lang = "en";

  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("lang", lang);

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (text !== undefined) {
      el.innerHTML = text;
    }
  });

  // Update CV link with fallback to English
  const cvLink = document.getElementById("cv-link");
  if (cvLink) {
    const file = cvByLang[lang] ? cvByLang[lang] : cvByLang["en"];
    cvLink.href = file;
  }

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  document.querySelectorAll(".lang-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
});