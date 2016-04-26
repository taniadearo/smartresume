angular.module('myApp', []).controller('mainController', function($scope) {

    var eng = function() {

        /* INTRO */

        $scope.intro = "Hello";
        $scope.intro1 = "my name is";
        $scope.name = "Tania Dearo Ploennes";
        $scope.intro2 = "I am glad to meet you!";

        /* TITLES */

        $scope.titAboutme = "About me";
        $scope.titWorks = "Some Works";
        $scope.titEducation= "Education";
        $scope.titExperience = "Experience";
        $scope.titContact = "Contact";
        $scope.titTskills = "Technical Skills";
        $scope.titSskills = "Soft Skills";
        $scope.titLanguages = "Languages";
        $scope.titHobbies = "Hobbies";

        /* ABOUT ME */
        $scope.aboutme = "Let's do amazing thing on web together. If you need a professional to do some HTML, CSS, Javascript and Wordpress, let's talk. Nowadays I am living in Valencia, Spain, but with internet we can do business all around de world.";

        /* WORKS */
        $scope.works = "Get to know some of my works";
        $scope.wlink = "here";

        /* EDUCATION */
        $scope.education = [
            {
                year: "2015",
                tit: "CSPO",
                desc: "Certified Scrum Product Owner by Scrum Alliance."
            },
            {
                year: "2013",
                tit: "FETAC Level 5 Business Studies",
                desc: "Attended a business administration course in Ireland, in order to improve my communication in english."
            },
            {
                year: "2012",
                tit: "PMP Certified",
                desc: "Project Management Professional certified by Project Management Institute, PMI."
            },
            {
                year: "2006",
                tit: "Bachelor in Social Communication",
                desc: "In 2006 I graded at Casper Líbero College, in São Paulo, Brazil."
            }

        ];

        /* EXPERIENCE */
        $scope.experience = [
            {
                place: "Magazine Luiza",
                date: "mar/2015 - mar/2016",
                tit: "ICT Project Manager",
                desc: "I managed IT projects for one of the greatest Brazilian retail chain, Magazine Luiza. They were going through changes in the culture and digital disruption accross the departments and needed a professional that was able to link the business and technology, promoting the integration. Worked in the developement of API within the cloud computing concepts."
            },
            {
                place: "Neobizz",
                date: "jan/2015 - util now",
                tit: "Owner | Frontend Developer",
                desc: "After spending one year in Europe and back in Brazil, I started Neobizz, a digital consulting company for small and medium business. At Neobizz, aside the management activities, I worked also as frontend and wordpress developer."
            },
            {
                place: "Freelancer",
                date: "jan/2013 - dec/2014",
                tit: "Frontend Developer",
                desc: "Decided to travel and know Europe, I moved to Ireland were I took remote jobs as frontend developer, from Brazil and Ireland."
            },
            {
                place: "Fcamara Consulting & Training",
                date: "may/2011 - dec/2012",
                tit: "Project Manager | Business Analyst",
                desc: "Managed an innovative project for a great Brazillian communication company, leading projects through agile methodologies."
            },
            {
                place: "Astéria Sites & Sistemas",
                date: "feb/2008 - apr/2011",
                tit: "Frontend developer | Business Analyst",
                desc: "Did the frontend developement of systems developed for web, in .NET C#, mainly. Also worked as business analyst."
            },
            {
                place: "Freelancer",
                date: "jun/2007 - jan/2008",
                tit: "Frontend Developer",
                desc: "After working with communications for a while, I decided to migrate to technology field. It is when I started studying and working with HTML, CSS and jQuery developement. "
            }

        ];

        /* TECHNICAL SKILLS */
        $scope.tskills = [
            {desc: "HTML", per: "0.90"},
            {desc: "CSS", per: "0.80"},
            {desc: "Wordpress", per: "0.70"},
            {desc: "jQuery", per: "0.40"},
            {desc: "Angulr.js", per: "0.40"},
            {desc: "PHP", per: "0.20"}
        ];

        /* SOFT SKILLS */
        $scope.sskills = [
            {desc: "Communication", per: "0.90"},
            {desc: "Management", per: "0.80"},
            {desc: "Scrum", per: "0.70"},
            {desc: "Self motivated", per: "0.60"},
            {desc: "Sales", per: "0.30"}
        ];

        /* LANGUAGES */
        $scope.languages = [
            {lang: "Portuguese", per: "100%;"},
            {lang: "English", per: "80%;"},
            {lang: "Spanish", per: "50%;"},
            {lang: "French", per: "30%"},
            {lang: "German", per: "10%"}
        ];

        /* HOBBIES */
        $scope.hobbies = [
            "run",
            "read",
            "travel",
            "technology",
        ];
        
    };    
    
    var port = function() {
        console.log('portugues');
        /* INTRO */

        $scope.intro = "Olá";
        $scope.intro1 = "menu nome é";
        $scope.name = "Tania Dearo Ploennes";
        $scope.intro2 = "É um prazer te conhecer!";

        /* TITLES */

        $scope.titAboutme = "Sobre mim";
        $scope.titWorks = "Alguns trabalhos";
        $scope.titEducation = "Educação";
        $scope.titExperience = "Experiência";
        $scope.titContact = "Contato";
        $scope.titTskills = "Technical Skills";
        $scope.titSskills = "Soft Skills";
        $scope.titLanguages = "Idiomas";
        $scope.titHobbies = "Hobbies";

        /* ABOUT ME */
        $scope.aboutme = "Vamos fazer juntos coisas fantásticas na web. Se você precisa de um profissional que conheça HTML, CSS, Javascript e Wordpress, vamos conversar. Atualmente estou morando em Valência, Espanha, mas com a internet podemos fazer negócios em qualquer lugar do mundo.";
        
        /* WORKS */
        $scope.works = "Conheça alguns dos trabalhos que realizei";
        $scope.wlink = "aqui";


        /* EDUCATION */
        $scope.education = [
            {
                year: "2015",
                tit: "CSPO",
                desc: "Certified Scrum Product Owner pela Scrum Alliance."
            },
            {
                year: "2013",
                tit: "FETAC Level 5 Business Studies",
                desc: "Cursei administração de negócios na Irlanda, com o principal objetivo de aperfeiçoar o inglês."
            },
            {
                year: "2012",
                tit: "Certificação PMP",
                desc: "Certificada Project Management Professional pelo PMI."
            },
            {
                year: "2006",
                tit: "Bacharel em Comunicação Social",
                desc: "No ano de 2006 me graduei na faculdade Cásper Líbero, em São Paulo, Brasil."
            }

        ];

        /* EXPERIENCE */
        $scope.experience = [
            {
                place: "Magazine Luiza",
                date: "mar/2015 - mar/2016",
                tit: "Gerente de Projeto de TI",
                desc: "Gerenciei projetos de TI em uma das maiores redes de varejo do Brasil em um momento de transição de cultura e disrupção digital. A empresa precisava de um profissional com habilidade para transitar entre o mundo dos negócios e tecnologia e promover a integração. Trabalhei na construção de APIs voltadas para as núvens."
            },
            {
                place: "Neobizz",
                date: "jan/2015 - agora",
                tit: "Proprietária | Frontend Developer",
                desc: "De volta ao Brasil, abri a Neobizz, empresa de consultoria de tecnologia para pequenas e médias empresas. Atuei também como desenvolvedora frontend e programadora wordpress."
            },
            {
                place: "Freelancer",
                date: "jan/2013 - dez/2014",
                tit: "Desenvolvedora Frontend",
                desc: "Decidida a viajar e conhecer a Europa, viajei para Irlanda onde trabalhei como desenvolvedora frontend freelancer, pegando projetos no Brasil e Irlanda."
            },
            {
                place: "Fcamara Consulting & Training",
                date: "mai/2011 - dez/2012",
                tit: "Gerente de Projetos | Analista de Negócios",
                desc: "Gerenciei um projeto inovador para um grande veiculo brasileiro de comunicação, trabalhando com metodologias ágeis."
            },
            {
                place: "Astéria Sites & Sistemas",
                date: "fev/2008 - abr/2011",
                tit: "Programadora Frontend | Analista de Negócios",
                desc: "Executei a análise e desenvolvimento frontend de aplicações para web, desenvolvidas em .NET C#, principalmente."
            },
            {
                place: "Freelancer",
                date: "jun/2007 - jan/2008",
                tit: "Programadora Frontend",
                desc: "Depois de trabalhar algum tempo com comunicação, decidi entrar para a área de tecnologia. Aqui dei meus primeiro passos na apredizagem de HTML, CSS e jQuery."
            }

        ];

        /* TECHNICAL SKILLS */
        $scope.tskills = [
            {desc: "HTML", per: "0.90"},
            {desc: "CSS", per: "0.80"},
            {desc: "Wordpress", per: "0.70"},
            {desc: "jQuery", per: "0.40"},
            {desc: "Angulr.js", per: "0.40"},
            {desc: "PHP", per: "0.20"}
        ];

        /* SOFT SKILLS */
        $scope.sskills = [
            {desc: "Comunicação", per: "0.90"},
            {desc: "Gerenciamento", per: "0.80"},
            {desc: "Scrum", per: "0.70"},
            {desc: "Auto motivação", per: "0.60"},
            {desc: "Vendas", per: "0.30"}
        ];

        /* LANGUAGES */
        $scope.languages = [
            {lang: "Português", per: "100%;"},
            {lang: "Inglês", per: "80%;"},
            {lang: "Espanhol", per: "50%;"},
            {lang: "Francês", per: "30%"},
            {lang: "Alemão", per: "10%"}
        ];

        /* HOBBIES */
        $scope.hobbies = [
            "correr",
            "ler",
            "viajar",
            "tecnologia",
        ];
    
    };
    
    var esp = function() {
        /* INTRO */

        $scope.intro = "Hola";
        $scope.intro1 = "mi nombre es";
        $scope.name = "Tania Dearo Ploennes";
        $scope.intro2 = "Mucho gusto conocerte!";

        /* TITLES */

        $scope.titAboutme = "Sobre mi";
        $scope.titWorks = "Trabajos";
        $scope.titEducation = "Educación";
        $scope.titExperience = "Experiencia";
        $scope.titContact = "Contacto";
        $scope.titTskills = "Habilidades Tecnicas";
        $scope.titSskills = "Soft Skills";
        $scope.titLanguages = "Idiomas";
        $scope.titHobbies = "Hobbies";

        /* ABOUT ME */
        $scope.aboutme = "Vamos hacer juntos cosas magnificas en la web. Se usted precisa de un profesional para hacer algun HTML, CSS, Javascript y Wordpress, hablemos. Hoy estoy viviendo en Valencia, España, pero con la internet podemos hacer negocios por todo el mundo.";

        /* WORKS */
        $scope.works = "Conozca algunos de los trabajos que hice";
        $scope.wlink = "aqui";

        /* EDUCATION */
        $scope.education = [
            {
                year: "2015",
                tit: "CSPO;",
                desc: "Certified Scrum Product Owner por Scrum Alliance."
            },
            {
                year: "2013",
                tit: "FETAC Level 5 Business Studies",
                desc: "Assisti el curso de administracion de negocios en Irlanda, con el principal objectivo de mejorar los conocimentos de inglés."
            },
            {
                year: "2012",
                tit: "Certificación PMP",
                desc: "Certificación Project Management Professional por PMI."
            },
            {
                year: "2006",
                tit: "Grado en Comunicación",
                desc: "En año de 2006 obtive el grado de Comunicación por la facultad Cásper Líbero, en São Paulo, Brasil."
            }

        ];

        /* EXPERIENCE */
        $scope.experience = [
            {
                place: "Magazine Luiza",
                date: "marzo/2015 - marzo/2016",
                tit: "Gerente de Proyecto de TI",
                desc: "He gestionado proyectos de TI en una de las mayores cadenas de tiendas de Brasil en un momento de transición de cultura y innovación digital. La compañía necesitaba un profesional con la capacidad de moverse entre el mundo de los negocios y la tecnología y promover la integración. Trabajé en la construcción de API desarolladas sobre la concepcion de nubes."
            },
            {
                place: "Neobizz",
                date: "enero/2015 - ahora",
                tit: "Proprietaria | Desarollador Frontend",
                desc: "De vuelta en Brasil, abrió la Neobizz, una consultora de tecnología para las pequeñas y medianas empresas. También trabajé como desarrollador frontend y programador wordpress."
            },
            {
                place: "Freelancer",
                date: "enero/2013 - diciembre/2014",
                tit: "Desarolladora Frontend",
                desc: "Decidida viajar y conocer a Europa, me mudé a Irlanda, donde trabajé como desarrollador frontend freelancer, trabajando en proyectos de Brasil y Irlanda."
            },
            {
                place: "Fcamara Consulting & Training",
                date: "mayo/2011 - diciembre/2012",
                tit: "Gerente de Proyectos | Analista de Negocio",
                desc: "Trabaje como gerente de un proyecto innovador para un gran vehículo de comunicación de Brasil, trabajando con metodologías ágiles."
            },
            {
                place: "Astéria Sites & Sistemas",
                date: "febrero/2008 - abril/2011",
                tit: "Desarolladora Frontend | Analista de Negocios",
                desc: "Analisis y desarrollo frontend de sistemas para web, desarrollados en .NET C#, principalmente."
            },
            {
                place: "Freelancer",
                date: "junio/2007 - enero/2008",
                tit: "Desarolladora Frontend",
                desc: "Después de trabajar un tiempo con comunicación, decidí comenzar a trabajar con tecnologia. Aqui fué cuando empiecé mi aprendizaje de HTML, CSS y jQuery."
            }

        ];

        /* TECHNICAL SKILLS */
        $scope.tskills = [
            {desc: "HTML", per: "0.90"},
            {desc: "CSS", per: "0.80"},
            {desc: "Wordpress", per: "0.70"},
            {desc: "jQuery", per: "0.40"},
            {desc: "Angulr.js", per: "0.40"},
            {desc: "PHP", per: "0.20"}
        ];

        /* SOFT SKILLS */
        $scope.sskills = [
            {desc: "Comunicación", per: "0.90"},
            {desc: "Administración", per: "0.80"},
            {desc: "Scrum", per: "0.70"},
            {desc: "Auto-motivación", per: "0.60"},
            {desc: "Ventas", per: "0.30"}
        ];

        /* LANGUAGES */
        $scope.languages = [
            {lang: "Portugues", per: "100%;"},
            {lang: "Inglés", per: "80%;"},
            {lang: "Español", per: "50%;"},
            {lang: "Francés", per: "30%"},
            {lang: "Alemán", per: "10%"}
        ];

        /* HOBBIES */
        $scope.hobbies = [
            "correr",
            "leer",
            "viajar",
            "tecnología",
        ];
    
    };
    
    eng();
    
    $scope.portuguese = function(){
        port();
        setTimeout(function(){
            callback();
        }, 100);
    };
    $scope.english = function(){
        eng();
        setTimeout(function(){
            callback();
        }, 100);
    };
    $scope.spanish = function(){
        esp();
        setTimeout(function(){
            callback();
        }, 100);
    };
    
    
    
});