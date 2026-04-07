const http = require("http");

http.get("http://localhost:3000/exhibits", (res) => {
  if (res.statusCode === 200) {
    console.log("✅ API works");
    process.exit(0);
  } else {
    console.log("❌ API error");
    process.exit(1);
  }
}).on("error", () => {
  console.log("❌ Cannot connect");
  process.exit(1);
});