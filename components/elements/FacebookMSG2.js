"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import "../../public/assets/css/module-css/chat-button.css";

export default function FacebookMSG() {
  const t = useTranslations("InputForm");
  const [isActivate, setActivate] = useState(false);
  const [isLinePopupOpen, setLinePopupOpen] = useState(false);

  const [formData, setFormData] = useState({
    clientName: "",
    gclickid: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Get search params from URL
  const searchParams = useSearchParams();

  // Effect to capture gclid from URL when the component loads
  useEffect(() => {
    const gclidFromUrl = searchParams.get("gclid");
    if (gclidFromUrl) {
      // Set gclid in our form data state
      setFormData((prev) => ({ ...prev, gclickid: gclidFromUrl }));
    }
  }, [searchParams]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleActivate = () => {
    setActivate(!isActivate);
  };

  const handleLineClick = (e) => {
    e.preventDefault(); // Prevent the link from navigating immediately
    setLinePopupOpen(true); // Open our custom popup
  };

  const handleAddLine = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.clientName.trim()) {
      return;
    }

    setSubmitting(true);
    setSuccess(false);

    const dataToSubmit = new FormData();
    dataToSubmit.append("clientName", formData.clientName);
    dataToSubmit.append("gclickid", formData.gclickid);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby9-WAEG_P619eI8b9V11kF5T-Vv2DbEPwfy6ch8zHv2iOeYzsYSfrvHFRbb2owddMY/exec",
        {
          method: "POST",
          body: dataToSubmit,
        }
      );

      if (!response.ok) {
        const errorData = await response.text(); // Get error message from server
        throw new Error(`Submission failed: ${response.status} ${errorData}`);
      }

      // --- On Success ---
      setSuccess(true);

      // 1. Open the LINE link in a new tab
      window.open("https://lin.ee/UZ46BIS", "_blank");
      // 2. Close the popup
      setLinePopupOpen(false);
      // 3. Reset the clientName field, but keep the gclid
      setFormData({
        clientName: "",
        gclickid: formData.gclickid, // Keep gclid for potential resubmission
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
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
            <form onSubmit={handleAddLine} className="popupForm">
              <label>{t("label")}</label>
              <div className="input-box">
                <input
                  type="text"
                  name="clientName"
                  placeholder={t("clientName")}
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                />
              </div>
              <button type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : [t("button")]}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
