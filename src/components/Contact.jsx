import { useState } from "react";

const ACCESS_KEY = "37274fb0-fa2a-4b4c-9404-1ac42c740951";

const budgetOptions = {
  NGN: [
    "Below ₦50,000",
    "₦50,000 – ₦100,000",
    "₦100,000 – ₦250,000",
    "₦250,000 – ₦500,000",
    "₦500,000 – ₦1,000,000",
    "Above ₦1,000,000",
  ],
  USD: [
    "Below $100",
    "$100 – $250",
    "$250 – $500",
    "$500 – $1,000",
    "$1,000 – $2,500",
    "Above $2,500",
  ],
  GBP: [
    "Below £100",
    "£100 – £250",
    "£250 – £500",
    "£500 – £1,000",
    "£1,000 – £2,500",
    "Above £2,500",
  ],
  EUR: [
    "Below €100",
    "€100 – €250",
    "€250 – €500",
    "€500 – €1,000",
    "€1,000 – €2,500",
    "Above €2,500",
  ],
  CAD: [
    "Below C$100",
    "C$100 – C$250",
    "C$250 – C$500",
    "C$500 – C$1,000",
    "C$1,000 – C$2,500",
    "Above C$2,500",
  ],
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    currency: "NGN",
    budget: "",
    message: "",
  });

  const [feedback, setFeedback] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
      ...(name === "currency" ? { budget: "" } : {}),
    }));

    setFeedback({ type: "", message: "" });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!ACCESS_KEY) {
      setFeedback({
        type: "error",
        message: "The enquiry form is not connected yet. Please check back shortly.",
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback({ type: "", message: "" });

    try {
      const submissionData = new FormData(event.currentTarget);

      submissionData.append("access_key", ACCESS_KEY);

      submissionData.append(
        "subject",
        `New Project Enquiry from ${formData.name}`
      );

      submissionData.append("from_name", "Jamil Global Tech");

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: submissionData,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setFeedback({
          type: "success",
          message:
            "Thank you! Your enquiry has been submitted successfully. Jamil Global Tech will get back to you shortly.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          currency: "NGN",
          budget: "",
          message: "",
        });
      } else {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="contact-section section-container"
      id="contact"
    >
      <div className="section-heading">
        <span className="section-label">GET IN TOUCH</span>

        <h2>
          Let's Build Something <span>Great</span>
        </h2>

        <p>
          Have a project, business idea or professional
          opportunity? Tell us what you have in mind.
          We'd love to hear from you.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-information">
          <h3>Let's start a conversation.</h3>

          <p>
            Whether you need a business website, web
            application, software development, creative
            design or technical collaboration, Jamil Global
            Tech is ready to hear from you.
          </p>

          <a
            href="mailto:jamilglobaltech@gmail.com"
            className="contact-item"
          >
            <span className="contact-icon">✉</span>
            <span>
              <small>Email</small>
              <strong>jamilglobaltech@gmail.com</strong>
            </span>
          </a>

          <a
            href="https://wa.me/2348160243014"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">☏</span>
            <span>
              <small>WhatsApp</small>
              <strong>+234 816 024 3014</strong>
            </span>
          </a>

          <a
            href="https://linkedin.com/in/jamiluabubakar"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">in</span>
            <span>
              <small>LinkedIn</small>
              <strong>Connect professionally</strong>
            </span>
          </a>

          <a
            href="https://github.com/jamilglobaltech"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span className="contact-icon">⌘</span>
            <span>
              <small>GitHub</small>
              <strong>Explore my projects</strong>
            </span>
          </a>

          <p className="footer-location">
            FCT-Abuja, Nigeria | Open to Remote Opportunities
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <span className="section-label">PROJECT ENQUIRY</span>

          <h3>Tell us about your project.</h3>

          <div className="form-group">
            <label htmlFor="contact-name">
              Full Name *
            </label>

            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">
              Email Address *
            </label>

            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-phone">
              Phone / WhatsApp
            </label>

            <input
              type="tel"
              id="contact-phone"
              name="phone"
              placeholder="Include your country code"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-company">
              Company / Business
            </label>

            <input
              type="text"
              id="contact-company"
              name="company"
              placeholder="Your company or business name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-service">
              What do you need? *
            </label>

            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service or enquiry</option>
              <option>Business Website Development</option>
              <option>Web Application Development</option>
              <option>Frontend Development</option>
              <option>Software Development</option>
              <option>UI/UX Design</option>
              <option>Graphic Design</option>
              <option>Website Maintenance</option>
              <option>Employment Opportunity</option>
              <option>Freelance Contract</option>
              <option>Technical Collaboration</option>
              <option>Other Enquiry</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-currency">
              Preferred Currency
            </label>

            <select
              id="contact-currency"
              name="currency"
              value={formData.currency}
              onChange={handleChange}
            >
              <option value="NGN">NGN (₦) - Nigerian Naira</option>
              <option value="USD">USD ($) - US Dollar</option>
              <option value="GBP">GBP (£) - British Pound</option>
              <option value="EUR">EUR (€) - Euro</option>
              <option value="CAD">CAD (C$) - Canadian Dollar</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-budget">
              Budget Range
            </label>

            <select
              id="contact-budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select your budget range</option>

              {budgetOptions[formData.currency].map(
                (option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )
              )}

              <option value="Not yet determined">
                Not yet determined
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">
              Tell us about your project *
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows="6"
              placeholder="Describe your project, requirements or opportunity..."
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
            ></textarea>
          </div>

          <input
            type="checkbox"
            name="botcheck"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />

          {feedback.message && (
            <p
              className={`form-feedback ${feedback.type}`}
              role="status"
              aria-live="polite"
            >
              {feedback.message}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting Enquiry..."
              : "Send Project Enquiry"}

            {!isSubmitting && <span>↗</span>}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;