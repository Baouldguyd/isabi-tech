import React, { useState } from "react";

const BootcampSignup: React.FC = () => {

  // Replace with your group chat invite link
  const groupChatLink = "https://chat.whatsapp.com/G0syWS1izhHJtrgYfawG2a?mode=ems_copy_t";


  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <h1 className="text-2xl font-bold text-center mb-2">
        🚀 Free Weekend Coding Bootcamp 🚀
      </h1>
      <p className="text-center text-[#eee] font-medium mb-4">
        Bringing Teenagers & Young People into Tech 💻✨
      </p>
      <p className="text-center text-gray-600 mb-6">
        Learn <span className="font-semibold">HTML, CSS & JavaScript</span> from
        scratch! Beginner-friendly, practical, and fun 🎉
      </p>

      <div className="space-y-3 text-sm text-gray-700">
        <p>🧑🏽‍🎓 <b>Who:</b> Teenagers & youths (no prior experience needed)</p>
        <p>🗓 <b>Days:</b> Saturdays & Sundays</p>
        <p>⏰ <b>Time:</b> TBD (To Be Communicated)</p>
        <p>💻 <b>Mode:</b> 100% Online – join from anywhere</p>
        <p>🎯 <b>Level:</b> Beginner-friendly (ideal first step into coding)</p>
        <p>🔥 <b>What you’ll learn:</b> HTML, CSS, JavaScript & mini-projects</p>
        <p>📅 <b>Start Date:</b> 27th September 2025</p>
        <p>⏳ <b>Duration:</b> 2 months</p>
      </div>

      {/* FormSubmit form */}
      <form
        action="https://formsubmit.co/003d9e4bd79f5ba4220bab3b42836dce"
        method="POST"
        className="mt-6 space-y-4"
      >
        {/* Redirect to group chat after submission */}
        <input type="hidden" name="_next" value={groupChatLink} />
        {/* Prevent spam */}
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full border rounded-lg px-3 py-2 focus:outline-none text-black focus:ring focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full border rounded-lg px-3 py-2 text-black focus:outline-none focus:ring focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Join Bootcamp 🎓
        </button>
      </form>
    </div>
  );
};

export default BootcampSignup;
