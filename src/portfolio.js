/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Darshan Gandhi',
  title: "Hey, I am Darshan Gandhi",
  subTitle: emoji(
    'Currently, I work as a Data Scientist at BookMyShow, working on personalising user experience. I also work as a Researcher at Stanford University-GSB. Also, I am the Founder of JobsQuest, scaled it to 100,000+ users in 6 months.'
  ),
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/darshan-gandhi',
  linkedin: 'https://www.linkedin.com/in/gandhi-darshan/',
  gmail: 'https://scholar.google.com/citations?user=-_aUofwAAAAJ&hl=en',
  medium: 'https://medium.com/@darshan_gandhi',
  twitter : 'https://twitter.com/darshangandhi_',
  googlescholar : 'https://twitter.com/darshangandhi_',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'Data Science & Product Management',
  skills: [
    emoji(
      '⚡ Serving personalised content for users via recommendations'
    ),
    emoji(
      '⚡ Building the MVP and defining the success metrics'
    ),
    emoji('⚡ Working on optimising the hiring system'),
    emoji(
      '⚡ Developing services such as Quiz Portal and Candidate Profiling System'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'Spark',
      fontAwesomeClassname: 'far fa-star',
    },

    {
      skillName: 'Excel',
      fontAwesomeClassname: 'far fa-file-excel',
    },


  ],
  display: true, // Set false to hide this section, defaults to true
};



// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Data Scientist',
      company: 'BookMyShow',
      companylogo: require('./assets/images/bms.png'),
      date: 'Apr 2021 – Ongoing',
      desc:
        'Part of the Recommendations and Personalisation Team',
      descBullets: [
        "Ranking all the widgets on the homescreen according to user's personal interests to increase the CTR",
        'Working on serving venue based recommendations for personalized user experience',
        'Replaced the existing Alteryx workflows, with automated pythonic processes for generating reports for clients',
      ],
    },
    {
      role: 'Founder & CEO',
      company: 'JobsQuest',
      companylogo: require('./assets/images/jobsquest1.jpeg'),
      date: 'Jan 2020 – Ongoing',
      desc:
        'Building JobsQuest to build a bridge between the candidates and recruiters',
      descBullets: [
          'Leading and managing 20+ members across engineering, marketing, content, business partnerships, and research',
          "Designed the MVP, planned the GTM strategy and defined the success metrics by analyzing the job markets using data-driven insights for facilitating business decisions, with an engagement rate of 11.29%",
          'Successfully scaled the product to 25,000+ MAU, partnered with 50+ companies like Angel Broking, InterviewBit (Scaler), Vedantu, Sporjo in a month, built an audience of 100,000+ generating over 45M+ impressions',
          'Building a candidate profiling system and a quiz portal',
        ],
    },
    {
      role: 'Researcher',
      company: 'Stanford University - GSB',
      companylogo: require('./assets/images/stanford-gsb.jpeg'),
      date: 'Mar 2021 – Ongoing',
      desc:
        'Researching on the interesection of Finance and Data',
        descBullets: [
          'Successfully improved data quality by 88%, built algorithms and processes for data scraping, transformation and pattern matching to remove inconsistencies',
          'Used FuzzyWuzzy, Cosine Similarity and GeoPandas for building graphs for understanding about the financial market trends',
        ],
    },

  ],
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Mumbai University',
      logo: require('./assets/images/mumbai-university.jpg'),
      subHeader: 'Bachelor of Technlogy in Computer Science',
      duration: 'July 2016 - Oct 2020',
      desc: 'CGPA 8:87/10',
      descBullets: [
        'Worked on a research project leveraging the use of ML for Crop Recommendations under the guidance of Prof. Deepak Sharma',
        'Lead a team of 40 memebers as the General Secretary to organise Abhiyantriki, Skream, Symphony',
      ],
    },
    {
      schoolName: 'Udacity',
      logo: require('./assets/images/udacity.jpeg'),
      subHeader: 'Data Science Nanodegree',
      duration: 'April 2020 - May 2020',
      // desc:
      //   ,
      descBullets: ['Worked on projects related to Recommendation Engines, Data Engineering, Feature Engineering'],
    },
  ],
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Data Science & Engineering', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Product Management',
      progressPercentage: '85%',
    },
    {
      Stack: 'Business Strategy',
      progressPercentage: '75%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'darshan-gandhi', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Open Source Contributions',
  subtitle: '',
  projects: [
    {
      image: require('./assets/images/hug.jpg'),
      link: 'https://huggingface.co/',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Research and Conferences'),
  subtitle:'',


  achievementsCards: [
    {
      title: 'MIT Vaccine Conference',
      subtitle:
        'Part of the organising committee',
      image: require('./assets/images/mit.png'),
      footerLink: [
        {
          name: 'Visit the website',
          url:
            'https://pandemic.mit.edu/',
        },
      ],
    },
    {
      title: 'PathCheck Foundation',
      subtitle:
        'Led the Tech & Policy Team researching on COVID-19 Testing and Vaccine Methologies | Data Science Researcher',
      image: require('./assets/images/pathcheck.jpeg'),
      footerLink: [
        {
          name: 'Check out the work',
          url:
            'https://scholar.google.com/citations?user=-_aUofwAAAAJ&hl=en',
        },
      ],
    },
    {
      title: 'GISTAM 2021',
      subtitle:
        'Presented my research on a privacy-preserving method for COVID-19 Related Geo-spatial Technologies',
      image: require('./assets/images/gistam.png'),
      footerLink: [
        {
          name: 'Read the paper',
          url:
            'https://www.scitepress.org/PublicationsDetail.aspx?ID=jrvQpspa8JE=&t=1',
        },
      ],
    },
    {
      title: 'ICECA 2020',
      subtitle:
        'Reaserched on Machine learning based Synthetic Data Generation using Iterative Regression Analysis and presented it at 4th ICECA 2020 (IEEE)',
      image: require('./assets/images/ICECA logo.png'),
      footerLink: [
        {
          name: 'Read the paper',
          url:
            'https://ieeexplore.ieee.org/document/9297491',
        },
      ],
    },

    // {
    //   title: 'PWA Web App Developer',
    //   subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
    //   image: require('./assets/images/pwaLogo.webp'),
    //   footerLink: [
    //     { name: 'Certification', url: '' },
    //     {
    //       name: 'Final Project',
    //       url: 'https://pakistan-olx-1.firebaseapp.com/',
    //     },
    //   ],
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    '',

  blogs: [
    {
      url:
        'https://towardsdatascience.com/farmeasy-crop-recommendation-portal-for-farmers-48a8809b421c',
      title: 'FarmEasy: Crop Recommendation for Farmers made easy',
      description:
        'This is a walkthrough for my final year project where I have built a website for Recommending crops to the farmers using Machine Learning',
    },
    {
      url: 'https://medium.com/@darshan_gandhi/exploratory-data-analysis-for-beginners-a29bf2d0c494',
      title: 'Exploratory Data Analysis for Beginners!',
      description:
        'EDA refers to a process by which one can try to carry out in-depth analysis and identify the various patterns, variance and check out whether the assumptions made are true or not.',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Data Science Talk Series',
      subtitle: 'Invited guest speaker at Symbiosis Research Institute',
      // slides_url: 'https://bit.ly/saadpasta-slides',
      
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Connect with Me ✆'),
  subtitle:
    'Please feel free to reach out to me! I would love to chat',
  number: '+917977169898',
  email_address: 'darshangandhi1151@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
