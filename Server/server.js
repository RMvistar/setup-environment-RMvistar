import http from "http";

const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Server is running!");
  } else {
    res.statusCode = 404;
    res.end("Route not found");
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
