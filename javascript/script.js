document.addEventListener('DOMContentLoaded', () => {
    var inputFullname = document.getElementById("fullname");
    var inputEmail = document.getElementById("email");
    var inputPhone = document.getElementById("phone");
    var inputSubject = document.getElementById("subject");
    var inputMessage = document.getElementById("message");

    const languageButton = document.getElementById('language-toggle');
    const translations = {
        es: {
            title: "Guille Bouix | Portafolio",
            home: "Inicio",
            about: "Sobre Mí",
            biography: "Mi nombre es <b>Bouix Guillermo Daniel</b>, nací y crecí en <b>Misiones, Argentina</b>, donde desde muy joven me sentí atraído por la tecnología y las infinitas posibilidades que ofrece. Hace dos años decidí adentrarme en el mundo de la programación de manera autodidacta, lo que me motivó a explorar y construir sistemas destinados a simplificar procesos y abordar problemas comunes.<br><br>Actualmente estoy en la etapa final de la carrera de <b>Analista Programador</b>, un paso que me ha permitido consolidar y ampliar mis conocimientos en <b>desarrollo de software</b>. Me gusta experimentar con proyectos que combinan <b>creatividad</b> y <b>funcionalidad</b>, explorando maneras de optimizar procesos y materializar conceptos de forma práctica y efectiva.<br><br>Fuera de la programación, encuentro inspiración en la <b>música</b> y el <b>diseño digital</b>. Estos hobbies no solo me ayudan a desconectarme del código, sino que también me brindan nuevas perspectivas y formas de expresión que enriquecen mi visión como desarrollador. La búsqueda constante de <b>aprendizaje</b> y nuevas experiencias me motiva día a día a seguir creciendo como profesional.",
            services: "Servicios",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto",
            toggleLanguage: "ES / EN",
            hello: "Hola, soy <span>Guille Bouix</span>",
            intro: "Soy de Misiones, Argentina, estudiante de Analista Programador, me dedico a desarrollar soluciones digitales simples, funcionales y de alta calidad.",
            cvButton: "Mi Curriculum",
            DesarrolloWeb: "Desarrollo Web",
            webDescription: "Diseñamos y desarrollamos páginas web modernas y personalizadas, optimizadas para dispositivos móviles y con un enfoque en la experiencia del usuario. Si quieres que tu negocio crezca, necesitas un sitio web.",
            viewPlans: "Ver Planes",
            softwareDevelopment: "Desarrollo de Software",
            softwareDescription: "Creamos soluciones tecnológicas a medida, desde aplicaciones sencillas hasta sistemas más complejos. Nuestro enfoque garantiza eficiencia, escalabilidad y seguridad para cubrir necesidades específicas de tu negocio.",
            servicesTitle: "Servicios",
            skillsTitle: "Habilidades",
            projectsTitle: "Proyectos",
            contactTitle: "Contacto",
            trainingPlusDescription: "Training+ es mi proyecto de tesis universitaria en desarrollo. Es un sistema que tiene como objetivo gestionar entrenamientos personalizados. Permitirá a los entrenadores supervisar y dar seguimiento a sus alumnos, creando y asignando rutinas según sus necesidades y metas, optimizando el proceso de entrenamiento.",
            viewMore: "Ver Más",
            quickSellDescription: "QuickSell es una aplicación de escritorio y web diseñada para la gestión de ventas. Ofrece control de stock, manejo de clientes y usuarios, generación de facturas, reportes detallados y ejecución de ventas, brindando herramientas clave para optimizar procesos comerciales.",
            contactDescription: "Portfolio v1 fue mi primer portafolio, con un diseño moderno y totalmente responsivo. Desarrollado solo con HTML, CSS y JavaScript, incluía secciones como inicio, habilidades, proyectos y formulario de contacto.",
            send: "Contáctame",
            basicPlanTitle: "PLAN BASICO",
            basicPlanPrice: "$ 130 USD",
            responsiveDesign: "Diseño Responsivo",
            fourSections: "4 Secciones",
            sslCertificate: "Certificado SSL",
            seoOptimization: "Optimización SEO",
            contactForm: "Formulario de Contacto",
            threeMonthsSupport: "3 Meses de Soporte Técnico",
            completePlanTitle: "PLAN COMPLETO",
            completePlanPrice: "$ 200 USD",
            sixSections: "6 Secciones",
            googleAnalytics: "Google Analytics",
            hostingDeployment: "Hosting y Despliegue",
            sixMonthsSupport: "6 Meses de Soporte Técnico"
        },
        en: {
            title: "Guille Bouix | Portfolio",
            home: "Home",
            about: "About Me",
            biography: "My name is <b>Bouix Guillermo Daniel</b>. I was born and raised in <b>Misiones, Argentina</b>, where I developed an early fascination with technology and its boundless potential. Two years ago, I decided to pursue programming as a self-taught endeavor, which ignited my passion for understanding and creating systems that solve everyday challenges and streamline tasks.<br><br>Currently, I am in the final stage of completing my <b>Programmer Analyst</b> degree, a step that has helped me consolidate and expand my knowledge in <b>software development</b>. I enjoy working on projects that combine <b>creativity</b> and <b>functionality</b>, exploring ways to optimize processes and bring concepts to life in practical and effective ways.<br><br>Outside programming, I find inspiration in <b>music</b> and <b>digital design</b>. These hobbies not only allow me to disconnect from coding but also provide fresh perspectives that enrich my vision as a developer. My constant pursuit of <b>learning</b> and new experiences drives me daily to grow as a professional.",
            services: "Services",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            toggleLanguage: "ES / EN",
            hello: "Hello, I am <span>Guille Bouix</span>",
            intro: "I am from Misiones, Argentina, a student of Programmer Analyst, dedicated to developing simple, functional, and high-quality digital solutions.",
            cvButton: "My Curriculum",
            DesarrolloWeb: "Web Development",
            webDescription: "We design and develop modern, customized websites optimized for mobile devices, with a focus on user experience. If you want your business to grow, you need a website.",
            viewPlans: "View Plans",
            softwareDevelopment: "Software Development",
            softwareDescription: "We create tailor-made technological solutions, from simple applications to more complex systems. Our approach ensures efficiency, scalability, and security to meet your business's specific needs.",
            servicesTitle: "Services",
            skillsTitle: "Skills",
            projectsTitle: "Projects",
            contactTitle: "Contact",
            trainingPlusDescription: "Training+ is my university thesis project currently in development. It is a system aimed at managing personalized workouts. It will allow trainers to monitor and track their students, creating and assigning routines based on their needs and goals, optimizing the training process.",
            viewMore: "View More",
            quickSellDescription: "QuickSell is a desktop and web application designed for sales management. It offers stock control, client and user management, invoice generation, detailed reports, and sales execution, providing key tools to optimize business processes.",
            contactDescription: "Portfolio v1 was my first portfolio, with a modern and fully responsive design. Developed only with HTML, CSS, and JavaScript, it included sections like home, skills, projects, and contact form.",
            send: "Contact Me",
            basicPlanTitle: "BASIC PLAN",
            basicPlanPrice: "$ 130 USD",
            responsiveDesign: "Responsive Design",
            fourSections: "4 Sections",
            sslCertificate: "SSL Certificate",
            seoOptimization: "SEO Optimization",
            contactForm: "Contact Form",
            threeMonthsSupport: "3 Months of Technical Support",
            completePlanTitle: "COMPLETE PLAN",
            completePlanPrice: "$ 200 USD",
            sixSections: "6 Sections",
            googleAnalytics: "Google Analytics",
            hostingDeployment: "Hosting and Deployment",
            sixMonthsSupport: "6 Months of Technical Support"
        }
    };

    // Detect current language in localStorage or default to 'es'
    let currentLang = localStorage.getItem('language') || 'es';

    // Function to translate the page
    const translatePage = (language) => {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.innerHTML = translations[language][key] || element.innerHTML;
        });
        languageButton.innerText = translations[language].toggleLanguage;
        localStorage.setItem('language', language);
    };

    // Initialize page with the current language
    translatePage(currentLang);

    // Toggle language when button is clicked
    languageButton.addEventListener('click', () => {
        currentLang = (currentLang === 'es') ? 'en' : 'es';
        translatePage(currentLang);
    });





    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');
    
    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')
    
        toggleBtnIcon.classList = isOpen
            ? 'bx bx-x'
            : 'bx bx-menu'
    }

    // Define an array of strings to be displayed and erased
    const textArray = [
        "Software Developer",
        "Web Developer"
        // Puedes agregar más frases si lo deseas
    ];

    let typeJsText = document.querySelector(".animatedText");
    let stringIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    let isPaused = false;

    function typeJs() {
        if (stringIndex < textArray.length) {
            const currentString = textArray[stringIndex];

            if (isTyping) {
                // Escritura
                if (charIndex < currentString.length) {
                    typeJsText.innerHTML += currentString.charAt(charIndex);
                    charIndex++;
                } else {
                    isTyping = false;
                    isPaused = true;
                    setTimeout(() => {
                        isPaused = false;
                    }, 1000);
                }
            } else if (!isPaused) {
                if (charIndex > 0) {
                    typeJsText.innerHTML = currentString.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    isTyping = true;
                    stringIndex++;

                    if (stringIndex >= textArray.length) {
                        stringIndex = 0; // Volver al inicio del array
                    }

                    charIndex = 0; // Resetear el índice del carácter
                    typeJsText.innerHTML = ""; // Limpiar el contenido para la nueva cadena
                }
            }
        }
    }

    // Llamar a la función `typeJs` cada 50ms (puedes ajustar la velocidad)
    setInterval(typeJs, 100);







    
    document.getElementById('language-toggle').addEventListener('click', function() {
        // Cambia la URL según el idioma actual
        if (window.location.pathname.includes('/es')) {
            // Si está en español, cambia a inglés
            window.location.pathname = window.location.pathname.replace('/es', '/en');
        } else {
            // Si está en inglés, cambia a español
            window.location.pathname = window.location.pathname.replace('/en', '/es');
        }
    });




    const navLinks = document.querySelectorAll(".navbar .links a, .dropdown_menu a");
    const header = document.querySelector('header');
    
    window.addEventListener("scroll", () => {
        const fromTop = window.scrollY + header.offsetHeight;
    
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
    
            if (section) {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + window.scrollY;
                const sectionBottom = sectionTop + section.offsetHeight;
    
                if (sectionTop <= fromTop && sectionBottom > fromTop) {
                    navLinks.forEach(link => link.classList.remove("active"));
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            }
        });
    });
    
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header .navbar a, .dropdown_menu a');
    
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if (top >= offset && top < offset + height) {   
                navlinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };
    


    AOS.init({
        offset: 120, // Desplazamiento de activación en píxeles
        duration: 400, // Duración de la animación en ms
        easing: 'ease-in-out', // Tipo de easing
        once: true, // Animar solo una vez
    });
    



    (function() {
        emailjs.init("uU6YQXHcxUhzh2rKk"); // Reemplaza con tu User ID
    })();
    
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
        };
    
        emailjs.send("service_8w8rh02", "template_unmscc5", formData)
            .then(function(response) {
                console.log("Correo enviado con éxito: ", response);
                alert("¡Mensaje enviado correctamente!");
            })
            .catch(function(error) {
                console.error("Error al enviar el correo: ", error);
                alert("Hubo un problema al enviar el mensaje. Intenta nuevamente.");
            });
    });
    
    
})