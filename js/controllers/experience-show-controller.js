angular.module('myApp').controller('mainController', function($scope) {
    
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
    
});