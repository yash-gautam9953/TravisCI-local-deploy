# Travis Local Deploy Listener — Quick

Purpose: small Express listener. POST /deploy logs a message and returns OK.

Essentials:

- Install: `npm install`
- Run: `node deploy-listener.js` (starts on port 4000)
- Test: `curl -X POST http://localhost:4000/deploy` → server logs "Deploy trigger received" and responds `OK`

Travis note: replace `<ngrok_url>` in `.travis.yml` with your public tunnel URL and keep the tunnel running when Travis calls it.

That's it — short and ready. Want me to also add `npm start` to `package.json`? (I can do that.)
