import {
    logo,
    logo3,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    cpp,
    python,
    tensorflow,
    express,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Web3 Enthusiast",
        icon: mobile,
    },
    {
        title: "Content Writer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Lifesight",
        icon: reactjs,
        iconBg: "#E6DEDD",
        date: "JUL 2022 - MAY 2024",
        points: [
            "Responsible for building a responsive initial version of Lifesight UI modules, mainly focused around the \n" +
            " customer engagement and measurement.",
            "Engineered E2E front-end for MMM and Causal Inference for better data driven decision making",
            "Developed a key frontend feature necessary for the product growth and operations team, enabling platform analytics solutions like SessionStack, Heap, Segment to gain insights and reduce error inspection time",
            "Enabled WhatsApp and Email campaign channel for the marketing automation suite",
        ],
    },
    {
        title: "Product Intern",
        company_name: "Lifesight",
        icon: creator,
        iconBg: "#E6DEDD",
        date: "JAN 2022 - JUN 2022",
        points: [
            "Created PRDs, detailed epics and user stories based on product requirements and scope from stakeholders",
            "Actively worked in ideating a robust user management module, integrating advanced authentication and authorization on top of Firebase",
            "Worked closely in benchmarking the messaging orchestration partners, involving Sendgrid and Twilio SMS",
        ],
    },
];

const projects = [
    {
        name: "Generic AVL Project",
        description:
            "A Generic AVL tree implemented using C++ templates providing several methods for interacting with the AVL tree,\n" +
            "including insertion, deletion, searching, and tree traversal. Additionally, a forward iterator is provided to traverse the AVL tree in an inorder fashion",
        tags: [
            {
                name: "C++ Templates",
                color: "blue-text-gradient",
            },
        ],
        source_code_link: "https://github.com/ShubhamK-2907/generic-AVL-Project",
        icon: logo,
        iconBg: "#E6DEDD",
    },
    {
        name: "Dr. Spock’s Maze",
        description:
            "An interactive gambling game, inspired from the show \"The Price Is Right\" where players drop a ball from the top of a\n" +
            "peg-filled board, aiming for slots with different multipliers. Built on top of React.js and Node.js for an engaging, secure experience",
        tags: [
            {
                name: "Typescript",
                color: "pink-text-gradient",
            },
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJS",
                color: "green-text-gradient",
            },
        ],
        source_code_link: "https://github.com/ShubhamK-2907/Dr-Spocks-Maze",
        icon: logo3,
        iconBg: "#E6DEDD",
    },
    {
        name: "My Pathfinder Visualiser",
        description:
            " The Pathfinding Algorithm Visualizer is an interactive tool developed using Svelte/SvelteKit and TypeScript, designed to\n" +
            "demonstrate and analyze pathfinding algorithms such as A*, BFS, DFS, and Dijkstra. This visualizer features an intuitive interface that allows users to customize grid size and obstacles, and includes player functionality for pausing and rewinding the algorithm's execution",
        tags: [
            {
                name: "Typescript",
                color: "blue-text-gradient",
            },
            {
                name: "SvelteJS",
                color: "green-text-gradient",
            },
            {
                name: "Vercel",
                color: "pink-text-gradient",
            },
        ],
        source_code_link: "https://github.com/ShubhamK-2907/MyPathFinder",
        icon: logo,
        iconBg: "#E6DEDD",
    },
    {
        name: "KSketch",
        description:
            "KSketch is an Excalidraw clone built with Vite, React, and TypeScript, featuring a hand-drawn style using Rough.js. It offers\n" +
            "tools for drawing, moving, resizing, and editing text, with pan and zoom functionalities.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Cypress",
                color: "pink-text-gradient",
            },
            {
                name: "RoughJS",
                color: "green-text-gradient",
            },
        ],
        source_code_link: "https://github.com/ShubhamK-2907/Ksketch",
        icon: logo3,
        iconBg: "#E6DEDD",
    },
    {
        name: "Apple Iphone Website Clone",
        description:
            "Built an apple Iphone Website Clone using React, GSAP and ThreeJS for animations and image modelling",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "GSAP",
                color: "green-text-gradient",
            },
            {
                name: "ThreeJS",
                color: "pink-text-gradient",
            },
        ],
        source_code_link: "https://github.com/ShubhamK-2907/apple-clone",
        icon: logo,
        iconBg: "#E6DEDD",
    },
    {
        name: "N-Puzzle Game",
        description:
            "This is a basic implementation of the n-puzzle problem in the form of a game written in vanilla js",
        tags: [
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
        ],
        source_code_link:
            "https://github.com/ShubhamK-2907/n-puzzle-game",
        icon: logo3,
        iconBg: "#E6DEDD",
    },
    {
        name: "Clumsy Bird",
        description:
            "A flappy bird control game built on top of vanilla JS",
        tags: [
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
            {
                name: "Grunt",
                color: "green-text-gradient",
            },
        ],
        source_code_link:
            "https://github.com/ShubhamK-2907/clumsy-bird",
        icon: logo,
        iconBg: "#E6DEDD",
    },
];

export { services, technologies, experiences, projects };
