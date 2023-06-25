import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Button } from "@mui/material";
import "./Auth.css";
import db from "../config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [interests, setInterests] = useState([]);
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [text, setText] = useState(
    auth.currentUser
      ? `Signed in as ${auth.currentUser.email}`
      : "Not signed in"
  );

  const handleInterestChange = (event) => {
    setInterests(event.target.value);
  };

  useEffect(() => {
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const getUserData = async () => {
        try {
          const docSnapshot = await getDoc(userRef);
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            setInterests(userData.interests);
          } else {
            console.log("User document does not exist.");
          }
        } catch (error) {
          console.error("Error retrieving user data: ", error);
        }
      };
      getUserData();
    }
  }, []);

  const userSetup = async () => {
    const userRef = doc(db, "users", auth.currentUser.uid);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      console.log("User already exists. Skipping user setup.");
      return;
    }
    try {
      await setDoc(userRef, {
        email: auth.currentUser.email,
        name: name,
        userName: userName,
        avatar: avatar,
        interests: interests,
      });
      console.log("User added successfully!");
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
      setText(`Signed in as ${auth.currentUser.email}`);
    } catch (err) {
      console.error(err);
    }
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      userSetup();
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      userSetup();
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setText("Not signed in");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <TwitterIcon className="icon" />
      {!auth.currentUser && (
        <div>
          <input
            className="auth-input"
            placeholder="Email..."
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="auth-input"
            placeholder="Password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="auth-input"
            placeholder="Display Name..."
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="auth-input"
            placeholder="Username..."
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="auth-input"
            placeholder="Avatar Image URL..."
            onChange={(e) => setAvatar(e.target.value)}
          />
          <FormControl className="auth-input">
            <InputLabel id="interests-label">Select Interests...</InputLabel>
            <Select
              labelId="interests-label"
              id="interests"
              multiple
              value={interests}
              onChange={handleInterestChange}
              renderValue={(selected) => selected.join(", ")}
            >
              <MenuItem value="sports">Sports</MenuItem>
              <MenuItem value="technology">Technology</MenuItem>
              <MenuItem value="music">Music</MenuItem>
              <MenuItem value="fashion">Fashion</MenuItem>
              <MenuItem value="food">Food</MenuItem>
              <MenuItem value="travel">Travel</MenuItem>
              <MenuItem value="books">Books</MenuItem>
              <MenuItem value="movies">Movies</MenuItem>
              <MenuItem value="art">Art</MenuItem>
              <MenuItem value="photography">Photography</MenuItem>
              <MenuItem value="health">Health</MenuItem>
              <MenuItem value="fitness">Fitness</MenuItem>
              <MenuItem value="gaming">Gaming</MenuItem>
              <MenuItem value="politics">Politics</MenuItem>
              <MenuItem value="science">Science</MenuItem>
              <MenuItem value="nature">Nature</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            className="auth-button signUp"
            fullWidth
            onClick={signUp}
          >
            Sign Up
          </Button>
          <br />
          <br />
          <br />
          <input
            className="auth-input"
            placeholder="Email..."
            type="email"
            onChange={(e) => setSignInEmail(e.target.value)}
          />
          <input
            className="auth-input"
            placeholder="Password..."
            type="password"
            onChange={(e) => setSignInPassword(e.target.value)}
          />

          <Button
            variant="outlined"
            className="auth-button"
            fullWidth
            onClick={signIn}
          >
            Sign In
          </Button>

          {/* <Button
            variant="outlined"
            className="auth-button"
            fullWidth
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button> */}
        </div>
      )}
      {auth.currentUser && (
        <>
          <p className="auth-text">
            Your interests:
            <br />
            {interests.map((interest) => (
              <span key={interest}>
                {interest.charAt(0).toUpperCase() + interest.slice(1)}
                <br />
              </span>
            ))}
          </p>
          <Button
            variant="outlined"
            className="auth-button"
            fullWidth
            onClick={logout}
          >
            Logout
          </Button>
        </>
      )}

      <p className="auth-text">{text}</p>
    </div>
  );
}

export default Auth;
