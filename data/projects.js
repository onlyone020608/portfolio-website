const projectData = {
  grocey: {
    title: "Grocey",
    description: "grocery recommendation system",
    overview: {
      overviewContent:
        "Grocery is an AI-driven recommendation system that uses reinforcement learning to analyze ingredient consumption patterns and predict optimal grocery purchase timing. The model assumes real-time data from Samsung Bespoke refrigerators and was tested using dummy data.",
    },
    myrole: {
      summary:
        "This project was developed independently, covering both frontend and backend architecture, database management, and deployment",
      backend: [
        "- Designed and implemented the RESTful API using Node.js & Express",
        "- Built the database schema and optimized queries in PostgreSQL ",
      ],
      frontend: [
        "- Developed the UI with React & TypeScript",
        "- Integrated state management with Redux ",
      ],
    },
    keyfeatures: [
      {
        title: "AI-driven Grocery Recommendation",
        description:
          "Uses reinforcement learning (DQN) to predict optimal purchase timing",
        img: "/images/grocey/grocey1.png",
      },
      {
        title: "Optimized Inventory Management",
        description:
          "Uses reinforcement learning (DQN) to predict optimal purchase timing",
        img: "/images/grocey/grocey2.png",
      },
      {
        title: "Feature 3",
        description: "Description 3",
        img: "/images/grocey/grocey1.png",
      },
    ],
    techstack: {
      backend: ["spring"],
      frontend: ["react native", "redux tool"],
      devops: ["AWS EC2", "Docker"],
    },
  },
  wiseowl: { title: "Wiseowl", description: "" },
};
export default projectData;
