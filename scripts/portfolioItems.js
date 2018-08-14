define({
  portfolioItems: [
    {
      name: "Rising Phoenix Website and CMS",
      imageUrl1: "images/projects/rising-phoenix.jpg",
      imageUrl2: "images/projects/rising-phoenix2.jpg",
      description: "Website and content management system for non-profit fundraising organization.",
      githubUrl: "https://github.com/LauraBrandt/rising-phoenix-website",
      liveUrl: "http://rising-phoenix.herokuapp.com/", 
      tools: ["Responsive Website Design", "React", "React Router", "Inline styles and Radium", "Node.js/Express", "MongoDB/Mongoose", "Custom API for CMS", "Authentication with Auth0", "Image upload with AWS API"]
    },
    {
      name: "Robeson Planetarium Website and CMS",
      imageUrl1: "images/projects/robeson-planetarium.jpg",
      imageUrl2: "images/projects/robeson-planetarium2.jpg",
      description: "Website and content management system for Robeson Planetarium and Science Center.",
      githubUrl: "https://github.com/LauraBrandt/robeson-planetarium-hugo",
      liveUrl: "https://unruffled-lamport-d2ea87.netlify.com/", 
      tools: ["JAMstack", "Hugo static site generator", "Custom theme", "jQuery", "NetlifyCMS backend", "Deployed with Netlify from Github"]
    },
    {
      name: "PollPlace",
      imageUrl1: "images/projects/pollplace.jpg",
      imageUrl2: "images/projects/pollplace2.jpg",
      description: "A voting app where users can add polls, and other users can vote on them.",
      githubUrl: "https://github.com/LauraBrandt/voting-app",
      liveUrl: "http://pollplace.herokuapp.com/",
      tools: ["Node.js/Express", "Custom API", "MongoDB/Mongoose", "Authentication with Passport", "Pug template engine", "CSS3", "Bootstrap", "Responsive design", "Ajax", "Chart.js"]
    },
    {
      name: "Stock Tracker",
      imageUrl1: "images/projects/stock-tracker.jpg",
      imageUrl2: "images/projects/stock-tracker2.jpg",
      description: "Displays a graph of recent trend lines of stocks chosen by users.",
      githubUrl: "https://github.com/laurabrandt/stock-tracker",
      liveUrl: "https://lb-stock-tracker.herokuapp.com/", 
      tools: ["Node.js/Express", "Socket.io", "MongoDB/Mongoose", "React", "Recharts", "CSS3", "Responsive design", "Fetch", "Jest", "Enzyme"]
    },
    {
      name: "Nightlife Coordinator",
      imageUrl1: "images/projects/nightlife-coordinator.jpg",
      imageUrl2: "images/projects/nightlife-coordinator2.jpg",
      description: "An app to view nearby bars and see who's going.",
      githubUrl: "https://github.com/LauraBrandt/nightlife-coordinator",
      liveUrl: "https://lb-nightlife-coordinator.herokuapp.com/",
      tools: ["Node.js/Express", "Custom API", "MongoDB/Mongoose", "Authentication with JWT", "Bcrypt.js to hash passwords", "React", "React Router", "Axios for HTTP requests", "CSS3 and Material UI"]
    },
    {
      name: "URL Shortening API",
      imageUrl1: "images/projects/url-shortener.jpg",
      imageUrl2: "images/projects/url-shortener2.jpg",
      description: "Lets users create a short url which redirects to their original url.",
      githubUrl: "https://github.com/LauraBrandt/url-shortener",
      liveUrl: "https://lb-url-shortener.herokuapp.com/",
      tools: ["Node.js", "Express", "MongoDB/Mongoose", "Input validation with valid-url", "HTML5", "Bootstrap", "CSS"]
    },
    {
      name: "Conway's Game of Life",
      imageUrl1: "images/projects/game-of-life.jpg",
      imageUrl2: "images/projects/game-of-life2.jpg",
      description: "A browser simulator for Conway's Game of Life.",
      githubUrl: "https://github.com/LauraBrandt/game-of-life",
      liveUrl: "https://codepen.io/LauraBrandt/full/aKJjNO/", 
      tools: ["React", "Redux", "JavaScript ES6", "CSS3", "Flexbox", "Sass", "Responsive design", "Testing with Jest and Enzyme"]
    },
    {
      name: "Recipe Box",
      imageUrl1: "images/projects/recipe-box.jpg",
      imageUrl2: "images/projects/recipe-box2.jpg",
      description: "App where users can create and save recipes.",
      githubUrl: "https://github.com/LauraBrandt/recipe-box",
      liveUrl: "https://codepen.io/LauraBrandt/full/aKmPvR/",
      tools: ["React", "Redux", "JavaScript ES6", "local storage", "CSS3", "Flexbox", "Sass", "Responsive design"]
    },
    {
      name: "Markdown Previewer",
      imageUrl1: "images/projects/markdown-previewer.jpg",
      imageUrl2: "images/projects/markdown-previewer2.jpg",
      description: "Users can enter markdown text in the editor, which will be live rendered as HTML in the preview window.",
      githubUrl: "https://github.com/LauraBrandt/markdown-previewer",
      liveUrl: "https://codepen.io/LauraBrandt/full/mqbENJ/",
      tools: ["React", "Marked", "CSS3", "Flexbox", "Sass", "Responsive design"]
    },
    {
      name: "Drum Machine",
      imageUrl1: "images/projects/drum-machine.jpg",
      imageUrl2: "images/projects/drum-machine2.jpg",
      description: "Users can play various percussion sounds through clicking or keyboard input.",
      githubUrl: "https://github.com/LauraBrandt/drum-machine",
      liveUrl: "https://codepen.io/LauraBrandt/full/POvGJo/",
      tools: ["React", "CSS3", "CSS Grid", "Responsive design"]
    },
    // {
    //   name: "Pug Technical Documentation",
    //   imageUrl1: "",
    //   imageUrl2: "",
    //   description: "",
    //   githubUrl: "",
    //   liveUrl: "https://codepen.io/LauraBrandt/full/gGBXqb/",
    //   tools: []
    // },
    // {
    //   name: "Pomodoro Timer",
    //   imageUrl1: "",
    //   imageUrl2: "",
    //   description: "",
    //   githubUrl: "",
    //   liveUrl: "",
    //   tools: []
    // },
    {
      name: "Image Search API",
      imageUrl1: "images/projects/image-search.jpg",
      imageUrl2: "images/projects/image-search2.jpg",
      description: "Users can get the image URLs, alt text, and page urls for a set of images relating to a given search string, as well as view recent searches.",
      githubUrl: "https://github.com/LauraBrandt/image-search",
      liveUrl: "https://nebula-hourglass.glitch.me/",
      tools: ["Node.js", "Express", "Google Search API", "HTML", "Bootstrap"]
    },
    {
      name: "Crochet Crafts Landing Page",
      imageUrl1: "images/projects/crochet-crafts.jpg",
      imageUrl2: "images/projects/crochet-crafts2.jpg",
      description: "Product landing page for crocheted items.",
      githubUrl: "https://github.com/LauraBrandt/crochetcrafts-landing-page",
      liveUrl: "https://codepen.io/LauraBrandt/full/OwobLR/",
      tools: ["HTML5", "CSS3", "Flexbox", "Responsive design", "JavaScript"]
    },
    {
      name: "Simon Game",
      imageUrl1: "images/projects/simon-game.jpg",
      imageUrl2: "images/projects/simon-game2.jpg",
      description: "Browser game based on the electronic memory game Simon.",
      githubUrl: "https://github.com/LauraBrandt/simon_game",
      liveUrl: "https://codepen.io/LauraBrandt/full/grKByB/", 
      tools: ["HTML5", "CSS", "Bootstrap", "Sass", "Responsive design", "jQuery"]
    },
    {
      name: "Timestamp API",
      imageUrl1: "images/projects/timestamp-api.jpg",
      imageUrl2: "images/projects/timestamp-api2.jpg",
      description: "Returns Unix timestamp and natural language format of a date passed as a parameter.",
      githubUrl: "https://github.com/LauraBrandt/timestamp-api",
      liveUrl: "https://timestamp-api.herokuapp.com/",
      tools: ["Node.js", "Express", "Moment", "HTML", "CSS", "Bootstrap"]
    },
    {
      name: "Tic-Tac-Toe",
      imageUrl1: "images/projects/tic-tac-toe.jpg",
      imageUrl2: "images/projects/tic-tac-toe2.jpg",
      description: "Browser-based implementation of the classic game.",
      githubUrl: "https://github.com/LauraBrandt/tic-tac-toe",
      liveUrl: "https://codepen.io/LauraBrandt/full/XdgGNj/", 
      tools: ["HTML", "CSS", "Sass", "Bootstrap", "jQuery", "Minimax Algorithm"]
    },
    {
      name: "File Metadata Microservice API",
      imageUrl1: "images/projects/file-metadata-api.jpg",
      imageUrl2: "images/projects/file-metadata-api2.jpg",
      description: "Lets user upload a file and responds with file size.",
      githubUrl: "https://github.com/LauraBrandt/file-metadata-microservice",
      liveUrl: "https://pool-pike.glitch.me/",
      tools: ["Node.js", "Express", "Multer", "HTML5", "CSS", "Bootstrap"]
    },
    {
      name: "Wikipedia Search",
      imageUrl1: "images/projects/wikipedia.jpg",
      imageUrl2: "images/projects/wikipedia2.jpg",
      description: "Seach Wikipedia entries or get a random article.",
      githubUrl: "https://github.com/LauraBrandt/wikipedia_search",
      liveUrl: "https://codepen.io/LauraBrandt/full/jWdpXV/",
      tools: ["HTML", "CSS3", "Bootstrap", "jQuery", "Ajax"]
    },
    {
      name: "Local Weather",
      imageUrl1: "images/projects/weather.jpg",
      imageUrl2: "images/projects/weather2.jpg",
      description: "View the weather in your current location.",
      githubUrl: "https://github.com/LauraBrandt/weather",
      liveUrl: "https://codepen.io/LauraBrandt/full/QyaJPv/",
      tools: ["HTML5", "Geolocation", "CSS", "Bootstrap", "jQuery", "Ajax"]
    },
    {
      name: "Pomodoro Timer",
      imageUrl1: "images/projects/pomodoro.jpg",
      imageUrl2: "images/projects/pomodoro2.jpg",
      description: "A timer based on the Pomodoro technique, interspersing work intervals with short breaks.",
      githubUrl: "https://github.com/LauraBrandt/pomodoro_timer",
      liveUrl: "https://codepen.io/LauraBrandt/full/ojqZdq",
      tools: ["HTML5", "HTML Canvas", "CSS", "Bootstrap", "jQuery", "Responsive design"]
    },
    {
      name: "Calculator",
      imageUrl1: "images/projects/calculator.jpg",
      imageUrl2: "images/projects/calculator2.jpg",
      description: "A browser-based JavaScript calculator.",
      githubUrl: "https://github.com/LauraBrandt/calculator",
      liveUrl: "https://codepen.io/LauraBrandt/full/LGPEKG/",
      tools: ["HTML", "CSS", "jQuery"]
    },
  ]
});
