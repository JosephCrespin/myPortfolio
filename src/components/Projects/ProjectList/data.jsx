const data = [
  {
    title: 'Series Finder',
    technologies: ['html5', 'css3', 'sass', 'js', 'gulp', 'bem'],
    description:
      'Personal project that uses TVmaze API to fetch sites. Background animation that generates differently on every refresh was done purely in ES6 Javascript. ',
    image: require('../../../images/projects/seriesfinder.png'),
    site: 'https://lucimart.github.io/SeriesFinder/',
    source: 'https://github.com/lucimart/SeriesFinder',
  },
  {
    title: 'Skin Laser Clinic',
    technologies: ['html5', 'css3', 'sass', 'js', 'bem', 'react', 'node'],
    description:
      'Project for a client that needed a fast, responsive, stylish website. Front in React, Back in Node + Express and other packages. Using RESTful APIs',
    image: require('../../../images/projects/skinlaserclinic.png'),
    site: 'https://skin-laser-clinic.herokuapp.com/',
    source: 'https://github.com/lucimart/SLC',
  },
  {
    title: 'My Portfolio',
    technologies: ['html5', 'css3', 'sass', 'js', 'bem', 'react'],
    description:
      'The site that you are currently visiting 😌. Currently being built. React for the Front and libraries such as Particle.js',
    image: require('../../../images/projects/myPortfolio.png'),
    site: 'https://luci.codes/',
    source: 'https://github.com/lucimart/luci.codes',
  },
  {
    title: 'Exquisite Corpse (WIP)',
    technologies: [
      'html5',
      'css3',
      'sass',
      'js',
      'bem',
      'react',
      'node',
      'postgresql',
      'firebase',
    ],
    description:
      'Personal project that is currently a WIP. Will have auth register, login, RESTful APIs, a site for drawing, all these data stored in a PostgreSQL db, hashed with bcrypt, creating a social online exquisite corpse collaborative drawing site. For more information, please google "exquisite corpse" 👀',
    image: require('../../../images/projects/wip.png'),
    site: 'https://github.com/lucimart/exquisite-corpse',
    source: 'https://github.com/lucimart/exquisite-corpse',
  },
];

export default data;
