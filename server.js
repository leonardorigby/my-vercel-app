const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const app = express();
const PORT = 3000;

// Create LiveReload server
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(__dirname);

// Inject LiveReload script into the browser
app.use(connectLivereload());

// Serve static files
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

// Reload when files change
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
