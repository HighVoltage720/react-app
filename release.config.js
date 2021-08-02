module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/HighVoltage720/react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
