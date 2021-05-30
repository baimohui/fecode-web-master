module.exports = {
    apps: [
        {
            name: "test",
            script: "npm run start",
            env: {
                "NODE_ENV": "production",
            },
            env_development: {
                "NODE_ENV": "development"
            }
        },
    ]
};