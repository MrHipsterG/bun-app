import figlet from "figlet";

console.log("Hello via Bun!");
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    // log the request
    console.log(req.method, req.url, req.destination);

    // create a header object
    const body = figlet.textSync("Bun!");
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
