import ArrowUpDownIcon from "@/assets/Icon/ArrowUpDownIcon";
import BackEndIcon from "@/assets/Icon/BackEndIcon";
import CodeIcon from "@/assets/Icon/CodeIcon";
import CustomIcon from "@/assets/Icon/CustomIcon";
import CursorBlueIcon from "@/assets/Icon/MouseBlueIcon";
import MouseLineIcon from "@/assets/Icon/MouseLineIcon";
import MouseRoundIcon from "@/assets/Icon/MouseRoundIcon";
import RespIcon from "@/assets/Icon/RespIcon";
import TypoIcon from "@/assets/Icon/TypoIcon";
import VisualIcon from "@/assets/Icon/VisualIcon";

const Services = () => {
  const userExp = [
    {
      text: "User Research and Persona Development",
      icon: <CursorBlueIcon />,
    },
    {
      text: "Information Architecture and Wireframing",
      icon: <MouseLineIcon />,
    },
    {
      text: "Interactive Prototying and User Testing",
      icon: <MouseRoundIcon />,
    },
    {
      text: "UI Design and Visual Branding",
      icon: <ArrowUpDownIcon />,
    },
  ];

  const userInter = [
    {
      text: "Intuitive and Visually Appealing Interface Design",
      icon: <MouseLineIcon />,
    },
    {
      text: "Custom Iconography and Illustration",
      icon: <CustomIcon />,
    },
    {
      text: "Typography and Color Palette Selection",
      icon: <TypoIcon />,
    },
    {
      text: "Responsive Design for Various Devices",
      icon: <RespIcon />,
    },
  ];

  const userInt = [
    {
      text: "Intuitive and Visually Appealing Interface Design",
      icon: <MouseLineIcon />,
    },
    {
      text: "Custom Iconography and Illustration",
      icon: <CustomIcon />,
    },
    {
      text: "Typography and Color Palette Selection",
      icon: <TypoIcon />,
    },
    {
      text: "Responsive Design for Various Devices",
      icon: <RespIcon />,
    },
  ];

  const development = [
    {
      text: " Front-End Development (HTML, CSS, ReactJS)",
      icon: <CodeIcon />,
    },
    {
      text: "Back-End Development (NodeJS, Python, PHP)",
      icon: <BackEndIcon />,
    },
  ];

  return (
    <div className=" h-[80rem] bg-[#EBEDEE] rounded-md font-[manrope-regular] w-[90%] m-auto">
      {/* Our services */}
      <div className=" h-[10rem]  p-7 flex flex-col gap-2">
        <h1 className="  font-[manrope-extraBold] text-center text-[30px]  font-bold  ">
          {" "}
          Our Services
        </h1>
        <p className=" text-center font-[manrope-light] text-[16px] ">
          Transform your brand with our innovative digital solutions that
          captivate and engage your audience.
        </p>
      </div>
      {/* List of services */}
      <div className=" px-6">
        {/* Website development */}
        <div className=" flex flex-col gap-4">
          <p className=" font-[manrope-bold] md:text-2xl ">
            Website Development
          </p>
          <p className=" font-[manrope-light] ">
            At iSabiTech, our web development team is dedicated to crafting
            visually stunning & functional websites tailored to your needs. We
            leverage the latest technologies and best practices to deliver
            high-performance applications tailored to your specific needs.
          </p>
          {/* Our Services */}
          <div className=" mt-6 gap-12 flex flex-col">
          <div className=" h-[2.5rem] w-[12rem] rounded-md p-2 bg-[#F5F8FA]">
            <p className=" font-[manrope-semibold]">Our services include:</p>
          </div>
          {/* User Experience */}
          <span className=" flex flex-col  gap-8">
            <p>User Experience (UX) Design</p>
            <div className=" flex gap-4 justify-between">
              {userExp.map((item, index) => (
                <div
                  key={index}
                  className=" w-[256px] h-[160px] p-4 flex gap-4 flex-col bg-[#F5F8FA] rounded-md"
                >
                  {/* Icon div */}
                  <div className=" w-[40px] h-[40px] bg-[#EBEDEE] p-2 rounded-md  flex items-center justify-center border-2">
                    {item.icon}
                  </div>
                  {/* Text div */}
                  <div>
                    <p className=" font-[manrope-regular]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </span>
          {/* User Interface */}
          <span className=" flex flex-col gap-8">
            <p>User Interface (UI) Design</p>
            <div className=" flex gap-4 justify-between">
              {userInter.map((item, index) => (
                <div
                  key={index}
                  className=" w-[256px] h-[160px]  rounded-md bg-[#F5F8FA] flex p-4 gap-4 flex-col"
                >
                  {/* icon */}
                  <div className=" w-[40px] h-[40px] rounded-md bg-[#EBEDEE]  flex justify-center items-center border-2">
                    {item.icon}
                  </div>
                  {/* text */}
                  <div>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </span>

          {/* Development */}

          <span className=" flex flex-col gap-8">
            <p> Development</p>
            <div className=" flex gap-[10rem] justify-start">
              {development.map((item, index) => (
                <div
                  key={index}
                  className=" w-[256px] h-[160px]  rounded-md bg-[#F5F8FA] flex p-4 gap-4 flex-col"
                >
                  {/* icon */}
                  <div className=" w-[40px] h-[40px] rounded-md bg-[#EBEDEE]  flex justify-center items-center border-2">
                    {item.icon}
                  </div>
                  {/* text */}
                  <div>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
