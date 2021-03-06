module.exports = {
    en:{
        landing:{
            title: "Home",
            subtitle: "Fullstack Web Developer",
            description: "Mostly developing in Javascript, I use React with Redux on the front-end and NodeJS with Express for the back-end. I am used to build databases with MySQL or MongoDB.",
            logosAlt : "logos of React NodeJS and Redux",
            seeWork : "SEE MY WORK",
            linkedin : "Find me on :"
        },
        projects:{
            title: "Projects",
            detailBanner: {
                website: "Website"
            },
            project1:{
                title: "Tom's Blog",
                description: "A writer's blog with admin access, article creation/edition and a comment section",
                altPicture: "screenshot of Tom's Blog",
                details: {
                    features: {
                        title: "Features",
                        featureList: [
                            "User and Admin authentication",
                            "Cration/edition/deletion of articles and comments",
                            "Articles search by keyword and date",
                            "Content loading and disconnection management"
                        ]
                    },
                    tech: {
                        title: "Technologies & Techniques",
                        techList: [
                            "Password hashing with Bcrypt",
                            "authentication token generation with JWT and local storage usage",
                            "authentication HOC (Higher Order Component)",
                            "use of Redux library",
                            "Skeleton components and disconnection page"
                        ]
                    }
                },
                links: {
                    github: "https://github.com/Ewoking/Tom-sBlog",
                    website: "https://ewoking.github.io/Tom-sBlog/"
                }
            },
            project2:{
                title: "My Photo Galery",
                description: "My personal photo galery with tile and fullscreen displays, including lazy loading feature",
                altPicture: "screenshot of my Photo Galery",
                details: {
                    features: {
                        title: "Features",
                        featureList: [
                            "Lazy loading",
                            "Fullscreen carousel",
                            "Responsive"
                        ]
                    },
                    tech: {
                        title: "Technologies & Techniques",
                        techList: [
                            "Progressive display of the galery with Intersection Observers"
                        ]
                    }
                },
                links: {
                    github: "https://github.com/Ewoking/Photo-Gallery",
                    website: "https://ewoking.github.io/Photo-Gallery/"
                }
            },
            sideProjects: {
                presentation: "Besides my web projects, I also experimented other formats. I developped a small picture scraping software that I deployed on Windows, as well as a Snake game.",
                snakeCatchPhrase: ["The famous game we all know", "Try it out !"],
                snakeCard:{
                    title: "Snake",
                    snakeAlt: "Screenshot of the snake",
                    details: "Vanilla Javascript with use of classes",
                    links: {
                        github: "https://github.com/Ewoking/Snake",
                        website: "https://ewoking.github.io/Snake/"
                    }
                }
            }
            

        },
        about:{
            title: "About Me",
            titleAlt: "About",
            presentation: ["Graduated from 3WA School as a Fullstack Web Developer, I also have a Bachelor's degree in Mechanics that allowed me to enter the Engineering course at the Ecole Nationale Sup??rieure des Arts et M??tiers (ENSAM).", "Coming from a scientific training, I like to solve problems. Whether it is in algorithmics or ergonomic considerations, I like challenges and i'm always inclined to propose solutions."],
            download: "Download my resume",
            altPicture: "my resume",
        },
        contact:{
            labels: {
                name: "Name",
                email: "Email",
                messageBox: "Subject & Message"
            },
            title: "Contact",
            name: "Enter your name",
            subject: "Subject (optional)",
            email: "Enter your email",
            message: "Your message to me",
            send: "Send",
            validation : {
                nameError: "Please enter your name",
                emailError: "Enter a valid email address",
                messageError: "Please write a message",
                emailSent: "Your email has been sent successfully !",
                emailNotSent: "The email could not be sent - Please try again later"
            }
        }
    },
    fr:{
        landing:{
            title: "Accueil",
            subtitle: "D??veloppeur Web Fullstack",
            description: "D??veloppant principalement en Javascript, j'utilise React avec Redux en front-end et NodeJS avec Express pour le back-end. Je suis habitu?? ?? ??tablir mes bases de donn??es avec MySQL et MongoDB.",
            logosAlt : "logos de React, NodeJS et Redux",
            seeWork : "VOIR MON TRAVAIL",
            linkedin : "Retrouvez-moi sur :"
        },
        projects:{
            title: "Projets",
            detailBanner: {
                website: "Site Web"
            },
            project1:{
                title: "Tom's Blog",
                description: "Un blog d'auteur avec acc??s administrateur, cr??ation/??dition d'articles et une section commentaire",
                altPicture: "capture d'??cran de Tom's Blog",
                details: {
                    features: {
                        title: "Caract??ristiques",
                        featureList: [
                            "Authentifiacation Utilisateur et Administrateur",
                            "Cr??ation/??dition/suppression d'articles et de commentaires",
                            "Recherche d'articles par mot-cl?? et par date",
                            "Gestion du chargement du contenu et des d??connexions"
                        ]
                    },
                    tech: {
                        title: "Technologies & Techniques",
                        techList: [
                            "Hashage des mots de passe avec Bcrypt",
                            "G??n??ration de token d'authentification avec JWT et utilisation du local storage",
                            "HOC d'authentification (Higher Order Component)",
                            "Utilisation de la librairie Redux",
                            "Composants de chargement (skeleton) et page de d??connexion"
                        ]
                    }
                },
                links: {
                    github: "https://github.com/Ewoking/Tom-sBlog",
                    website: "https://ewoking.github.io/Tom-sBlog/"
                }
            },
            project2:{
                title: "Ma galerie Photo",
                description: "Ma galerie photo personnelle avec des affichages en tuiles et plein ??cran, le tout en lazy loading",
                altPicture: "capture d'??cran de ma Galerie Photo",
                details: {
                    features: {
                        title: "Caract??ristiques",
                        featureList: [
                            "Lazy loading",
                            "Carousel en plein ??cran",
                            "Responsive"
                        ]
                    },
                    tech: {
                        title: "Technologies & Techniques",
                        techList: [
                            "Affichage progressif de la galerie gr??ce aux Intersection Observers"
                        ]
                    }
                },
                links: {
                    github: "https://github.com/Ewoking/Photo-Gallery",
                    website: "https://ewoking.github.io/Photo-Gallery/"
                }
            },
            sideProjects: {
                presentation: "En dehors de mes projets web, j'ai aussi pu exp??rimenter d'autres formats. J'ai d??velopp?? un petit logiciel de scraping d'images ue j'ai d??ploy?? sur Windows, ainsi qu'un jeu de Snake.",
                snakeCatchPhrase: ["Le petit jeu bien connu", "Essayez-le !"],
                snakeCard:{
                    title: "Snake",
                    snakeAlt: "capture d'??cran du serpent",
                    details: "Vanilla Javascript avec utilisation de Classes",
                    links: {
                        github: "https://github.com/Ewoking/Snake",
                        website: "https://ewoking.github.io/Snake/"
                    }
                }
            }
            

        },
        about:{
            title: "A Propos",
            titleAlt: "A Propos",
            presentation: ["Dipl??m?? de l'??cole 3WA en tant que D??veloppeur Web Fullstack, J'ai ??galement une licence de M??canique qui m'a permis d'entrer en cursus Ing??nieur ?? l'Ecole Nationale Sup??rieure des Arts et M??tiers (ENSAM).", "Ayant une formation scientifique, j'aime r??soudre des probl??mes. Qu'il s'agisse d'algorithmique ou de consid??rations ergonomiques, j'aime les challenges et je suis toujours ?? l'initiative pour proposer des solutions."],
            download: "T??l??charger mon CV",
            altPicture: "mon CV",
        },
        contact:{
            labels: {
                name: "Nom",
                email: "Email",
                messageBox: "Sujet & Message"
            },
            title: "Contact",
            name: "Entrez votre nom",
            subject: "Sujet (optionel)",
            email: "Entrez votre email",
            message: "Votre message ?? mon intention",
            send: "Envoyer",
            validation : {
                nameError: "Veuillez entrer votre nom",
                emailError: "Veuillez entrer une adresse mail valide",
                messageError: "Veuillez ??crire un message",
                emailSent: "Votre email a bien ??t?? envoy??!",
                emailNotSent: "Votre email n'a pas pu ??tre envoy?? - Veuillez r??essayer ult??rieurement"
            }
        }
    },
}