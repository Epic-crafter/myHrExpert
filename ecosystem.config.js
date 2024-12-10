module.exports = {
    apps: [
      {
        name: "auth-app",
        script: "npm",
        args: "start",
        interpreter: "ts-node", // Use ts-node to run the TypeScript file
        env: {
          NODE_ENV: "production",
          PORT: 4222,
        },
      },
    ],
  };
  