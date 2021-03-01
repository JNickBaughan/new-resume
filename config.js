const config = {
  bio: {
    name: "[ J. Nick Baughan ]",
    photoUrl: "/me.png",
    title: "Front-end developer working with Costar Group",
    blurb: "Well versed in Javascript. Working with React daily."
  },
  sections: {
    skills: {
      linkText: "Skill Set",
      sectionTitle: "Skills",
      skills: {
        deep: [
          {
            skill: "Javascript",
            url:
              "https://github.com/JNickBaughan?tab=repositories&q=&type=&language=javascript"
          },
          "React"
        ],
        broad: [
          {
            skill: "Typescript",
            url:
              "https://github.com/JNickBaughan?tab=repositories&q=&type=&language=typescript"
          },
          {
            skill: "HTML",
            url:
              "https://github.com/JNickBaughan?tab=repositories&q=&type=&language=html"
          },
          "Webpack",
          "Babel",
          "Redux",
          "CSS",
          "GraphQL",
          "Apollo",
          "SQL",
          "GIT",
          "Github",
          "Node JS",
          "Express",
          "Visual Studio Code"
        ],
        hobby: [
          {
            skill: "GoLang",
            url:
              "https://github.com/JNickBaughan?tab=repositories&q=&type=&language=go"
          },
          "Chrome extensions",
          "Web Components",
          {
            skill: "Python",
            url:
              "https://github.com/JNickBaughan?tab=repositories&q=&type=&language=python"
          },
          "AWS",
          "Elastic Beanstalk"
        ],
        awhile: [
          "C#",
          "ASP.NET",
          "ArcGIS",
          "esri",
          "Dojo Toolkit",
          "Java",
          "Selenium",
          "TortoiseSVN",
          "SourceTree",
          "Visual Studio",
          "IIS",
          "ArcGIS Server"
        ]
      }
    },
    experience: {
      linkText: "Experience",
      sectionTitle: "Professional Experience",
      positions: [
        {
          company: "Costar Group",
          title: "Software Developer",
          tenure: "January 2017 to present",
          logo: "/costar.png",
          width: 40,
          height: 16,
          stockUp: "",
          lastClose: "",
          content: [
            `CoStar Group, Inc. supplies data, analytics and marketing services to the Real Estate Industry`,
            `I work as part of a small team working on a internal React application designed to help CoStar's research department manage their day to day interviews and efficiently collect the data that drives the business.`,
            `I have designed and implemented several features using React including a component that allows for batch updating inline editable data and a wizard component that allows researchers to manage a broker's listings when they change companies.`
          ]
        },
        {
          company: "Worldview Solutions",
          title: "Application Developer",
          tenure: "2012 to 2017",
          logo: "/WVS.JPG",
          width: 40,
          height: 16,
          content: [
            `Worldview Solutions is a geospatial information technology consulting firm specializing in the delivery of GIS applications and services. They pride themselves on qualitiy products delivered with an emphasis on customer service`,
            `In my first few years as a team member with Worldview Solutions my primary responsibility was refactoring the company's parcel viewer application to be a more configurable and customizable product. I configured, deployed, and helped maintain 18 of these applications for various municipalities throughout Virginia working closely with the client.`,
            `I worked to design and implement an application for the Virginia Department of Health to manage their water pollution citations. My code allowed users to filter through citations and generate a PDF using their ipads in the field. All data was collected and stored in ESRI's ArcGIS collector application.`,
            `While working with the Virginia Department of Environmental Quality I worked with a team to migrate several of their existing permit modules to a more modern web application. The new system is built with Backbone/Marionette with a restful backend built with ASP.NET's Entity Framework.`
          ]
        },
        {
          company: "Virginia Commonwealth University",
          sub: "Information Systems Department",
          title: "C# / Web Developement Student Tutor",
          tenure: "2012",
          logo: "/VCU.png",
          width: 40,
          height: 16,
          content: [
            `Worked one-on-one with first year students within the Information System track in subjects including HTML, CSS, Javascrip, & C#`
          ]
        },
        {
          company: "FerrisWinder PLLC",
          title: "Bankruptcy Paralegal",
          tenure: "2011",
          logo: "/ferrisWinder.png",
          width: 40,
          height: 16,
          content: [
            `The law office of FerrisWinder PLLC provides legal services in bankruptcy, Real Estate, Warranty/Lemon Law and more.`,
            `As a bankruptcy paralegal for FerrisWinder I handled multiple bankruptcies. This included preparation and filing of petitions, receiving and reviewing all client financial documents, maintaining scheduling of cases, and acting as a point of contact between attorneys and clients.`
          ]
        },
        {
          company: "Beirman, Ward, & Wood",
          title: "Bankruptcy Paralegal | Motion Filer",
          tenure: "2010 - 2011",
          logo: "/bww.JPG",
          width: 40,
          height: 16,
          content: [
            `BWW Law Group, LLC provides legal representation in Maryland, Virginia and District of Columbia to mortgage lenders, mortgage serviceser, banks and other financial institutions.`,
            `As a bankruptcy paralegal/Motion filer with BWW my responsibilities included reviewing financial documentation for cases, preparing and filing Motions for Relief and mailing notification to all proper parties.`
          ]
        }
      ]
    },
    education: {
      linkText: "Education",
      sectionTitle: "Education",
      positions: [
        {
          company: "Virginia Commonwealth University",
          sub: "",
          title: "Graduate Certificate of Geographic Information Systems",
          tenure: "Graduated 2010",
          logo: "/VCU.png",
          width: 40,
          height: 16
        },
        {
          company: "Virginia Commonwealth University",
          sub: "",
          title: "Bachelors of Science in Urban Studies & Geography",
          tenure: "Graduated 2009",
          logo: "/VCU.png",
          width: 40,
          height: 16
        },
        {
          company: "J. Sareant Reynolds Community College",
          sub: "",
          title: "Associates of Science in Business Administration",
          tenure: "Graduated 2006",
          logo: "/jsrcc.PNG",
          width: 40,
          height: 16
        }
      ]
    },
    portfolio: {
      linkText: "Portfolio",
      sectionTitle: "Portfolio",
      projects: [
        {
          name: "Heart Health Tracker",
          link: "http://heart-health-tracker.JNickBaughan.com",
          linkText: "App to track heart health vital statistics",
          gitLink: "https://github.com/JNickBaughan/heart-health-tracker",
          gitText: "Github repository",
          description:
            "A small node/react/graphQL app built to learn AWS appSync and Amplify along with Formik and yup validation"
        },
        {
          name: "Animated Input",
          link: "https://codepen.io/JNickBaughan/pen/yKyZQd",
          linkText: "Code Pen",
          description: "CSS Animated Input using React"
        },
        {
          name: "WIP: Todo List",
          link: "http://todo.jnickbaughan.com",
          linkText: "React Todo List App",
          gitText: "Github repository",
          gitLink: "https://github.com/JNickBaughan/react-todo",
          description:
            "A react app with a CI/CD pipeline using cypress e2e tests, docker, TravisCI, and AWS Elastic Beanstalk"
        }
      ]
    }
  }
};

export default config;
