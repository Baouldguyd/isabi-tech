const Contact = () => {
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
  return (
    <div className="font-[manrope-regular] mt-20 w-[90%]  m-auto">
      {/* header */}
      <div className=" flex flex-col gap-6 justify-center items-center mb-10  ">
        <p className="font-bold text-2xl">Have an Idea or a Business?</p>
        <p className=" w-[35%] text-center ">
          Whether you're starting fresh or expanding your business, we're here
          to help. If you want to publish your idea through a website, contact
          us today!
        </p>
      </div>
      {/* form */}
      <div className=" h-[1367px] bg-[#EBEDEE]  rounded-lg p-10">
        <form action="" className=" flex flex-col gap-12">
          <span className=" h-[10rem]  w-[100%] flex justify-between px-4">
            <span className=" flex flex-col w-[45%] gap-8">
              <label htmlFor="" className="font-bold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                className=" h-[72px] rounded-md pl-5"
              />
            </span>
            <span className=" flex flex-col w-[45%] gap-8">
              <label htmlFor="" className="font-bold">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter email"
                className=" h-[72px] rounded-md pl-5"
              />
            </span>
          </span>
          {/* Contact us */}
          <span className="flex flex-col gap-6 pl-[1rem]">
            <span>
              <p className="font-bold">Why are you contacting us?</p>
            </span>
            <span className=" flex flex-wrap  justify-between">
              {contactUs.map((item, index) => (
                <span className=" flex gap-4 mt-8  w-[32%]" key={index}>
                  <input
                    type="checkbox"
                    name={item.name}
                    id={item.id}
                    className=" w-[28px] h-[28px] bg-[#C5CACC] rounded-sm cursor-pointer "
                  />
                  <label htmlFor="" className=" my-auto ">
                    {item.name}
                  </label>
                </span>
              ))}
            </span>
          </span>
          {/* Budget */}
          <span  className="flex flex-col pl-4 ">
            <span className=" flex flex-col gap-3">
                <p className=" font-bold">
                Budgeting Options   
                </p>
                <p>
                Slide to indicate your budget range   
                </p>
            </span>

          </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
