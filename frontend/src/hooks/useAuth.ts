"use client";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export default function useAuth() {
  const [user, setUser] = useState<any | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // onAuthStateChanged is the "magic" listener
    const unsubscribe = onAuthStateChanged(auth, (foundUser) => {
      if (foundUser) {
        // User is logged in!
        setUser(foundUser);
      } else {
        // User is logged out
        setUser(null);
      }
      setInitializing(false); // Firebase is done checking
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return { user, initializing };
}
