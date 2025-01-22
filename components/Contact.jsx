import React, { useState } from "react";
import { motion } from "framer-motion";

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
      body: formData,
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
      <motion.h5
        className="text-center text-4xl font-bold mb-12 uppercase tracking-widest"
        style={{
          backgroundImage: `linear-gradient(90deg, ${hoverColor}, ${textColor})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact
      </motion.h5>
      <motion.form
        onSubmit={onSubmit}
        className="max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <motion.input
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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.input
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
        <motion.textarea
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="block mx-auto py-3 px-8 rounded-full text-lg font-semibold uppercase tracking-wide transition-colors duration-300"
          style={{
            backgroundColor: hoverColor,
            color: textColor,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          Full Send
        </motion.button>
        <motion.p
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: result ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {result}
        </motion.p>
      </motion.form>
    </div>
  );
};

export default Contact;
