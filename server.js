const app = require("express")();

// Basic Home Route
app.get("/", (req, res) => {
  res.send("<h3>Hello There!</h3>");
});

// Route to recieve SSE
app.get("/results", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  send(res);
});

// Content to send in interval of 1s
const send = (res) => {
  let i = 0;
  setInterval(() => {
    res.write("data: " + `Hello! ${i++}\n\n`);
  }, 1000);
};

app.listen(8080, () => {
  console.log("Server is Running...");
});
