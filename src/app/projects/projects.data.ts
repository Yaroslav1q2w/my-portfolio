import { IProjectItem } from "@/types/projectItem.types";
import gameStore from "../../../public/game-store-min.png";
import georgianMenu from "../../../public/georgian-menu-min.png";
import lendVita from "../../../public/lend-vita-min.png";
import onlineShop from "../../../public/online-shop-min.png";
import tarot from "../../../public/tarot-min.png";
import vueUsers from "../../../public/vue-users-min.png";
import angularUsers from "../../../public/angular-users-min.png";
import jadwalin from "../../../public/jadwalin-min.png";
import forkApp from "../../../public/forkApp-min.png";
import theHum from "../../../public/theHum-min.png";
import dashboard from "../../../public/dashboard-min.png";
import mahaon from "../../../public/Mahaon.png";
import chatAi from "../../../public/chatai.png";

export const projects: IProjectItem[] = [
	{
		id: "1",
		imageSrc: gameStore,
		projectName: "Game store",
		url: "https://game-store-s.vercel.app/",
		technologies: [
			"TypeScript",
			"React",
			"Redux Toolkit",
			"React Router",
			"Redux Thunk",
			"Formik",
			"Yup",
			"Styled-Components",
			"react-icons",
			"Node.js",
			"Express.js",
			"MongoDB",
		],
		features: [
			"Unfortunately, due to free hosting, data may take a little longer to download. Thank you for your understanding and patience!",

			"The 'Game store' project is an online store of computer games with full functionality and its own backend and database. It is implemented using modern technologies such as React, Redux, Node.js, Express.js and MongoDB, which ensures its smooth operation and convenient data management.",

			"The main functionalities of the project include:",

			"An authentication and user registration system using JWT and bcrypt tokens has been implemented to ensure data security.",

			"The functionality of filtering products according to various criteria and dividing them into pages has been implemented to facilitate the search and convenience of users.",

			"An integrated system of automated creation of orders with integration into the database, which allows you to quickly and efficiently process orders.",

			"An admin panel has been developed, where the admin can view information about users, products and orders, as well as add new products to the database. All data is absolutely stored on the backend, and when a new product is added, it is automatically entered into the database.",

			"Implemented the ability of users to create personal accounts to conveniently track the status of their orders and view purchase history. The user can log in, place an order and view his orders in his personal account.",
			"The project is fully adapted for different devices and screen sizes, which ensures comfortable use of it on any devices.",

			"The project is successfully implemented and uses technologies such as TypeScript, React, Redux Toolkit, React Router, Redux Thunk, Formik, Yup, SCSS, Styled-Components, Node.js, Express.js and MongoDB.",
		],
	},
  {
    id: "2",
    imageSrc: chatAi, 
    projectName: "ChatAssistant",
    url: "https://github.com/Yaroslav1q2w/ChatAssistantAI", 
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "Context API",
      "AsyncStorage",
      "Tailwind CSS",
      "Expo Fonts",
      "Linear Gradient",
      "TypeScript",
    ],
    features: [
			"'ChatAssistant' is a pet project built on React Native using Expo, which allows you to create interactive chats with animated messages. The project implements the basic chat functionality, and also supports extensions using context and dynamic routing.",
      "Users can create new chats and manage chat history locally using AsyncStorage.",
      "Implemented animated bot responses with a typewriter effect for better interactivity.",
      "Supports functionalities like sending messages, copying, and sharing messages.",
      "Includes navigation tabs for Explore, Tasks, and History to organize app features.",
      "Integrated Context API for managing chats and messages globally across the app.",
      "Custom fonts loaded using Expo Fonts for a polished design.",
      "Splash screen implemented with expo-splash-screen for a seamless app startup experience.",
      "The project is fully responsive and styled with Tailwind CSS and linear gradients for a modern look.",
      "Provides a strong foundation for extending functionalities like API integration or user authentication.",
    ],
  },
  
  {
    id: "3",
    imageSrc: mahaon, 
    projectName: "Telegram Agency",
    url: "https://vermillion-otter-c816b7.netlify.app/", 
    technologies: [
      "React",
      "Redux Toolkit",
      "React Hook Form",
      "React Router",
      "Styled Components",
      "Swiper",
      "TypeScript", 
    ],
    features: [
      "The 'Telegram Agency' project is a web application for gathering client project briefs, designed to streamline the process of collecting requirements and specifications.",
  
      "The project guides users through a multi-step form where they can input details about their project needs, goals, target audience, timeline, and budget.",
  
      "Built with a clean, user-friendly UI, this application utilizes modern technologies such as React, Redux Toolkit, and Styled Components for efficient state management and styling. The main functionalities of the project include: Step-by-step form navigation that lets users progress through required fields to provide detailed project specifications. Client data validation at each step using React Hook Form and custom error handling to ensure accurate information entry. Selection options for services, goals, and target audience with the ability to choose multiple options, enhancing customization of the briefing process.",
  
      "A fully responsive design ensures the application is accessible on various devices and screen sizes, providing a seamless experience on mobile, tablet, and desktop. The project is built to be flexible and scalable, allowing potential integration with back-end services if needed. Utilizes technologies like React, Redux Toolkit, React Hook Form, Framer Motion for smooth animations, and Styled Components for modular, maintainable styling.",
    ],
  },
  {
		id: "4",
		imageSrc: lendVita,
		projectName: "Landing page",
		url: "https://genuine-babka-434b6b.netlify.app/",
		technologies: ["JavaScript", "CSS", "Swiper Slider"],
		features: [
			"The 'Landing page' project is a stylish and effective web page designed to present a product, service or informational material. The page is fully responsive, which means that it is optimized for viewing on any device, including computers, tablets and mobile phones.",

			"Swipers (sliders) are used on the page to display important information or present images in an attractive and aesthetic way. This functionality allows users to quickly view content and get the information they need in a convenient and attractive way.",

			"The presentation of the page is supported by constant updating and adaptation to the needs of users. This allows for comfortable use and interaction even when the screen size or device type changes. All these features help create an attractive and useful experience for web page visitors.",
		],
	},
	{
		id: "5",
		imageSrc: georgianMenu,
		projectName: "Georgian menu",
		url: "https://geogrian-menu-gulp.vercel.app/",
		technologies: [
			"JavaScript",
			"Swiper Slider",
			"Gulp",
			"Sass",
			"BrowserSync",
			"Uglify",
			"Autoprefixer",
			"CleanCSS",
			"Imagemin",
			"File Include",
			"Pretty HTML",
			"SVG Sprite",
		],
		features: [
			"The 'Georgian menu' project is a website that offers lists of Georgian dishes and their recipes. It's built using Gulp and Sass to automate development and organize styles better. For the convenience of users, slider technology is used, which allows you to conveniently scroll through different categories of dishes and recipes",

			"The Gulp server module helps automate development processes such as Sass compilation, image optimization, and merging HTML files. Also used are tools to help reduce page size and improve page performance, such as Uglify and CleanCSS. Thanks to this, the project is fully adapted and has a high loading speed.",

			"The project also uses BrowserSync technology, which ensures fast development and testing by automatically updating pages after changes in the code. In addition, SVG Sprite is used for optimal use of vector images on the page. This approach makes the 'Georgian menu' project an excellent resource for lovers of Georgian cuisine and provides them with a convenient tool for learning and trying new dishes.",
		],
	},
	{
		id: "6",
		imageSrc: onlineShop,
		projectName: "Сlothing store",
		url: "https://online-shop-react-nine.vercel.app/",
		technologies: [
			"React",
			"Redux Toolkit",
			"React Router",
			"Formik",
			"Yup",
			"Material-UI",
			"Styled Components",
			"Sass",
		],
		features: [
			"The Slothing store project is an online clothing store with a convenient and attractive interface, developed using advanced technologies. The page is fully responsive, which allows users to conveniently view products on any device, including mobile phones and tablets.",

			"The project uses modern web development standards such as React and Redux Toolkit to create an efficient and scalable frontend. Also used is React Router for navigation between pages, as well as Formik and Yup for working with forms. Design and styling of components is done using Material -UI and Styled Components, which gives a modern and attractive look to the store.",

			"The core functionality of the store includes the ability to browse products, filter by category, search by keyword, and paginate results. Users can easily search, browse and order products.",
		],
	},
	{
		id: "7",
		imageSrc: dashboard,
		projectName: "Admin Dashboard",
		url: "https://dashboard-nine-azure.vercel.app/",
		technologies: ["HTML", "CSS", "JavaScript", "Gulp", "SVG Sprite"],
		features: [
			"The 'Admin Dashboard' project is a comprehensive and user-friendly dashboard designed for managing customer data and various administrative tasks. The dashboard is fully responsive, ensuring smooth operation across all devices, including desktops, tablets, and smartphones.",

			"Utilizing a clean and modern design, the dashboard includes features such as dynamic content loading, a sidebar navigation with active state indicators, and a customer table with pagination. This setup allows for efficient data management and a seamless user experience.",

			"The project is built with the help of Gulp, a powerful task runner that automates common development tasks like CSS preprocessing, image optimization, and HTML formatting. These features ensure that the code remains clean, optimized, and easy to maintain.",
		],
	},
	{
		id: "8",
		imageSrc: tarot,
		projectName: "Tarot cards",
		url: "https://starlit-starburst-6e6599.netlify.app/",
		technologies: ["HTML", "CSS", "JavaScript"],
		features: [
			"The project 'Tarot cards' is an online resource for conducting and interpreting tarot sessions. The page contains a set of cards and an interface for shuffling and selecting them. All interface elements are created using HTML, CSS and JavaScript, which allows users to access a simple and an effective tool for studying and using tarot cards.",

			"The main page of the project contains a title and a description that tells about the purpose and purpose of the service. The user can click the 'Shuffle' button to shuffle the deck of cards and start the session. The card set includes 20 cards and their images. After each click of the 'Shuffle' button , the cards are randomly shuffled, which ensures variety and interest in each session.",
		],
	},
	// {
	// 	id: "9",
	// 	imageSrc: vueUsers,
	// 	projectName: "User Manager",
	// 	url: "https://jocular-alfajores-57de3d.netlify.app/",
	// 	technologies: [
	// 		"Vue.js",
	// 		"Vuex",
	// 		"Vue Router",
	// 		"Axios",
	// 		"HTML",
	// 		"CSS",
	// 		"JavaScript",
	// 	],
	// 	features: [
	// 		"The 'User Manager' project is a web-based user management application that allows you to effectively manage user data, including adding, editing and deleting records.",

	// 		"The main functionality of the application includes obtaining a list of users by means of a request to an external API, which allows you to ensure that the data is up-to-date. Users can be added to the list through a form.",

	// 		"The application has the ability to search and filter users based on the entered query, which allows you to quickly find the desired user. There is also a functionality for editing user data, which allows you to update information directly through a modal window.",

	// 		"The application interface provides convenient navigation and management using modern technologies such as Vue.js, Vuex for state management, Vue Router for routing and Axios for HTTP requests. The application is implemented using HTML, CSS and JavaScript, which guarantees high performance and ease of use.",
	// 	],
	// },
	{
		id: "10",
		imageSrc: angularUsers,
		projectName: "Angular Users",
		url: "https://users-app-angular-rose.vercel.app/angular-test-pages/",
		technologies: [
			"Angular",
			"RxJS",
			"TypeScript",
			"HTML",
			"SCSS",
			"JavaScript",
		],
		features: [
			"The 'Angular Users' project is a user management web application that allows you to retrieve user data from an API and display it along with the current weather in their location.",

			"The application retrieves a list of users via an external API request, ensuring data is up-to-date. User data includes their first name, last name, email address, location, and other information.",

			"The functionality of the application includes saving user data and the corresponding weather in the local storage of the browser (localStorage) for later viewing. Users can view the saved data and add new users to the list.",

			"The application is implemented using Angular, which allows you to effectively manage the state of the application and ensure reactivity. Using RxJS to handle asynchronous operations and HTTP requests, TypeScript for static typing, HTML and SCSS to create an attractive and convenient user interface.",
		],
	},
	{
		id: "11",
		imageSrc: jadwalin,
		projectName: "Jadwalin",
		url: "https://grand-dolphin-830d8b.netlify.app/",
		technologies: [
			"Gulp",
			"Sass",
			"HTML",
			"JavaScript",
			"CSS",
			"BrowserSync",
			"SVG Sprite",
		],
		features: [
			"The 'Jadwalin' app is built using Gulp, a powerful tool for automating tasks in the development process. Gulp is used to compile Sass to CSS, minify JavaScript, optimize images, create SVG sprites, and update the browser in real-time with BrowserSync.",

			"Using Sass allows you to create structured and supported styles for your application. Automatic prefixing for cross-browser support with Gulp Autoprefixer improves cross-browser style compatibility.",

			"HTML templates are compiled and optimized with Gulp File Include and Gulp Pretty HTML, providing clean and readable HTML. JavaScript code is minified to improve performance.",

			"The project demonstrates the integration of Gulp with various plugins to automate the development workflow, including image processing, sprites, and a local server for live reloading during development.",
		],
	},

	{
		id: "12",
		imageSrc: forkApp,
		projectName: "Fork App",
		url: "https://tranquil-medovik-b374bd.netlify.app/",
		technologies: ["Gulp", "Sass", "HTML", "JavaScript", "CSS", "BrowserSync"],
		features: [
			"The 'Fork App' project - includes several sections such as the main page, page editor, information sections and a pricing page.",

			"Using Gulp in this project helps automate a number of tasks, including compiling Sass to CSS, merging and minifying JavaScript files, optimizing images, and including HTML templates using Gulp File Include.",

			"The styling system is built using Sass, allowing you to write clean and modular CSS code. Gulp Autoprefixer adds the necessary vendor prefixes to ensure cross-browser compatibility.",

			"The project demonstrates how using Gulp and other modern tools can improve the development process and ensure a high level of code optimization and maintainability.",
		],
	},
	{
		id: "13",
		imageSrc: theHum,
		projectName: "The Hum",
		url: "https://yaroslav1q2w.github.io/project-hum/",
		technologies: ["HTML", "CSS", "JavaScript", "Swiper"],
		features: [
			"'The Hum' project is a web application built using HTML, CSS and JavaScript. Key features include tabs, gallery filtering and Swiper Slider integration.",

			"The image gallery includes filtering that allows users to sort images by category. This functionality is achieved using data attributes and JavaScript event handlers.",

			"Upload additional images button adds new elements to the gallery, providing a smooth user experience. When the button is clicked, images are added with a delay that simulates loading from the server.",

			"Swiper Slider is used to create interactive sliders that allow you to view images in the form of a carousel. The slider includes navigation arrows and thumbnails for user convenience.",
		],
	},
];
