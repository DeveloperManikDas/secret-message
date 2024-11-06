import express from "express";
import bodyParser from "body-parser"; 
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

app.post("/", (req, res) => {
  let capitalizedName = capitalizeFirstLetter(req.body.name).trim();

  if (capitalizedName.toLowerCase() === "azra") {
    res.render("message.ejs", {
      name: capitalizedName,
      title: "Feel free to call me on weekends😊",
      message: "Due to some internal reason, I am not able to call anyone on weekdays.",
    });
  }
  
   else if (capitalizedName.toLowerCase() === "shristi") {
    res.render("message.ejs", {
      name: capitalizedName,
      title: "Happy Chhat Puja, Shristi",
      message: "I thought of using Josh today, and I suddenly noticed that you changed your dp. I don't know whether is it for me or someone else, but I tried calling you, but you didn't answer. That's it",
    });
  }

  else {
    res.render("message.ejs", {
      name: capitalizedName,
      title: "Welcome to my page. ",
      message: "Currently, I don't have any message for you.",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
