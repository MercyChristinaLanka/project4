const http = require("http");

const server = http.createServer((req, res) => {

    // ✅ HEALTH CHECK FOR TRAFFIC MANAGER
    if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("OK");
    }

    // MAIN PAGE
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <h1>Azure PaaS DR Demo</h1>
        <p>App is running successfully 🚀</p>
        <p>Region: ${process.env.REGION || "Not Set"}</p>
        <p>Web App: ${process.env.WEBSITE_SITE_NAME || "Unknown"}</p>
    `);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
