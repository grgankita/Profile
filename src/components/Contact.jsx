// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { social, assets } from "../assets/assets";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Email.js environment variables are not set.");
      setStatus("error");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey })
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section className="py-12">
      <div
        id="contact"
        className="py-20 transition-colors duration-300 dark:bg-gray-800 dark:text-white bg-white text-gray-900"
      >
        <h2 className="text-3xl text-center font-bold mb-6">
          Let's Work Together
        </h2>
        <h6 className="text-center mb-8">
          Have a project in mind or want to discuss opportunities? I'd love to
          hear from you. Let's create something amazing together.
        </h6>
        {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"> */}
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* LEFT: Form */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-8 rounded-lg shadow-lg space-y-6 transition-colors dark:bg-gray-900 dark:text-white bg-white text-gray-900"
            >
              <h2 className="text-3xl font-bold mb-6">Send Message</h2>
              <h6 className="mb-8">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </h6>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-white bg-gray-50 text-gray-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-white bg-gray-50 text-gray-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:text-white bg-gray-50 text-gray-900"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white text-lg font-semibold py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
              {status === "success" && (
                <p className="text-green-500 text-center mt-4">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center mt-4">
                  Failed to send message. Please try again later.
                </p>
              )}
            </form>
          </div>

          {/* RIGHT: Cards */}
          <div className="space-y-6 ">
            {/* Get in Touch */}
            <div className="bg-white shadow-lg rounded-xl p-6 dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="flex items-center mb-2">
                <assets.mail className="mr-2 text-blue-500" />{" "}
                grggankitaa1@gmail.com
              </p>
              <p className="flex items-center mb-2">
                <assets.phone className="mr-2 text-blue-500" /> +977 9815031273
              </p>
              <p className="flex items-center">
                <assets.location className="mr-2 text-blue-500" /> Surunga,
                Jhapa
              </p>
            </div>

            {/* Connect with Me */}
            <div className="bg-white shadow-lg rounded-xl p-6 dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-4">Connect with Me</h3>
              <div className="flex space-x-4 text-2xl">
                <a
                  href="https://linkedin.com/in/ankita-gurung-a2306b211"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  <social.linkedin size={40} />
                </a>
                <a
                  href="https://github.com/grgankita"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  <social.github size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
