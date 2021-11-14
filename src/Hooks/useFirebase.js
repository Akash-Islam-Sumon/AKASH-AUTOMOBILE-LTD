import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializationAuthintication from "../pages/firebase/firebaase.init";

initializationAuthintication();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  console.log("user", user);

  // Register with email and password
  const registerWithEmailAndPassword = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((users) => {
        setError("");
        const newUser = { email, displayName: name };
        saveUserInformation(name, email);
        setUser(newUser);
      })

      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // save to database userInformation

  // login with emial and password

  const logInUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/home";
        history.replace(destination);
        sessionStorage.setItem("email", userCredential.user.email);

        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // observer
  useEffect(() => {
    const unsbscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsbscribed;
  }, [auth]);
  // isAdmin Or not check
  useEffect(() => {
    fetch(`https://safe-taiga-87363.herokuapp.com/user/${user.email}`)
      .then((res) => res.json())
      .then((result) => {
        setAdmin(result.admin);
      });
  }, [user.email]);

  // logOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})

      .finally(() => {
        setIsLoading(false);
      });
  };
  const saveUserInformation = (name, email) => {
    const user = { displayName: name, email };
    fetch("https://safe-taiga-87363.herokuapp.com/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return {
    user,
    registerWithEmailAndPassword,
    isLoading,
    logInUser,
    admin,
    error,
    logOut,
  };
};

export default useFirebase;
