//this is a simulation of an API call to get the profil data, in a real application this would be replaced with an actual API call to the backend

//simulated profil data

const profile = {
  id: 1,
  user_id: 1,
  pseudo: "@kmercier",
  profile_picture: "/front-end/assets/pictures/profil1.jpg",
  profession: "Web Developer",
  job_title: "Développeur Full Stack",
  about: `
    <p>
      Hello, moi c'est <strong>Kévin Mercier</strong>, développeur full stack avec 
      <strong>5 ans d'expérience</strong>.
      Je crée des <strong>applications web sur mesure</strong> 
      qui répondent vraiment à vos besoins.
    </p>
    <ul>
      <li>Spécialisé en <em>React, Django et Node.js</em></li>
      <li>Plus de 50 projets livrés avec succès</li>
      <li>Communication claire et délais respectés</li>
    </ul>
    <p>
      Mon objectif : transformer vos idées en 
      <strong>solutions digitales performantes</strong>.
    </p>
  `,
  experience_years: 5,
  since: "2019",
  rating: 4.5,
  reviews_count: 100,
  projects_completed: 50,
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Django", "PostgreSQL"]
};


const profiles = [
  {
    id: 1,
    user_id: 1,
    pseudo: "@johndoe",
    profile_picture: "/front-end/assets/pictures/profil1.jpg",
    profession: "Web Developer",
    job_title: "Développeur Full Stack",
    about: `
      <p>
        Hello, I'm <strong>John Doe</strong>, a passionate web developer with 
        <strong>5 years of experience</strong>.
      </p>
      <p>
        I love creating <strong>beautiful and functional websites</strong> 
        that deliver real value to users.
      </p>
      <ul>
        <li>Spécialisé en <em>React, Django et Node.js</em></li>
        <li>Plus de 50 projets livrés avec succès</li>
        <li>Communication claire et délais respectés</li>
      </ul>
      <p>
        Mon objectif : transformer vos idées en 
        <strong>solutions digitales performantes</strong>.
      </p>
    `,
    experience_years: 5,
    since: "2018",
    rating: 4.5,
    reviews_count: 100,
    projects_completed: 50,
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Django", "PostgreSQL"]
  },
  {
    id: 2,
    user_id: 2,
    pseudo: "@marieL",
    profile_picture: "/front-end/assets/pictures/anonyme.svg",
    profession: "Graphiste",
    job_title: "Designer Graphique & Illustratrice",
    about: `
      <p>
        Je suis <strong>Marie Laurent</strong>, graphiste passionnée avec 
        <strong>6 ans d'expérience</strong> en design print et digital.
      </p>
      <p>
        Je crée des <strong>identités visuelles uniques</strong> 
        qui racontent votre histoire.
      </p>
      <ul>
        <li>Spécialisée en <em>branding et illustration</em></li>
        <li>Plus de 80 marques accompagnées</li>
        <li>Respect scrupuleux des délais</li>
      </ul>
      <p>
        Votre marque mérite un design <strong>qui vous ressemble vraiment</strong>.
      </p>
    `,
    experience_years: 6,
    since: "2019",
    rating: 4.9,
    reviews_count: 234,
    projects_completed: 80,
    skills: ["Photoshop", "Illustrator", "Figma", "InDesign", "Procreate", "After Effects"]
  },
  {
    id: 3,
    user_id: 3,
    pseudo: "@pierreT",
    profile_picture: "/front-end/assets/pictures/anonyme.svg",
    profession: "Data Analyst",
    job_title: "Data Analyst & Consultant BI",
    about: `
      <p>
        Je suis <strong>Pierre Touré</strong>, data analyst avec 
        <strong>4 ans d'expérience</strong> en analyse de données.
      </p>
      <p>
        Je transforme vos <strong>données brutes en insights</strong> 
        actionnables pour votre business.
      </p>
      <ul>
        <li>Expert en <em>Python, SQL et Power BI</em></li>
        <li>Plus de 30 entreprises accompagnées</li>
        <li>Rapports clairs et automatisés</li>
      </ul>
      <p>
        La data n'a de valeur que si elle <strong>guide vos décisions</strong>.
      </p>
    `,
    experience_years: 4,
    since: "2020",
    rating: 4.7,
    reviews_count: 67,
    projects_completed: 30,
    skills: ["Python", "SQL", "Power BI", "Excel", "Tableau", "Pandas", "NumPy"]
  },
  {
    id: 4,
    user_id: 4,
    pseudo: "@sophieB",
    profile_picture: "/front-end/assets/pictures/profil1.jpg",
    profession: "UX Designer",
    job_title: "UX/UI Designer Freelance",
    about: `
      <p>
        Je suis <strong>Sophie Bello</strong>, UX designer avec 
        <strong>3 ans d'expérience</strong> en design d'interfaces.
      </p>
      <p>
        Je conçois des <strong>expériences utilisateur intuitives</strong> 
        qui augmentent vos conversions.
      </p>
      <ul>
        <li>Spécialisée en <em>Figma et prototypage</em></li>
        <li>Plus de 20 applications designées</li>
        <li>Tests utilisateurs inclus dans ma démarche</li>
      </ul>
      <p>
        Un bon design est celui <strong>qu'on ne remarque pas</strong>.
      </p>
    `,
    experience_years: 3,
    since: "2020",
    rating: 4.6,
    reviews_count: 42,
    projects_completed: 20,
    skills: ["Figma", "Sketch", "InVision", "Adobe XD", "Miro", "Zeplin"]
  },
  {
    id: 5,
    user_id: 5,
    pseudo: "@thomasR",
    profile_picture: "/front-end/assets/pictures/anonyme.svg",
    profession: "Rédacteur Web",
    job_title: "Rédacteur Web SEO & Copywriter",
    about: `
      <p>
        Je suis <strong>Thomas Romain</strong>, rédacteur web avec 
        <strong>3 ans d'expérience</strong> en création de contenu.
      </p>
      <p>
        J'écris des <strong>textes qui convertissent</strong> 
        et qui plaisent à Google.
      </p>
      <ul>
        <li>Spécialisé en <em>SEO et copywriting</em></li>
        <li>Plus de 500 articles rédigés</li>
        <li>Contenu 100% original garanti</li>
      </ul>
      <p>
        Les mots justes pour <strong>faire grandir votre business</strong>.
      </p>
    `,
    experience_years: 3,
    since: "2021",
    rating: 4.8,
    reviews_count: 156,
    projects_completed: 500,
    skills: ["SEO", "Copywriting", "WordPress", "Google Analytics", "Semrush"]
  }
];




export function getMyProfil() {
    return profile;
}

export function getProfils() {
    return profiles;
}

export function getProfil(id, profils_list) {
  return profils_list.find(profil => profil.id = id);
}
