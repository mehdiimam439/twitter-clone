import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Auth from "./Auth";
import { auth } from "../config/firebase";
import "firebase/auth";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return user !== null;
};

function ProtectedRoutes() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Auth />;
}

export default ProtectedRoutes;
