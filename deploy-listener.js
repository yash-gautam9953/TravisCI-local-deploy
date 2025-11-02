const express = require("express");
const { exec } = require("child_process");
const app = express();
app.use(express.json());

app.post("/deploy", (req, res) => {
  console.log("🚀 Deploy trigger received from Travis CI");
  
  // Commands to pull latest code and restart app
  exec("cd C:\\Users\\kaila\\travis-local-deploy && git pull && npm install && pm2 restart all", 
    (err, stdout, stderr) => {
      if (err) {
        console.error("❌ Deployment error:", err);
        return;
      }
      console.log("✅ Deployment done:", stdout);
    });
    
  res.send("Deployment started");
});

app.listen(5000, () => console.log("Listening for deploy requests on port 5000"));
