import { useForm } from "@formspree/react";
import Spinner from "../loader/Spinner";
import { useState } from "react";



const Contact = () => {
  const [state, handleSubmit] = useForm("xblgrpgv");
  const [budgetValue, setBudgetValue] = useState<number>(100000);
  const [showSuccessMessage, setShowSuccessMessage] = useState(state.succeeded);

const onClose = () => {
  setShowSuccessMessage(false);
};


  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(event);
   
  };

  const contactUs = [
    {
      name: "Website Development",
      id: "Website Development",
    },
    {
      name: "Mobile App Development",
      id: "Mobile App Development",
    },
    {
      name: "Business Promotion",
      id: "Business Promotion",
    },
    {
      name: "Brand Design",
      id: "Brand Design",
    },
    {
      name: "Project Management",
      id: "Project Management",
    },
    {
      name: "Data Analysis",
      id: "Data Analysis",
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
  return (
    <div className="font-[manrope-regular] mt-20 md:w-[90%] px-4  m-auto">
      {/* header */}
      <div className=" flex flex-col gap-6 justify-center items-center mb-1</div>0  ">
        <p className="font-bold text-2xl">Have an Idea or a Business?</p>
        <p className=" md:w-[35%] text-center w-full">
          Whether you&apos;re starting fresh or expanding your business,
          we&apos;re here to help. If you want to publish your idea through a
          website, contact us today!
        </p>
      </div>
      {/* form */}
    
      {state.succeeded && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w</div>-md">
            <h2 className="text-2xl font-bold text-center">Message Sent!</h2>
            <p className="text-green-500 mt-4 text-center">
              Thank you for reaching out to us! We will get back to you soon.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className=" md:h-auto bg-[#EBEDEE]  rounded-lg p-10 ">
        <form onSubmit={handleSubmit} className="flex flex-col gap</form>-12">
          <span className="h-[10rem] w-[100%] gap-4 flex justify-between px-4 md:flex-row flex-col">
            <span className="flex flex-col md:w-[45%] w-full gap-8">
              <label htmlFor="Full Name" className="font-bold">
                Full Name
              </label>
              <input
                id="fullName"
                name="Full Name"
                type="text"
                placeholder="Enter full name"
                className="h-[72px] rounded-md pl-5"
                required
              />
            </span>
            <span className="flex flex-col md:w-[45%] w-full gap-8">
              <label htmlFor="Email" className="font-bold">
                Email
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                placeholder="Enter email"
                className="h-[72px] rounded-md pl-5"
                required
              />
            </span>
            <span className="flex flex-col md:w-[45%] w-full gap-8">
              <label htmlFor="Phone" className="font-bold">
                Phone Number
              </label>
              <input
                id="phone"
                name="Phone"
                type="tel"
                placeholder="Enter phone number"
                className="h-[72px] rounded-md pl-5"
                required
              />
            </span>
          </span>
          {/* Contact us */}
          <div className="flex flex-col gap-6 pl-[1rem] mt-[14rem] md:mt-0.5">
            <span>
              <p className="font-bold">Why are you contacting us?</p>
            </span>
            <span className="flex md:flex-wrap justify-between md:flex-row flex-col">
              {contactUs.map((item, index) => (
                <span className="flex gap-4 mt-8 w-[32%]" key={index}>
                  <input
                    type="checkbox"
                    name={item.name}
                    id={item.id}
                    className="w-[28px] h-[28px] bg-[#C5CACC] rounded-sm cursor-pointer"
                  />
                  <label htmlFor={item.name} className="my-auto">
                    {item.name}
                  </label>
                </span>
              ))}
            </span>
          </div>
          {/* Budget */}
          <span className="md:flex flex-col pl-4 gap-4 mt-10 mb-10 hidden">
            <span className="flex flex-col gap-3">
              <p className="font-bold">Budgeting Options</p>
              <p>Slide to indicate your budget range</p>
            </span>
            <span className="flex flex-col gap-4">
              <input
                type="range"
                name="budget"
                id="budget"
                min={100000}
                step={100000}
                max={5000000}
                required
                className="w-[85%] mx-auto bg-black"
                onChange={(e) => setBudgetValue(Number(e.target.value))}
              />
              <span>Selected Budget: {budgetValue}</span>
            </span>
            <div className="w-full mt-4 h-[1px] flex justify-around bg-black">
              {budget.map((budget, index) => (
                <span className="mt-2 font-semibold" key={index}>
                  {budget}
                </span>
              ))}
            </div>
          </span>
          {/* Message */}
          <span className="flex flex-col gap-4">
            <label htmlFor="Message" className="font-bold">
              Your Message
            </label>
            <textarea
              name="Message"
              id="message"
              placeholder="Enter message here..."
              className="h-[14rem] rounded-md pl-5 pt-4"
              required
            ></textarea>
          </span>
          <span className="flex justify-end mt-4">
            {state.submitting ? (
              <Spinner />
            ) : (
              <button
                // type="submit"
                className="bg-[#0A4FBB] px-[20px] py-[16px] text-[#EBEDEE] rounded-lg"
                onClick={() => handleFormSubmit}
              >
                Submit
              </button>
            )}
          </span>
        </form>
      </div>
      <div className=" h-auto bg-[#EBEDEE] mt-8 rounded-lg p-10">
        <span className=" flex flex-col gap-4">
          <p className=" text-2xl font-bold">Stay Updated!</p>
          <p>
            Subscribe to our Newsletter for the latest industry insights and
            updates.
          </p>
        </span>

        <span className="flex justify-between mt-8">
          <input
            type="email"
            placeholder="Enter email"
            className="w-[50%] pl-4 p-4 rounded-md"
            required
          />
          <button
            type="submit"
            className=" bg-[#0A4FBB] px-[20px] py-[16px]  text-[#EBEDEE] rounded-lg"
          >
            Subscribe
          </button>
        </span>
      </div>
    </div>
  );
};

export default Contact;
