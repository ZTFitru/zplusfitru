import React, { useState } from "react";

const Contact = ({ toggle }) => {
  const isDarkMode = toggle === "dark";

  const bgColor = isDarkMode ? "#2F2A26" : "#FFF8E1";
  const textColor = isDarkMode ? "#fff" : "#000";
  const hoverColor = isDarkMode ? "#A0A05E" : "#53532F";

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe0bf699-b1bc-4179-a275-a832f1e36949");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-m-20"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h5
        className="text-center text-4xl font-bold mb-12 uppercase tracking-widest"
        style={{
          backgroundImage: `linear-gradient(90deg, ${hoverColor}, ${textColor})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Contact
      </h5>
      <form onSubmit={onSubmit} className="max-w-3xl mx-auto space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="flex-1 p-4 border rounded-lg outline-none transition focus:ring-2"
            style={{
              borderColor: hoverColor,
              color: textColor,
              backgroundColor: bgColor,
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="flex-1 p-4 border rounded-lg outline-none transition focus:ring-2"
            style={{
              borderColor: hoverColor,
              color: textColor,
              backgroundColor: bgColor,
            }}
          />
        </div>
        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full p-4 border rounded-lg outline-none transition focus:ring-2"
          style={{
            borderColor: hoverColor,
            color: textColor,
            backgroundColor: bgColor,
          }}
        ></textarea>
        <button
          type="submit"
          className="block mx-auto py-3 px-8 rounded-full text-lg font-semibold uppercase tracking-wide transition-colors duration-300"
          style={{
            backgroundColor: hoverColor,
            color: textColor,
          }}
        >
          Full Send
        </button>
        <p className="text-center">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
