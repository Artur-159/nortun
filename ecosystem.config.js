module.exports = {
  apps: [
    {
      name: "next-nortun-web",
      script: "npm",
      args: "run start -- -p 3006",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};