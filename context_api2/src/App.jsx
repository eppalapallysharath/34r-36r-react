import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./landingPage";
import { Login } from "./login";
import { Dashboard } from "./dashboard";
import { Profile } from "./profile";

export const loginContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <loginContext.Provider value={{ user, setUser }}>
      <Routes>
        {user === null ? (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />{" "}
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </>
        )}
        <Route path="*" element={<h1>Page not found 404</h1>} />
      </Routes>
    </loginContext.Provider>
  );
};

export default App;
