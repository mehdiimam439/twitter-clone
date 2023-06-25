import { Avatar, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./TweetBox.css";
import { auth } from "../config/firebase";
import db from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getData().then((data) => setAvatar(data.avatar));
  }, []);

  const sendTweet = async (e) => {
    e.preventDefault();
    const data = await getData();
    console.log(data);
    addDoc(collection(db, "tweets"), {
      displayName: data.name,
      username: data.userName,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: data.avatar,
      timeStamp: new Date().getTime(),
    });
    setTweetMessage("");
    setTweetImage("");
  };

  const testSend = (e) => {
    e.preventDefault();
    const data = [
      {
        avatar: "",
        email: "sportslover123@gmail.com",
        userName: "SportsLover123",
        name: "Sports Lover",
        text: "Just witnessed an incredible comeback in the championship game! The energy in the stadium was electrifying. #Sports #Championship",
      },
      {
        avatar: "",
        email: "techgeek456@gmail.com",
        userName: "TechGeek456",
        name: "Tech Geek",
        text: "Just got my hands on the latest smartphone model. The features are mind-blowing! #TechEnthusiast #GadgetLover",
      },
      {
        avatar: "",
        email: "musicjunkie789@gmail.com",
        userName: "MusicJunkie789",
        name: "Music Junkie",
        text: "Attended an amazing concert last night. The band's performance was simply mesmerizing. #LiveMusic #ConcertExperience",
      },
      {
        avatar: "",
        email: "fashionista101@gmail.com",
        userName: "Fashionista101",
        name: "Fashionista",
        text: "Experimenting with different fashion styles today. It's fun to mix and match and create unique looks. #Fashionista #StyleInspiration",
      },
      {
        avatar: "",
        email: "foodlover234@gmail.com",
        userName: "FoodLover234",
        name: "Food Lover",
        text: "Tried a new restaurant today and discovered my new favorite dish. The flavors were out of this world! #Foodie #FoodLovers",
      },
      {
        avatar: "",
        email: "travelbug567@gmail.com",
        userName: "TravelBug567",
        name: "Travel Bug",
        text: "Just arrived at a breathtaking destination. The scenic views here are absolutely stunning. #Wanderlust #TravelGram",
      },
      {
        avatar: "",
        email: "bookworm890@gmail.com",
        userName: "Bookworm890",
        name: "Bookworm",
        text: "Lost in the pages of a captivating fantasy novel. It's amazing how books can transport you to magical realms. #Bookworm #FantasyFiction",
      },
      {
        avatar: "",
        email: "movielover1234@gmail.com",
        userName: "MovieLover1234",
        name: "Movie Lover",
        text: "Movie night with friends! Popcorn ready, comfy seats, and a great film lined up. Can't ask for a better evening. #MovieMarathon #FilmLovers",
      },
      {
        avatar: "",
        email: "artenthusiast5678@gmail.com",
        userName: "ArtEnthusiast5678",
        name: "Art Enthusiast",
        text: "Visited an art gallery today and was captivated by the beautiful paintings. Art has a way of stirring emotions. #ArtAppreciation #GalleryVisit",
      },
      {
        avatar: "",
        email: "photolover9012@gmail.com",
        userName: "PhotoLover9012",
        name: "Photo Lover",
        text: "Wandering the streets, camera in hand, capturing the beauty of everyday life. Photography is my way of freezing moments in time. #PhotographyPassion #StreetPhotography",
      },
      {
        avatar: "",
        email: "healthnut3456@gmail.com",
        userName: "HealthNut3456",
        name: "Health Nut",
        text: "Starting the day with a refreshing yoga session. Taking care of our physical and mental well-being is essential. #WellnessJourney #SelfCare",
      },
      {
        avatar: "",
        email: "fitnessenthusiast7890@gmail.com",
        userName: "FitnessEnthusiast7890",
        name: "Fitness Enthusiast",
        text: "Pushing my limits at the gym today. Nothing beats the feeling of accomplishment after a challenging workout. #FitnessGoals #GymMotivation",
      },
      {
        avatar: "",
        email: "gamer1234@gmail.com",
        userName: "Gamer1234",
        name: "Gamer",
        text: "Embarking on an epic gaming adventure. The immersive storyline and stunning graphics have me hooked. #GamingCommunity #GamerLife",
      },
      {
        avatar: "",
        email: "politicaljunkie5678@gmail.com",
        userName: "PoliticalJunkie5678",
        name: "Political Junkie",
        text: "Engaging in a thoughtful political discussion with friends. It's important to stay informed and voice our opinions. #PoliticalDiscourse #CurrentAffairs",
      },
      {
        avatar: "",
        email: "sciencelover9012@gmail.com",
        userName: "ScienceLover9012",
        name: "Science Lover",
        text: "Fascinated by the wonders of the universe. Exploring the mysteries of space and unraveling the secrets of the cosmos. #ScienceEnthusiast #CosmicWonders",
      },
      {
        avatar: "",
        email: "natureenthusiast3456@gmail.com",
        userName: "NatureEnthusiast3456",
        name: "Nature Enthusiast",
        text: "Took a hike through lush green trails today. Being in nature is rejuvenating for the mind, body, and soul. #NatureLovers #OutdoorAdventure",
      },
    ];
    for (var i = 0; i < data.length; i++) {
      addDoc(collection(db, "tweets"), {
        displayName: data[i].name,
        username: data[i].userName,
        verified: true,
        text: data[i].text,
        image: "",
        avatar: data[i].avatar,
        timeStamp: new Date(
          new Date().setDate(1 + Math.floor(Math.random() * 29))
        ).getTime(),
      });
    }
  };

  const getData = async () => {
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);

      try {
        const docSnapshot = await getDoc(userRef);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          return userData;
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Error retrieving user data: ", error);
      }
    } else {
      return [];
    }
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox--input">
          <Avatar src={avatar} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What is happening?!"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox--imageInput"
          placeholder="Optional: Enter image URL"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox--button">
          Tweet
        </Button>
        <Button onClick={testSend} type="submit" className="tweetBox--button">
          Populate
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
