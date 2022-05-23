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
                }
            },
            project2:{
                title: "My Photo Galery",
                description: "My personal photo galery with tile and fullscreen displays, including lazy loading feature",
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
                }
            },
            sideProjects: {
                presentation: "Besides my web projects, I also experimented other formats. I developped a small picture scraping software that I deployed on Windows, as well as a Snake game.",
                snakeCatchPhrase: ["The famous game we all know", "Try it out !"],
                snakeCard:{
                    title: "Snake",
                    snakeAlt: "Screenshot of the snake",
                    details: "Vanilla Javascript with use of classes"
                }
            }
            

        },
        about:{
            title: "About Me",
            titleAlt: "About",
            presentation: ["Graduated from 3WA School as a Fullstack Web Developer, I also have a Bachelor's degree in Mechanics that allowed me to enter the Engineering course at the Ecole Nationale Supérieure des Arts et Métiers (ENSAM).", "Coming from a scientific training, I like to solve problems. Whether it is in algorithmics or ergonomic considerations, I like challenges and i'm always inclined to propose solutions."],
            download: "Download my resume"
        },
        contact:{
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
            title: "Home",
            subtitle: "Développeur Web Fullstack",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        projects:{
            title: "Projects",
            detailBanner: {
                website: "website"
            },
            project1:{
                title: "Tom's Blog",
                description: "A writer's blog with admin access, article creation/edition and a comment section",
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
                        title: "Methods & Technologies",
                        techList: [
                            "Password hashing with Bcrypt",
                            "authentication token generation with JWT and local storage usage",
                            "authentication HOC (Higher Order Component)",
                            "use of Redux library",
                            "Skeleton components and disconnection page"
                        ]
                    }
                }
            },
            project2:{
                title: "My Photo Galery",
                description: "My personal photo galery with tile and fullscreen displays, including lazy loading feature",
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
                        title: "Methods & Technologies",
                        techList: [
                            "Progressive display of the galery with Intersection Observers"
                        ]
                    }
                }
            },
            sideProjects: {
                presentation: "Besides my web projects, I also experimented other formats. I developped a small picture scraping software that I deployed on Windows, as well as a Snake game",
                snakeCatchPhrase: "The famous game we all know\nTry it out !",
                snakeCard:{
                    title: "Snake",
                    details: "Vanilla Javascript with use of classes"
                }
            }
            

        },
        About:{
            title: "About Me",
            presentation: "Graduated from 3WA School as a Fullstack Web Developer, I also have a Bachelor's degree in Mechanics that allowed me to enter the Engineering course at the Ecole Nationale Supérieure des Arts et Métiers (ENSAM).\n\nComing from a scientific training, I like to solve problems. Whether it is in algorithmics or ergonomic considerations, I like challenges and i'm always inclined to propose solutions.",
            download: "Download my resume"
        },
        Contact:{
            title: "Contact",
            email: "Your email",
            message: "Your message"
        }
    }
}