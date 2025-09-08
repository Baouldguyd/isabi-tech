import { useForm } from "@formspree/react";
import Spinner from "../loader/Spinner";
import { useState } from "react";
import ContactProgress from "./ContactProgress";
import Newsletter from "./Newsletter";

const Contact = () => {
  const [state, handleSubmit] = useForm("xblgrpgv");
  const [budgetValue, setBudgetValue] = useState<number>(100000);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactUs = [
    {
      name: "Website Development",
      id: "website-development",
    },
    {
      name: "Mobile App Development",
      id: "mobile-app-development",
    },
    {
      name: "Business Promotion",
      id: "business-promotion",
    },
    {
      name: "Brand Design",
      id: "brand-design",
    },
    {
      name: "Project Management",
      id: "project-management",
    },
    {
      name: "Data Analysis",
      id: "data-analysis",
    },
  ];

  const budget = [
    "100,000",
    "200,000",
    "500,000",
    "1,000,000",
    "2,000,000",
    "5,000,000+",
  ];

  // Calculate current step based on form completion
  const getCurrentStep = () => {
    if (!formData.fullName && !formData.email && !formData.phone) return 1;
    if (formData.fullName && formData.email && formData.phone) return 4;
    return 2;
  };
  
  return (
    <div className="font-[manrope-regular] mt-20 w-full max-w-7xl mx-auto px-4">
      {/* header */}
      <div className="flex flex-col gap-6 justify-center items-center mb-10">
        <p className="font-bold text-2xl text-gray-800 dark:text-white">Have an Idea or a Business?</p>
        <p className="md:w-[35%] text-center w-full text-gray-600 dark:text-gray-300">
          Whether you&apos;re starting fresh or expanding your business,
          we&apos;re here to help. If you want to publish your idea through a
          website, contact us today!
        </p>
      </div>
      
      {/* Progress Indicator */}
      <ContactProgress currentStep={getCurrentStep()} totalSteps={4} />

      {/* form */}
      {state.succeeded ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Message Sent!</h2>
            <p className="text-green-500 dark:text-green-400 mt-4 text-center">
              Thank you for reaching out to us! We will get back to you soon.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="md:h-auto bg-[#EBEDEE] dark:bg-gray-700 rounded-lg p-6 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="w-full gap-4 flex flex-col md:flex-row">
              <div className="flex flex-col w-full md:w-[48%] gap-2">
                <label htmlFor="fullName" className="font-bold text-gray-800 dark:text-white">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="Full Name"
                  type="text"
                  placeholder="Enter full name"
                  className="h-[50px] rounded-md pl-5 bg-white dark:bg-gray-600 text-gray-800 dark:text-white"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div className="flex flex-col w-full md:w-[48%] gap-2">
                <label htmlFor="email" className="font-bold text-gray-800 dark:text-white">
                  Email
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="Enter email"
                  className="h-[50px] rounded-md pl-5 bg-white dark:bg-gray-600 text-gray-800 dark:text-white"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="phone" className="font-bold text-gray-800 dark:text-white">
                Phone Number
              </label>
              <input
                id="phone"
                name="Phone"
                type="tel"
                placeholder="Enter phone number"
                className="h-[50px] rounded-md pl-5 bg-white dark:bg-gray-600 text-gray-800 dark:text-white"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            
            {/* Contact us */}
            <div className="flex flex-col gap-4">
              <p className="font-bold text-gray-800 dark:text-white">Why are you contacting us?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {contactUs.map((item, index) => (
                  <div className="flex gap-2 items-center" key={index}>
                    <input
                      type="checkbox"
                      name={item.name}
                      id={item.id}
                      className="w-[20px] h-[20px] bg-[#C5CACC] rounded-sm cursor-pointer"
                    />
                    <label htmlFor={item.id} className="my-auto text-gray-800 dark:text-white">
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Budget */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-bold text-gray-800 dark:text-white">Budgeting Options</p>
                <p className="text-gray-600 dark:text-gray-300">Slide to indicate your budget range</p>
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="range"
                  name="budget"
                  id="budget"
                  min={100000}
                  step={100000}
                  max={5000000}
                  required
                  className="w-full mx-auto"
                  onChange={(e) => setBudgetValue(Number(e.target.value))}
                />
                <div className="text-center text-gray-800 dark:text-white">Selected Budget: ₦{budgetValue.toLocaleString()}</div>
              </div>
              <div className="w-full mt-2 h-[1px] flex justify-between bg-black dark:bg-gray-300 px-2">
                {budget.map((budget, index) => (
                  <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-white" key={index}>
                    ₦{budget}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-bold text-gray-800 dark:text-white">
                Your Message
              </label>
              <textarea
                name="Message"
                id="message"
                placeholder="Enter message here..."
                className="h-[140px] rounded-md pl-5 pt-4 bg-white dark:bg-gray-600 text-gray-800 dark:text-white"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            
            <div className="flex justify-end mt-4">
              {state.submitting ? (
                <Spinner />
              ) : (
                <button
                  type="submit"
                  className="bg-[#0A4FBB] px-[20px] py-[16px] text-[#EBEDEE] rounded-lg hover:bg-[#0945a0] transition-colors"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* Newsletter Section */}
      <div className="mt-16">
        <Newsletter />
      </div>
    </div>
  );
};

export default Contact;