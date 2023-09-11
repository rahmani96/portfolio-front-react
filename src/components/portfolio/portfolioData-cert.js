import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";

const PortfolioData = [
    {
        id: 1,
        name: "mockup project",
        image: Image1,
        modalDetails: [
        {
            project: "Website",
            client: "Envato",
            language: "HTML, CSS, Javascript",
            preview: "www.envato.com",
            link: "https://www.envato.com/",
        },
        ],
    },
    {
        id: 2,
        name: "youtube project",
        image: Image2,
        modalDetails: [
        {
            project: "video",
            client: "Videohive",
            language: " Adobe After Effects",
            preview: "www.videohive.net",
            link: "https://www.videohive.net",
        },
        ],
    },
    {
        id: 3,
        name: "slider project",
        image: Image3,
        modalDetails: [
        {
            project: "Website",
            client: "Themeforest",
            language: " HTML, CSS, Javascript",
            preview: "www.envato.com",
            link: "https://www.envato.com",
        },
        ],
    },
    {
        id: 4,
        name: "local project",
        image: Image4,
        modalDetails: [
        {
            project: "video",
            client: "Videohive",
            language: " Adobe After Effects",
            preview: "www.videohive.net",
            link: "https://www.videohive.net",
        },
        ],
    },
];

export default PortfolioData;
