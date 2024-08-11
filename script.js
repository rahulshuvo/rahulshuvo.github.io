function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
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
    "Familiar_with": [
      "C++",
      "Dart"
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
      "LaTeX",
      "NPM",
      "Firebase",
      "Visual Studio Code",
      "Figma",
      "MVC Design Pattern",
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
      "RESTful API",
      "Redux",
      "Express.js",
      "JSON",
      "Tailwind CSS",
      "JWT",
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