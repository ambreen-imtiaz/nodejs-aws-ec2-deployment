const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Node.js Application Successfully Deployed on AWS EC2 🚀</h1>
    <p><strong>Hostname:</strong> ${os.hostname()}</p>
    <p><strong>Node.js Version:</strong> ${process.version}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
