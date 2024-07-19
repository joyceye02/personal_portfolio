import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Joyce",
    lastName: "Ye",
    initials: "JY", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🏄🏻‍♀️',
            text: 'Fueled by nature energy'
        },
        {
            emoji: '🌎',
            text: 'Based in the US'
        },
        {
            emoji: "🎓",
            text: "UW Alumni"
        },
        {
            emoji: "📧",
            text: "joyceye025@gmail.com"
        }
    ],
    socials: [
        {
            link: "mailto:joyceye025@gmail.com",
            icon: 'fa fa-envelope',
            label: 'email'
        },
        {
            link: "https://www.instagram.com/joyce__ye/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://www.linkedin.com/in/zhuoxinye/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Joyce. I'm passionate about software development, constantly exploring new technologies and crafting innovative solutions. I love to transform abstract ideas into tangible, impactful applications that can change the world!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'MySQL', 'figma'],
            exposedTo: ['nodejs', 'python', 'Angular', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'traveling',
            emoji: '🛩️'
        },
        {
            label: 'hiking',
            emoji: '🏔️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'snowboarding',
            emoji: '🏂'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Petlife",
            summary: "PetLife is a web platform designed to support pet owners by offering a space to post, chat, and access verified posts from veterinarians. It aims to improve pet care knowledge and reduce unnecessary veterinary visits through reliable information and community support. Key features include user-generated posts, direct chat functionality, and future plans for video consultations with vets. The platform prioritizes accurate, vetted content and a mobile-first, user-friendly design to enhance the pet ownership experience.",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/joyceye02/PetLife", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Carnival Cruise",
            summary: "Carnival Cruises app aimed at improving passenger experience. The design focuses on enhancing user verification, profile management, and event scheduling. It also includes streamlined navigation, expanded features for messaging and mapping, and improved accessibility. Offering an intuitive and user-friendly interface for managing their cruise activities.",
            live: "https://www.figma.com/proto/HtRb7TcsLMNdql5O0f1twX/INFO360?node-id=20-2185&scaling=scale-down&page-id=0%3A1&starting-point-node-id=20%3A2185&show-proto-sidebar=1",
            source: "https://www.figma.com/proto/HtRb7TcsLMNdql5O0f1twX/INFO360?node-id=20-2185&scaling=scale-down&page-id=0%3A1&starting-point-node-id=20%3A2185&show-proto-sidebar=1", 
            image: mock2
        },
        {
            title: "Bid&Change",
            summary: "Bid and Change is a web platform designed to enable users to sell and bid for used products, promoting sustainability and community support. The intuitive bidding system allows users to list items for auction, place bids in real-time, and track their activity. The platform is integrated with payment gateways for secure transactions and includes features like user ratings and reviews to ensure a trustworthy marketplace. Additionally, a portion of the proceeds from each transaction is directed towards community initiatives, reinforcing the site's commitment to social responsibility.",
            live: "https://bidandchange.web.app/home",
            source: "https://github.com/info340-au23a/interaction-app-project",
            image: mock3
        },
        {
            title: "Institute of Health Metrics and Evaluation",
            summary: "IHME aimed to enhance data handling efficiency and accuracy. The project involved unifying and streamlining disparate databases into a one cohesive system. Collaboration with cross-functional teams led to the automation of data entry processes, significantly reducing error rates. Additionally, the development of an automated data analysis dashboard improved data input efficiency and accuracy, providing a more reliable and efficient data management solution.",
            live: "https://www.healthdata.org/research-analysis/health-by-location/profiles",
            source: "",
            image: mock4
        },
        
    ]
}