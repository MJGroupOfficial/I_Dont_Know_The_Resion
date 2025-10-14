document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Component data
  const cssComponents = Array.from({ length: 22 }, (_, i) => ({
    id: i + 1,
    title: `CSS Component ${i + 1}`,
    image: `./public/images/css/img${i + 1}.jpg`, // Correct relative path
    alt: `CSS component example ${i + 1}`,
    previewLink: `https://mjgroupofficial.github.io/my_projects/CSS%20Components/project${i + 1}/`,
    codeLink: `https://github.com/MJGroupOfficial/my_projects/tree/main/CSS%20Components/project${i + 1}`
  }));

  const jsComponents = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `JS Component ${i + 1}`,
    image: `./public/images/js/img${i + 1}.jpg`, // Correct relative path
    alt: `JavaScript component example ${i + 1}`,
    previewLink: `https://mjgroupofficial.github.io/my_projects/Javascript%20Components/project${i + 1}/`,
    codeLink: `https://github.com/MJGroupOfficial/my_projects/tree/main/Javascript%20Components/project${i + 1}`
  }));

  // Function to create a card element
  function createCard(component) {
    const card = document.createElement('div');
    card.className = 'card-contents';
    card.innerHTML = `
      <div class="image-wraper">
        <img src="${component.image}" alt="${component.alt}" loading="lazy">
      </div>
      <div class="other-wraper">
        <h3 class="project-title">${component.title}</h3>
        <div class="buttons">
          <a href="${component.previewLink}" class="preview" target="_blank">Preview</a>
          <a href="${component.codeLink}" class="code" target="_blank">Code</a>
        </div>
      </div>
    `;
    return card;
  }

  // Function to render components
  function renderComponents(components, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ''; // Clear container
    components.forEach(component => {
      const card = createCard(component);
      container.appendChild(card);
    });
  }

  // Render all components
  renderComponents(cssComponents, 'css-components-container');
  renderComponents(jsComponents, 'js-components-container');

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
