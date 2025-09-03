"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // "success" | "error"
  const [errors, setErrors] = useState({}); // { firstName?: string, lastName?: string, message?: string }
  const [counts, setCounts] = useState({ firstName: 0, lastName: 0, message: 0 });

  // Word limit settings
  const NAME_MAX_WORDS = 3;
  const MESSAGE_MIN_WORDS = 3;
  const MESSAGE_MAX_WORDS = 100;

  // Word counter handles multiple spaces, newlines, punctuation
  const countWords = (str) =>
    (str || "")
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .filter(Boolean).length;

  function showToast(type, msg, duration = 4000) {
    setToastType(type);
    setToastMessage(msg);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToastMessage(""), duration);
  }

  // Live field validation
  function validateField(name, value) {
    const words = countWords(value);
    const nextErrors = { ...errors };
    const nextCounts = { ...counts, [name]: words };

    switch (name) {
      case "firstName": {
        if (!value.trim()) {
          nextErrors.firstName = "Please enter your first name.";
        } else if (words > NAME_MAX_WORDS) {
          nextErrors.firstName = `First name must be ${NAME_MAX_WORDS} words or fewer. (${words}/${NAME_MAX_WORDS})`;
        } else {
          delete nextErrors.firstName;
        }
        break;
      }
      case "lastName": {
        if (!value.trim()) {
          nextErrors.lastName = "Please enter your last name.";
        } else if (words > NAME_MAX_WORDS) {
          nextErrors.lastName = `Last name must be ${NAME_MAX_WORDS} words or fewer. (${words}/${NAME_MAX_WORDS})`;
        } else {
          delete nextErrors.lastName;
        }
        break;
      }
      case "message": {
        if (!value.trim()) {
          nextErrors.message = "Please enter a message.";
        } else if (words < MESSAGE_MIN_WORDS) {
          nextErrors.message = `Message must be at least ${MESSAGE_MIN_WORDS} words. (${words}/${MESSAGE_MIN_WORDS})`;
        } else if (words > MESSAGE_MAX_WORDS) {
          nextErrors.message = `Message must be ${MESSAGE_MAX_WORDS} words or fewer. (${words}/${MESSAGE_MAX_WORDS})`;
        } else {
          delete nextErrors.message;
        }
        break;
      }
      default:
        break;
    }

    setErrors(nextErrors);
    setCounts(nextCounts);
  }

  // Full-form validation on submit
  function validate(form) {
    const data = new FormData(form);
    const firstName = (data.get("firstName") || "").toString();
    const lastName = (data.get("lastName") || "").toString();
    const message = (data.get("message") || "").toString();

    const fnWords = countWords(firstName);
    const lnWords = countWords(lastName);
    const msgWords = countWords(message);

    const next = {};

    if (!firstName.trim()) next.firstName = "Please enter your first name.";
    else if (fnWords > NAME_MAX_WORDS)
      next.firstName = `First name must be ${NAME_MAX_WORDS} words or fewer. (${fnWords}/${NAME_MAX_WORDS})`;

    if (!lastName.trim()) next.lastName = "Please enter your last name.";
    else if (lnWords > NAME_MAX_WORDS)
      next.lastName = `Last name must be ${NAME_MAX_WORDS} words or fewer. (${lnWords}/${NAME_MAX_WORDS})`;

    if (!message.trim()) next.message = "Please enter a message.";
    else if (msgWords < MESSAGE_MIN_WORDS)
      next.message = `Message must be at least ${MESSAGE_MIN_WORDS} words. (${msgWords}/${MESSAGE_MIN_WORDS})`;
    else if (msgWords > MESSAGE_MAX_WORDS)
      next.message = `Message must be ${MESSAGE_MAX_WORDS} words or fewer. (${msgWords}/${MESSAGE_MAX_WORDS})`;

    // Keeps live counters in sync on submit
    setCounts({
      firstName: fnWords,
      lastName: lnWords,
      message: msgWords,
    });

    return next;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    // Custom validation
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      const el = form.querySelector(`[name="${firstKey}"]`);
      if (el) el.focus();
      // showToast("error", "Please fix the highlighted fields.");
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", "4768704b-7523-434d-a9a2-cc81c0dc774d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      });
      const result = await response.json();

      if (result.success) {
        form.reset();
        setErrors({});
        setCounts({ firstName: 0, lastName: 0, message: 0 });
        showToast("success", "Thanks, your message was sent.");
      } else {
        showToast("error", "Something went wrong. Please try again.");
      }
    } catch {
      showToast("error", "Network error. Please try again.");
    }
  }

  // Keeps existing input classes and add red ring only on error
  const withErrorRing = (base, key) =>
    `${base} ${errors[key] ? "input-error ring-1 ring-error" : ""}`;

  return (
    <div className="text-white w-full h-full justify-center flex items-center text-center p-5">
      <div className="justify-center bg-black border border-1 border-secondary rounded-xl p-10 max-w-lg">
        <div className="text-center pb-4 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Let's chat!</h1>
          <p className="py-2 text-md">
            I am currently open to taking on new projects. If you are interested
            in working together, send a message!
          </p>
        </div>

        {/* noValidate prevents native browser tooltip bubbles */}
        <form
          noValidate
          className="text-sm flex flex-col items-center space-y-4 h-fit text-black"
          onSubmit={handleSubmit}
        >
          <div className="w-fit space-x-6 flex flex-row">
            {/* First Name */}
            <div
              className={`relative w-1/2 ${
                errors.firstName ? "tooltip tooltip-open" : ""
              }`}
              data-tip={errors.firstName || ""}
            >
              <input
                className={withErrorRing(
                  "w-full px-3 py-2 input-bordered input-success rounded-xl border-none",
                  "firstName"
                )}
                type="text"
                placeholder="First Name*"
                name="firstName"
                onInput={(e) => validateField("firstName", e.currentTarget.value)}
                // Optional char cap as a backup (doesn't affect word logic)
                maxLength={30}
                autoComplete="given-name"
              />
            </div>

            {/* Last Name */}
            <div
              className={`relative w-1/2 ${
                errors.lastName ? "tooltip tooltip-open tooltip-right" : ""
              }`}
              data-tip={errors.lastName || ""}
            >
              <input
                className={withErrorRing(
                  "w-full px-3 py-2 input-bordered input-success rounded-xl border-none",
                  "lastName"
                )}
                type="text"
                placeholder="Last Name*"
                name="lastName"
                onInput={(e) => validateField("lastName", e.currentTarget.value)}
                maxLength={30}
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className="w-fit space-x-6 flex flex-row">
            <input
              className="w-1/2 px-3 py-2 input-bordered input-success rounded-xl border-none"
              type="text"
              placeholder="Email Address"
              name="email"
              inputMode="email"
              autoComplete="email"
            />
            <input
              className="w-1/2 px-3 py-2 input-bordered input-success rounded-xl border-none"
              type="text"
              placeholder="Phone Number"
              name="phone"
              inputMode="tel"
              autoComplete="tel"
            />
          </div>

          {/* Message */}
          <div
            className={`relative pb-2 w-full flex flex-col items-center ${
              errors.message ? "tooltip tooltip-open tooltip-right" : ""
            }`}
            data-tip={errors.message || ""}
          >
            <textarea
              className={withErrorRing(
                "w-72 sm:w-90 md:w-96 h-4/5 input-bordered input-success rounded-xl border-none p-3",
                "message"
              )}
              name="message"
              placeholder="Your message*"
              onInput={(e) => validateField("message", e.currentTarget.value)}
              rows={6}
              // Char cap as a backup
              maxLength={2000}
            />
            <p className="absolute -bottom-5 right-5 text-xs select-none text-white">
              {counts.message}/{MESSAGE_MAX_WORDS} words
            </p>
          </div>

          <input type="hidden" name="from_name" value="emily.chrisann" />
          <div className="w-full pt-4">
            <button
              className="btn border-none w-60 bg-accent text-white text-md shadow-sm transition ease-in-out delay-50 hover:bg-secondary hover:scale-110 duration-200 ..."
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* DaisyUI Toast */}
      {toastMessage && (
        <div className="toast toast-center toast-top z-50">
          <div
            className={`alert ${
              toastType === "success" ? "alert-info" : "alert-error"
            } shadow-lg text-white text-md flex justify-center`}
          >
            <p className="px-2">{toastMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}
