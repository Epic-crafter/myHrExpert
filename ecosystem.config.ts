module.exports = {
    apps: [
      {
        name: "auth-app",
        script: "npm",
        args: "start",
        env: {
          NODE_ENV: "production",
          PORT: 4222, // Define your custom port here
        },
      },
    ],
  };
  