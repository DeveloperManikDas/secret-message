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
      title: "Today's discussion: ",
      message: "Pick a topic and let's discuss it. I am all ears.",
    });
  } else if (capitalizedName.toLowerCase() === "shristi") {
    res.render("message.ejs", {
      name: capitalizedName,
      title: "Tried calling you on (3-7-24 at around 10:40 and 11:40)",
      message: "Feel free to call me back. I am always here for you. If I don't pick up, you know what to do.",
    });
  } else {
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
