import { motion } from "framer-motion";

const services = [
  { name: "WEBSITE DEVELOPMENT", link: "" },
  { name: "MOBILE APP DEVELOPMENT" },
  { name: "BRAND DESIGN" },
  { name: "BUSINESS PROMOTION" },
];

export default function Slider() {
  return (
    <div className="relative overflow-hidden h-[56px] w-full bg-[#F5F8FA] mt-28 ml-5">
      <motion.div
        className="flex justify-start items-center gap-8"
        animate={{
          x: ["0%", "-100%"], // Start at 0% and scroll to -100%
        }}
        transition={{
          repeat: Infinity, // Loop infinitely
          duration: 10, // Adjust the scrolling speed
          ease: "linear", // Smooth, continuous scrolling
        }}
      >
        {services.concat(services).map((item, index) => (
          <span
            key={index}
            className="flex gap-2 items-center justify-center whitespace-nowrap px-4 py-4"
          >
            <span className="w-[10px] h-[10px] bg-[#0A4FBB] rounded-full">
              {/* Add your DotIcon component here */}
            </span>
            <span className="text-[#59595A] font-[manrope-semibold]">
              {item.name}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
