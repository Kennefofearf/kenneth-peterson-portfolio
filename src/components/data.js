import covidImg from "./covidapp.PNG";
import cpfImg from "./Cpf.PNG";
import ES1Img from "./ES1.png";

// Contains data for use with projects.js

export const projects = [
    {
        title: "COVID-App",
        description: "An app that pulls confirmed COVID-19 cases vs deaths on the country of theuser's choosing.",
        image: covidImg,
        link: "https://covid-app-peach.vercel.app/",
        gitLink: "https://github.com/Kennefofearf/covid-app",
    },
    {
        title: "Caddy's Poo Factory",
        description: "An ecommerce app that sells rabbit manure to farmers or gardners.",
        image: cpfImg,
        gitLink: "https://github.com/Kennefofearf/caddys-poo-factory",
    },
    {
        title: "Eatery Shuffle",
        description: "A restaurant finder app that will randomly choose a nearby for you based on chosen parameters.",
        image: ES1Img,
        gitLink: "https://github.com/Kennefofearf/EateryShuffle",
    }
]