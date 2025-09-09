"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    website: "",
    employees: "1-10",
    interest: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your submission logic (e.g., API call) here
  };

  return (
    <section
      id="Contact"
      className="w-full max-w-6xl mx-auto px-4 py-12 mt-10 z-10 relative"
      aria-labelledby="contact-form-heading"
    >
      <div className="overflow-visible flex flex-col md:flex-row content-box border-glow-wrapper highlighted-box-timeline backdrop-blur-lg rounded-3xl p-4 md:py-8 shadow-2xl relative text-seasalt">
        <div className="border-glow"></div>
        {/* Left Section */}
        <div className="md:w-1/2 md:p-8 space-y-10">
          <h2
            id="contact-form-heading"
            className="gradient-title text-center leading-16 font-bold"
          >
            Ready to Upgrade Your Workforce?
          </h2>
          <p className="text-[#F8F9FB]/60 text-justify text-lg">
            Fill out the form to schedule a demo and see how our AI employees
            can transform your business. Our experts will create a custom
            implementation plan for your organization.
          </p>
        </div>

        {/* Right Section - Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 pt-6 md:pt-0 md:p-5 space-y-5 text-white"
          noValidate
        >
          <div>
            <label htmlFor="fullName" className="text-sm font-medium">
              Full Name <span className="text-[#00FF93]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Smith"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#1c1f21] border border-[#00FF93]/30 rounded-lg focus:outline-none focus:border-[#00FF93] text-white"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Work Email <span className="text-[#00FF93]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#1c1f21] border border-[#00FF93]/30 rounded-lg focus:outline-none focus:border-[#00FF93] text-white"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-medium">
              Company Name <span className="text-[#00FF93]">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company Inc."
              value={formData.company}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#1c1f21] border border-[#00FF93]/30 rounded-lg focus:outline-none focus:border-[#00FF93] text-white"
              required
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="website" className="text-sm font-medium">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="Website URL"
              value={formData.website}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#1c1f21] border border-[#00FF93]/30 rounded-lg focus:outline-none focus:border-[#00FF93] text-white"
            />
          </div>

          <div>
            <label htmlFor="employees" className="text-sm font-medium">
              Number of Employees <span className="text-[#00FF93]">*</span>
            </label>
            <select
              id="employees"
              name="employees"
              value={formData.employees}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2.5 bg-[#1c1f21] border border-[#00FF93]/30 rounded-lg focus:outline-none focus:border-[#00FF93] text-white"
              required
              aria-required="true"
            >
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="500+">500+</option>
            </select>
          </div>

          <div>
            <label htmlFor="interest" className="text-sm font-medium">
              Interested In <span className="text-[#00FF93]">*</span>
            </label>
            <input
              type="text"
              id="interest"
              name="interest"
              placeholder="What are you looking for?"
              value={formData.interest}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-[#1c1f21] border border-[#00FF93]/30 rounded-lg focus:outline-none focus:border-[#00FF93] text-white"
              required
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="glow-button group bg-[#00FF93] hover:bg-[#00FF93]/90 text-black border border-[#00FF93]/30 hover:border-[#00FF93] px-4 mx-auto mt-4 md:px-6 py-1.5 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 relative overflow-hidden flex items-center justify-center"
          >
            Submit
            <span className="cursor-glow"></span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
