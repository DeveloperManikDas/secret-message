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
  } else if (capitalizedName.toLowerCase() === "shristi") {
    res.render("message.ejs", {
      name: capitalizedName,
      title: "Feel free to call me on weekends😊",
      message: "Dear Srishti,<br><br>I hope this message finds you well. I wanted to take a moment to share something from the bottom of my heart, as our friendship deserves clarity and honesty.<br><br>Firstly, I want to express how much I value our connection. You have been a wonderful friend and an incredible support on my journey to improve my English. The moments we've shared, the late-night conversations, and the mutual encouragement have meant more to me than words can express.<br><br>Recently, I've had a lot on my plate, and in my attempts to manage everything, I might have acted in ways that seemed confusing or inattentive. When you asked, <strong>So I'm your second priority, right?</strong> it truly hurt me because it made me realize how my actions might have been perceived. Please know that my primary goal on the Josh Talk app is to improve my communication skills and build meaningful connections along the way. Every conversation we have is a cherished opportunity for me, and I deeply appreciate your patience and support.<br><br>Srishti, your friendship is incredibly precious to me. I want you to understand that my interactions with others are solely for the purpose of practice and not a reflection of where my heart lies. You have been a pillar of support, and I cherish every moment we have spent talking and learning together.<br><br>Given my busy schedule during the weekdays, I won't be able to pick up calls. However, feel free to call me on Fridays after 9:30 PM to Sundays before 9:30 PM. I hope this works for you, and we can continue our conversations during these times.<br><br>I am truly grateful for your understanding, patience, and the kindness you've always shown me. Moving forward, I hope we can continue to nurture our friendship and support each other without any misunderstandings. You are important to me, Srishti, and I hope this message reassures you of my genuine intentions and deep appreciation for our bond.<br><br>With heartfelt gratitude,<br>Manik",
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
