export const projectsData = [
  {
    title: "Play Me!",
    image:
      "https://res.cloudinary.com/dansutton/image/upload/v1647208044/portfolio%20site/Play_me_dxumqz.png",
    info: `After learning about APIs and manipulating the DOM, I decided to create a mobile-focused web app where users 
    could send song requests to a live performer. I utilised a Heroku database, housing a table of requests that would be 
    displayed to the performing artist. The artist can delete individual requests or delete all. I gained an in-depth 
    understanding of manipulating the DOM, as well as furthering my knowledge of creating APIs.
    I aim to rebuild the app in React, and create a login system, utilising authorisation from platforms such as Auth0.`,
    link1: {
      title: "GitHub Link",
      link: "https://github.com/Dan-Sutton/Play-Me",
    },
    link2: { title: "To be deployed", link: "" },
  },
  {
    title: "Campfire",
    image:
      "https://res.cloudinary.com/dansutton/image/upload/v1647208038/portfolio%20site/Campfire_logo_ovcd31.png",
    info: `This was my first experience working on a development project within a team for an extended period of time. Within the week project myself and my team planned, developed and deployed a web app aimed at allowing users to reflect and review their days on the School of Code bootcamp.
      We created the backend with Node.js and deployed it on Heroku using PostgreSQL table storage. This housed the data for a single potential user. The frontend was hosted on Netlify and built in React.
      A great lesson learned was the importance of deploying an MVP early, and continue to iterate upon that. We found that we could easily adapt to challenging situations, and also develop a working app quickly. I also improved my skills in managing expectations, and ensuring a logical and manageable scope.`,
    link1: {
      title: "Dashboard",
      link: "https://campfire-app.netlify.app/dashboard",
    },
    link2: { title: "Form", link: "https://campfire-app.netlify.app/" },
  },
];
