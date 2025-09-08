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
import ServiceSection from "./ServiceSection";
import FAQ from "./FAQ";

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
    },
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
    },
  ];

  return (
    <div className="h-auto bg-white rounded-xl shadow-medium font-[manrope-regular] w-full max-w-7xl mx-auto px-4 py-12">
      {/* Our services */}
      <div className="h-auto p-4 md:p-8 flex flex-col gap-4 text-center mb-12">
        <h2 className="font-bold text-3xl md:text-4xl text-gray-800">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Transform your brand with our innovative digital solutions that
          captivate and engage your audience.
        </p>
      </div>
      
      {/* List of services */}
      <div className="px-4 md:px-8 pb-16">
        {/* Website development */}
        <section className="flex flex-col gap-6">
          <h3 className="font-bold text-2xl md:text-3xl text-gray-800">
            Website Development
          </h3>
          <p className="text-gray-600 text-lg">
            At iSabi Tech, our web development team is dedicated to crafting
            visually stunning & functional websites tailored to your needs. We
            leverage the latest technologies and best practices to deliver
            high-performance applications tailored to your specific needs.
          </p>
          
          {/* Our Services */}
          <div className="mt-8 gap-12 flex flex-col">
            <div className="h-auto w-auto rounded-lg p-4 bg-blue-50 inline-block">
              <p className="font-semibold text-lg">Our services include:</p>
            </div>
            
            {/* User Experience */}
            <div className="flex flex-col gap-8">
              <h4 className="text-xl font-semibold text-gray-800">User Experience (UX) Design</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {userExp.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-auto p-6 flex gap-4 flex-col bg-white rounded-lg shadow-light border border-gray-100 hover:shadow-medium transition-all duration-300 ease-in-out hover:-translate-y-1"
                  >
                    {/* Icon div */}
                    <div className="w-12 h-12 bg-blue-100 p-2 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    {/* Text div */}
                    <div>
                      <p className="font-medium text-gray-800">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* User Interface */}
            <div className="flex flex-col gap-8">
              <h4 className="text-xl font-semibold text-gray-800">User Interface (UI) Design</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {userInter.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-auto rounded-lg bg-white flex p-6 gap-4 flex-col shadow-light border border-gray-100 hover:shadow-medium transition-all duration-300 ease-in-out hover:-translate-y-1"
                  >
                    {/* icon */}
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex justify-center items-center">
                      {item.icon}
                    </div>
                    {/* text */}
                    <div>
                      <p className="font-medium text-gray-800">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development */}
            <div className="flex flex-col gap-8">
              <h4 className="text-xl font-semibold text-gray-800">Development</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {development.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-auto rounded-lg bg-white flex p-6 gap-4 flex-col shadow-light border border-gray-100 hover:shadow-medium transition-all duration-300 ease-in-out hover:-translate-y-1"
                  >
                    {/* icon */}
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex justify-center items-center">
                      {item.icon}
                    </div>
                    {/* text */}
                    <div>
                      <p className="font-medium text-gray-800">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Development */}
        <section className="mt-16">
          <ServiceSection
            title="Mobile App Development"
            description="We are exceptional in building intuitive and robust mobile apps that enhance user experience and engagement."
            servicesInclude="Our services include:"
            items={appDevelopment}
          />
        </section>

        {/* Business Promotion */}
        <section className="mt-16">
          <ServiceSection
            title="Business Promotion"
            description="At iSabiTech, we help you maximize visibility & growth through strategic marketing solutions."
            servicesInclude="Our services include:"
            items={businessPromotion}
          />
        </section>

        {/* Brand Design */}
        <section className="mt-16">
          <ServiceSection
            title="Brand Design"
            description="We help you define your business identity with unique & impactful branding designs."
            servicesInclude="Our services include:"
            items={brandDesign}
          />
        </section>

        {/* Project Management */}
        <section className="mt-16">
          <ServiceSection
            title="Project Management"
            description="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
            servicesInclude="Our services include:"
            items={projectManagement}
          />
        </section>

        {/* Agile Methodology */}
        <section className="flex flex-col gap-6 mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Agile Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agileMethodology.map((item, index) => (
              <div
                key={index}
                className="w-full h-auto p-6 flex gap-4 flex-col bg-white rounded-lg shadow-light border border-gray-100 hover:shadow-medium transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                {/* Icon div */}
                <div className="w-12 h-12 bg-blue-100 p-2 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                {/* Text div */}
                <div>
                  <p className="font-medium text-gray-800">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Management */}
        <section className="mt-16">
          <ServiceSection
            title="Social Media Management"
            description="We help in boosting your online presence with targeted social media strategies and management tools."
            servicesInclude="Our services include:"
            items={businessPromotion}
          />
        </section>

        {/* Data Analysis */}
        <section className="mt-16">
          <ServiceSection
            title="Data Analysis"
            description="We leverage data insights to drive informed decision-making and business growth"
            servicesInclude="Our services include:"
            items={dataAnalysis}
          />
        </section>

        <div className="mt-20 flex flex-col items-center justify-center gap-6 py-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-xl">
          <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-white">Peace of Mind, Guaranteed</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-2xl">
            We offer a 12 months Free Technical Support program after
            the project is completed to train your staff on how to
            continuously manage your website.
          </p>
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Contact Us Today
          </a>
        </div>
      </div>
      
      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Services;