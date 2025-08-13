"use client";
import React, { useState, Fragment } from "react";
import Link from "next/link";
import "../../public/assets/css/module-css/chat-button.css";

export default function FacebookMSG() {
  const [isActivate, setActivate] = useState(false);
  const [isLinePopupOpen, setLinePopupOpen] = useState(false);
  const [clientName, setClientName] = useState("");

  const handleActivate = () => {
    setActivate(!isActivate);
  };

  const handleLineClick = (e) => {
    e.preventDefault(); // Prevent the link from navigating immediately
    setLinePopupOpen(true); // Open our custom popup
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (clientName.trim()) {
      // 1. Get the gclid from the current page's URL
      const urlParams = new URLSearchParams(window.location.search);
      const gclid = urlParams.get("gclid");

      // 2. Log the client name and gclid to the console for testing
      console.log("Client Name:", clientName);
      if (gclid) {
        console.log("Google Click ID (gclid):", gclid);
        // Here you can save the name and gclid to your database or analytics tool
      }

      // 3. Open the LINE link and reset the form
      window.open("https://lin.ee/UZ46BIS", "_blank");
      setLinePopupOpen(false); // Close the popup
      setClientName(""); // Reset the name field
    }
  };

  return (
    <div className="chatContainer">
      <button onClick={handleActivate} className="chatButton">
        {isActivate ? (
          <i className="fas fa-times close"></i>
        ) : (
          <i className="fa fa-comments"></i>
        )}
      </button>
      {isActivate && (
        <div className="iconConatiner">
          <Link
            className="fab fa-facebook-f msgIcon"
            href="https://m.me/207440262444547"
            target="_blank"
          ></Link>

          {/* We change this from a Link to an anchor tag with an onClick handler */}
          <a
            className="fab fa-line lineIcon"
            href="https://lin.ee/UZ46BIS"
            target="_blank"
            onClick={handleLineClick}
          ></a>
        </div>
      )}
      {/* Popup for getting user's name */}
      {isLinePopupOpen && (
        <div className="popupOverlay">
          <div className="popupContainer">
            <button
              onClick={() => setLinePopupOpen(false)}
              className="closePopup"
            >
              &times;
            </button>
            <form onSubmit={handleNameSubmit} className="popupForm">
              <label htmlFor="clientName">
                Please enter your name to continue
              </label>
              <input
                id="clientName"
                type="text"
                placeholder="Your Name"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
              />
              <button type="submit">Chat on LINE</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
