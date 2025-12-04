// deploy-listener.js
const express = require('express');
const app = express();

app.use(express.json());

app.post('/deploy', (req, res) => {
  console.log("🚀 Deploy trigger received from Travis CI Application");
  console.log("Starting deployment process...");
  console.log("Deployment process completed successfully!");
  res.send('OK');
});

app.listen(4000, () => console.log('🟢 Listener running on port 4000'));
