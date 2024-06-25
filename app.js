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
      message: "We will be discussing the importance of the environment.",
    });
  } else if (capitalizedName.toLowerCase() === "shristi") {
    res.render("message.ejs", {
      name: capitalizedName,
      title: "Confused!",
      message: "I want to share my thoughts and feelings with you. The last time I hurt you, it was because I stopped you from appreciating me. I didn’t realize how important it was to you, and I mistakenly thought it would be okay since you usually forgive me. I believed we were both on a journey of self-improvement and that this was just another step along the way. I assumed you would call me later, as you always do.But when I tried to reach out, you did not call back. I started calling you, hoping to hear your voice and make things right, but you didn’t pick up. I tried seven times, and each missed call made me feel even sadder because I knew I had hurt you.I’ve been feeling terrible about this. When I hurt someone, I can’t sleep, and I shared everything with my mom. She helped me realize that stopping someone from appreciating me was wrong. That’s why I wrote the sorry note to you.Despite getting numerous random calls about my display picture on the Josh application, I didn’t remove it because I was feeling sore. People called me at all hours, and I kept telling them I wasn’t in the mood to talk. When I finally saw your DP changed today evening, I felt a huge sense of relief and happiness. Thank you for that.I’m still unsure if you’re still angry with me. Your quote, “creation doesn’t want gemstone to be sorry,” means a lot to me. I want you to know that I am truly sorry and I value our relationship deeply.Can we talk to clear up any misunderstandings and move forward? I don’t want to lose the special bond we share. I hope you can forgive me and we can continue to grow together.",
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
