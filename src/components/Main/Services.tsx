import AnalysisIcon from "@/assets/Icon/AnalysisIcon";
import ArrowUpDownIcon from "@/assets/Icon/ArrowUpDownIcon";
import BackEndIcon from "@/assets/Icon/BackEndIcon";
import BugIcon from "@/assets/Icon/BugIcon";
import CodeIcon from "@/assets/Icon/CodeIcon";
import CollateralIcon from "@/assets/Icon/CollateralIcon";
import CustomIcon from "@/assets/Icon/CustomIcon";
import DemoIcon from "@/assets/Icon/DemoIcon";
import DeployIcon from "@/assets/Icon/DeployIcon";
import FeedbackIcon from "@/assets/Icon/FeedbackIcon";
import FunctionIcon from "@/assets/Icon/FunctionIcon";
import GuidelineIcon from "@/assets/Icon/GuidelineIcon";
import IdentityIcon from "@/assets/Icon/IdentityIcon";
import CursorBlueIcon from "@/assets/Icon/MouseBlueIcon";
import MouseLineIcon from "@/assets/Icon/MouseLineIcon";
import MouseRoundIcon from "@/assets/Icon/MouseRoundIcon";
import NativeIcon from "@/assets/Icon/NativeIcon";
import PlanIcon from "@/assets/Icon/PlanIcon";
import ProjectIcon from "@/assets/Icon/ProjectIcon";
import ReactNativeIcon from "@/assets/Icon/ReactNativeIcon";
import RespIcon from "@/assets/Icon/RespIcon";
import ScrumIcon from "@/assets/Icon/ScrumIcon";
import SecurityIcon from "@/assets/Icon/SecurityIcon";
import SprintIcon from "@/assets/Icon/SprintIcon";
import StrategyIcon from "@/assets/Icon/StrategyIcon";
import TaskIcon from "@/assets/Icon/TaskIcon";
import TypoIcon from "@/assets/Icon/TypoIcon";
import UiUxIcon from "@/assets/Icon/UiUxIcon";
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

  const appDevelopment = [
    {
      text: "Native iOS and Andriod App Development",
      icon: <NativeIcon />,
    },
    {
      text: "Cross-Platform Development (React Native, Flutter)",
      icon: <ReactNativeIcon />,
    },
    {
      text: "App Prototyping and UI/UX Design Integration",
      icon: <UiUxIcon />,
    },
    {
      text: "App Testing, Deployment, and Maintenance",
      icon: <DeployIcon />,
    },
  ];

  const businessPromotion = [
    {
      text: "Native iOS and Andriod App Development",
      icon: <NativeIcon />,
    },
    {
      text: "Cross-Platform Development (React Native, Flutter)",
      icon: <ReactNativeIcon />,
    },
    {
      text: "App Prototyping and UI/UX Design Integration",
      icon: <UiUxIcon />,
    },
    {
      text: "App Testing, Deployment, and Maintenance",
      icon: <DeployIcon />,
    },
  ];

  const brandDesign = [
    {
      text: "Logo Design and Visual Identity Development",
      icon: <IdentityIcon />,
    },
    {
      text: "Brand Strategy and Positioning",
      icon: <StrategyIcon />,
    },
    {
      text: "Brand Guidelines and Style Guides",
      icon: <GuidelineIcon />,
    },
    {
      text: " Marketing Collateral Design (Business Cards, etc.)",
      icon: <CollateralIcon />,
    },
  ];

  const projectManagement = [
    {
      text: "Requirements Gathering and Analysis",
      icon: <AnalysisIcon />,
    },
    {
      text: "Project Roadmap and Timeline Development",
      icon: <ProjectIcon />,
    },
    {
      text: "Resource Allocation and Task Assignment",
      icon: <TaskIcon />,
    },
    
  ];

  const agileMethodology = [
    {
      text: "Iterative Development and Sprints",
      icon: <SprintIcon />,
    },
    {
      text: "Scrum Methodology Implementation",
      icon: <ScrumIcon />,
    },
    {
      text: "Regular Progress Updates and Demos",
      icon: <DemoIcon />,
    },
    {
      text: "Continuous Improvement and Feedback Incorporation",
      icon: <FeedbackIcon />,
    }
    
  ];

  const dataAnalysis = [
    {
      text: "Iterative Development and Sprints",
      icon: <PlanIcon />,
    },
    {
      text: "Scrum Methodology Implementation",
      icon: <FunctionIcon />,
    },
    {
      text: "Regular Progress Updates and Demos",
      icon: <SecurityIcon />,
    },
    {
      text: "Continuous Improvement and Feedback Incorporation",
      icon: <BugIcon />,
    }
    
  ];



  return (
    <div className=" h-[300rem] bg-[#EBEDEE] rounded-md font-[manrope-regular] w-[90%] m-auto ">
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

        {/* Mobile App Development */}
        <div className=" flex flex-col gap-4 ">
          <p className=" font-[manrope-bold] md:text-2xl mt-6 ">
            Mobile App Development
          </p>
          <p className=" font-[manrope-light] ">
            We are exceptional in building intuitive and robust mobile apps that
            enhance user experience and engagement.
          </p>

          <div className=" h-[2.5rem] w-[12rem] rounded-md p-2 bg-[#F5F8FA] mt-10">
            <p className=" font-[manrope-semibold]">Our services include:</p>
          </div>
          <div className=" flex gap-4 justify-between">
            {appDevelopment.map((item, index) => (
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

          {/* Business Promotion */}
          <div className=" flex flex-col gap-4 ">
            <p className=" font-[manrope-bold] md:text-2xl mt-6 ">
              Business Promotion
            </p>
            <p className=" font-[manrope-light] ">
              At iSabiTech, we help you maximize visibility & growth through
              strategic marketing solutions.
            </p>
            <div className=" h-[2.5rem] w-[12rem] rounded-md p-2 bg-[#F5F8FA] mt-10">
              <p className=" font-[manrope-semibold]">Our services include:</p>
            </div>

            <div className=" flex gap-4 justify-between">
              {businessPromotion.map((item, index) => (
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

              {/* Brand Design */}
              <div  className=" flex flex-col gap-4 ">
              <p className=" font-[manrope-bold] md:text-2xl mt-6 ">
              Brand Design
            </p>
            <p className=" font-[manrope-light] ">
            We help you define your business identity with unique & impactful branding designs..
            </p>
            <div className=" h-[2.5rem] w-[12rem] rounded-md p-2 bg-[#F5F8FA] mt-10">
              <p className=" font-[manrope-semibold]">Our services include:</p>
            </div>
            <div>Branding and Identity</div>
            <div className=" flex gap-4 justify-between">
              {brandDesign.map((item, index) => (
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

            {/* Project Management */}
            <div  className=" flex flex-col gap-4 ">
              <p className=" font-[manrope-bold] md:text-2xl mt-6 ">
              Project Management
            </p>
            <p className=" font-[manrope-light] ">
            Our experienced project management team ensures that your projects are delivered on time, within budget,
             and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.
            </p>
            <div className=" h-[2.5rem] w-[12rem] rounded-md p-2 bg-[#F5F8FA] mt-10">
              <p className=" font-[manrope-semibold]">Our services include:</p>
            </div>
            <div>Project Planning and Scoping</div>
            <div className=" flex flex-row gap-[10rem] ">
              {projectManagement.map((item, index) => (
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

            <div>
            <div>Agile Methodology</div>
            <div className="flex gap-4 justify-between  ">
              {agileMethodology.map((item, index) => (
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

            {/* Social Media Management */}
          <div className=" flex flex-col gap-4 ">
            <p className=" font-[manrope-bold] md:text-2xl mt-6 ">
            Social Media Management
            </p>
            <p className=" font-[manrope-light] ">
            We help in boosting your online presence with targeted social media strategies and management tools.
            </p>
            <div className=" h-[2.5rem] w-[12rem] rounded-md p-2 bg-[#F5F8FA] mt-10">
              <p className=" font-[manrope-semibold]">Our services include:</p>
            </div>

            <div className=" flex gap-4 justify-between">
              {businessPromotion.map((item, index) => (
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
            </div>

            {/* Data Analysis */}
          <div className=" flex flex-col gap-4 ">
            <p className=" font-[manrope-bold] md:text-2xl mt-6 ">
            Data Analysis
            </p>
            <p className=" font-[manrope-light] ">
            We leverage data insights to drive informed decision-making and business growth
            </p>
            <div className=" h-[2.5rem] w-[12rem] rounded-md p-2 bg-[#F5F8FA] mt-10">
              <p className=" font-[manrope-semibold]">Our services include:</p>
            </div>

            <div className=" flex gap-4 justify-between">
              {dataAnalysis.map((item, index) => (
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
            </div>
              </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>

  );
};

export default Services;
