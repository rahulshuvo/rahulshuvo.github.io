function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDetailsView() {
  var moreText = document.getElementById("more_details");
  var seeMOreBtn = document.getElementById("seeMore");
  var seeLessBtn = document.getElementById("seeLess");

  if (moreText.style.display === "inline") {
    seeMOreBtn.style.display = "inline";
    seeLessBtn.style.display = "none"
    moreText.style.display = "none";
  } else {
    seeMOreBtn.style.display = "none";
    seeLessBtn.style.display = "inline"
    moreText.style.display = "inline";
  }
}


const skillsData ={
  "Column_1": {
    "Expertise": [
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Python"
    ],
    "Language_Skills": {
      "English": "C1",
      "Deutsche": "A2"
    }
  },
  "Column_2": {
    "Tools_and_Others": [
      "MongoDB",
      "MySQL",
      "Postman",
      "Git",
      "Firebase",
      "Data Structures",
      "Docker",
      "JIRA"
    ]
  },
  "Column_3": {
    "Framework_and_libraries": [
      "React.js",
      "Next.js",
      "Electron.js",
      "Redux",
      "Express.js",
      "Tailwind CSS",
      "Material UI",
      "Jest"
    ]
  }
}

function displaySkills() {
  const skillsContainer = document.getElementById('skills');
  skillsContainer.className = 'skills-grid';

  // First Column with Three Rows
  const column1 = document.createElement('div');
  column1.className = 'skill-column';

  Object.keys(skillsData.Column_1).forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-card';

    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category.replace(/_/g, ' ');
    categoryDiv.appendChild(categoryTitle);

    const skillList = document.createElement('ul');
    skillList.className = 'skill-list';

    if (Array.isArray(skillsData.Column_1[category])) {
      skillsData.Column_1[category].forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.textContent = skill;
        skillList.appendChild(skillItem);
      });
    } else {
      for (const skill in skillsData.Column_1[category]) {
        const skillItem = document.createElement('li');
        skillItem.textContent = `${skill}: ${skillsData.Column_1[category][skill]}`;
        skillList.appendChild(skillItem);
      }
    }

    categoryDiv.appendChild(skillList);
    column1.appendChild(categoryDiv);
  });

  skillsContainer.appendChild(column1);

  // Second Column with One Row
  const column2 = document.createElement('div');
  column2.className = 'skill-column';

  const toolsDiv = document.createElement('div');
  toolsDiv.className = 'skill-card';

  const toolsTitle = document.createElement('h2');
  toolsTitle.textContent = 'Tools and Others';
  toolsDiv.appendChild(toolsTitle);

  const toolsList = document.createElement('ul');
  toolsList.className = 'skill-list';

  skillsData.Column_2.Tools_and_Others.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.textContent = skill;
    toolsList.appendChild(skillItem);
  });

  toolsDiv.appendChild(toolsList);
  column2.appendChild(toolsDiv);

  skillsContainer.appendChild(column2);

  // Third Column with One Row
  const column3 = document.createElement('div');
  column3.className = 'skill-column';

  const frameworksDiv = document.createElement('div');
  frameworksDiv.className = 'skill-card';

  const frameworksTitle = document.createElement('h2');
  frameworksTitle.textContent = 'Framework and Libraries';
  frameworksDiv.appendChild(frameworksTitle);

  const frameworksList = document.createElement('ul');
  frameworksList.className = 'skill-list';

  skillsData.Column_3.Framework_and_libraries.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.textContent = skill;
    frameworksList.appendChild(skillItem);
  });

  frameworksDiv.appendChild(frameworksList);
  column3.appendChild(frameworksDiv);

  skillsContainer.appendChild(column3);
}
document.addEventListener('DOMContentLoaded', displaySkills);

const projectsData = {
  projects: [
    {
      title: "MERN Authentication System",
      imageSrc: "./assets/MERN-Authentication-System.png",
      altText: "Project 1",
      githubLink: "https://github.com/rahulshuvo/user-auth",
      liveDemoLink: ""
    },
    {
      title: "Rat Detection Using Raspberry Pi",
      imageSrc: "./assets/Rat-detection.png",
      altText: "Project 2",
      githubLink: "https://github.com/rahulshuvo/rat-detector",
      liveDemoLink: ""
    },
    {
      title: "Real-Time Facial Expression Recognition",
      imageSrc: "./assets/face-recognition.png",
      altText: "Project 3",
      githubLink: "https://github.com/rahulshuvo/real-time-project",
      liveDemoLink: ""
    },
    {
      title: "Personal Portfolio",
      imageSrc: "./assets/personal-Portfolio.png",
      altText: "Project 4",
      githubLink: "https://github.com/rahulshuvo/rahulshuvo.github.io",
      liveDemoLink: "https://rahulshuvo.github.io/"
    }
  ]
};


function displayProjects(projects) {
  const projectsContainer = document.querySelector('.about-containers-project');

  projects.forEach(project => {
    // Create the main container for each project
    const projectDiv = document.createElement('div');
    projectDiv.className = 'details-container project-container';

    // Create the article container for the project image
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article-container';

    // Create the image element
    const img = document.createElement('img');
    img.src = project.imageSrc;
    img.alt = project.altText;
    img.className = 'project-img';
    articleDiv.appendChild(img);

    // Append the article container to the main project div
    projectDiv.appendChild(articleDiv);

    // Create the title for the project
    const title = document.createElement('h2');
    title.className = 'experience-sub-title project-title';
    title.textContent = project.title;
    projectDiv.appendChild(title);

    // Create the button container
    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    // Create the GitHub button
    const githubBtn = document.createElement('button');
    githubBtn.className = 'btn btn-color-2';
    githubBtn.textContent = 'Github';
    githubBtn.onclick = () => location.href = project.githubLink;
    btnContainer.appendChild(githubBtn);

    // Optional: Add the live demo button if it exists
    if (project.liveDemoLink) {
      const liveDemoBtn = document.createElement('button');
      liveDemoBtn.className = 'btn btn-color-1';
      liveDemoBtn.textContent = 'Live Demo';
      liveDemoBtn.onclick = () => location.href = project.liveDemoLink;
      btnContainer.appendChild(liveDemoBtn);
    }

    // Append the button container to the main project div
    projectDiv.appendChild(btnContainer);

    // Finally, append the project div to the projects container in the DOM
    projectsContainer.appendChild(projectDiv);
  });
}

// Call the function to display projects using the data
displayProjects(projectsData.projects);