// script.js
const projects = [
  { title: 'AI Chatbot', description: 'A Python chatbot powered by AI algorithms.', link: '#' },
  { title: 'Data Analysis Tool', description: 'Python script for analyzing CSV files.', link: '#' }
];
const container = document.getElementById('project-list');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p><a href="${p.link}" target="_blank">View Project</a>`;
  container.appendChild(card);
});
