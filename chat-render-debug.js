const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const text = `## Skills

*   **Frontend:** JavaScript, TypeScript, React.js, Next.js, Vue.js, Nuxt.js, Angular, Redux, Pinia, Tailwind, Bootstrap, MUI, SCSS, Cypress, Jest.
*   **Backend & Database:** Node.js, Express.js, Python, FastAPI, Java, Spring Boot, PHP, MySQL, Oracle SQL, MongoDB, PostgreSQL, GraphQL, REST.
*   **Developer Tools:** Git, GitHub, Bitbucket, JIRA, VS Code, Postman, Figma.
*   **DevOps & Cloud:** AWS, GCP, Vercel, Docker.`;

const lines = text.split(/\r?\n/);
lines.forEach((rawLine)=>{
  const line = rawLine.trim();
  console.log(JSON.stringify(line), /^[-*]\s+/.test(line));
});
