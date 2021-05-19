import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Tung Huynh | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio page', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hello, I'm`,
  name: 'Tung Huynh',
  subtitle: `A Software Developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I am a Software Developer and constantly gathering new knowledge to be at least 1% better everyday (so I'll be at least 365% better every year). As a resourceful and open-minded person who striving for continuous personal development, I am willing to take on any kinds of challenge because they are the tools to develop my career.`,
  paragraphTwo: `My toolbox contains HTML, CSS, Javascript (React, React Native, Node,...), Flutter, Java, SQL, Bootstrap, MaterialUI, Git, and Terminal. I can communicate well in English and Vietnamese. I'm also working on my Finnish at the moment.`,
  paragraphThree: `Beside my professional info, I'm also a badminton player, I love watching movies, enjoying good food, and travelling so there are plenty to talk about.`,
  resume:
    'https://www.canva.com/design/DADroGJ5gk8/MdVuO0ms9IZwy2DHCmf0hQ/view?utm_content=DADroGJ5gk8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project_memoa.png',
    title: 'Memoa Flashcard Mobile Application',
    info: `A flashcard application utilizing spaced repetition technique for learning purpose.`,
    info2: `This is my bachelor thesis project in which I use Flutter and Firebase to develop a cross-platform application. The mobile version is uploaded to Google Play Store and the web version is being worked on at the moment - It's best to view the web app in mobile view.`,
    url: 'https://memoa-app.web.app/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project1.jpg',
    title: 'Helsinki Restaurants',
    info: `A React website to view restaurants in Helsinki area in a grid layout. The design follows MaterialUI. Each card gives information about the restaurant and a map at the bottom to view the restaurants' location.`,
    info2: `This is my personal project to practice my skills so I'll keep throwing random things to the website to try out technologies, frameworks, etc.`,
    url: 'https://helsinki-restaurants.herokuapp.com',
    repo: 'https://github.com/htqtung/helsinki-restaurants', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project2.jpg',
    title: 'Integrify Formly',
    info:
      'A survey management web application that let user create surveys questions, design the UI and collect responses as well as general statistical data.',
    info2:
      'The application was built with React, Node, MongoDB; tools and libraries such as Passport, Mongoose, CircleCI. This is an internal web application for Integrify.',
    url: 'https://formly-admin.netlify.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project4.jpg',
    title: 'Movie Finder',
    info: 'A web application to help you find movies with keyword. Data are fetched from OMDb API.',
    info2: 'A React application that utilize React Hooks.',
    url: 'https://htqtung.github.io/movie-finder/',
    repo: 'https://github.com/htqtung/movie-finder', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project3.jpg',
    title: 'Jan Kitchen Blog Concept',
    info:
      'A school project when I first started with HTML, CSS and JS. This is a concept for a food blogger with many sections for various topics. I built and designed the website from scratch.',
    info2: '',
    url: 'https://htqtung.github.io/jan-kitchen-concept',
    repo: 'https://github.com/htqtung/jan-kitchen-concept', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'htqtung@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/tung-huynh',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/htqtung',
    },
  ],
};
