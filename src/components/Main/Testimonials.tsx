import Star from "@/assets/Icon/Star";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      name: "John Doe",
      type: "CEO, XYZ Company",
      statement:
        "Isabi Technologies exceeded our expectations! Their dedication and expertise helped us reach new heights in our online presence.",
    },
    {
        image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
        name: "Jane Smith",
        type: "Founder, ABC Inc.",
        statement:
          "Isabi Technologies exceeded our expectations!. Working with Isabi was a game-changer! Their creativity and professionalism set them apart from the rest.",
      },
      {
        image: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
        name: "Patrick Brown",
        type: "CEO, XYZ Company",
        statement:
          "Isabi Technologies exceeded our expectations! Their dedication and expertise helped us reach new heights in our online presence.",
      }
  ];
  return (
    <div className="mt-[5rem] font-[manrope-regular] md:w-[90%] px-4  m-auto">
      {/* Testimonials */}
      <div>
        <p className="text-center font-extrabold md:text-[1.5rem] mb-[0.7rem] text-[1.5rem]">
          Testimonials From Clients
        </p>
        <p className="  text-center mb-[4rem]">
          Take a look at what our satisfied clients has to say by collaborating
          with us to empower their business potential.
        </p>
      </div>

      <div className=" flex  justify-between md:flex-row flex-col gap-4">
        {testimonials.map((item, index) =>(
            
            <div key={index} className=" md:w-[370px] w-full h-[266px]  flex flex-col border-[2px] border-[#FFFFFF] rounded-lg">
              {/* Profile */}
              <div className=" h-[40%]  px-6 flex justify-between items-center gap-5 ">
                <div className=" flex gap-2">
                  {/* image */}
                  <span className="w-[50px] h-[50px] rounded-full ">
                    <img src={item.image} alt="profile" className="w-full h-full rounded-full" />
                  </span>
                  {/* name */}
                  <span>
                    <p className=" text-[16px] font-bold">{item.name}</p>
                    {/* type */}
                    <p className=" text-[14px]">{item.type}</p>
                  </span>
                </div>
    
                {/* star */}
                <span className=" flex justify-between gap-1">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </span>
              </div>
              {/* Testimonial statement */}
              <div className="h-[60%]  my-auto px-6 pt-8">
                <p className="w-[95%] text-sm">
                {item.statement}
                </p>
              </div>
            </div>
          
         
        ))}
      </div>
      <div className=" flex justify-center mt-[5rem] ">
    <button className=" bg-[#0A4FBB] px-[20px] py-[16px]  text-[#EBEDEE] rounded-lg">View All Testimonials</button>
      </div>
    </div>
  );
};

export default Testimonials;
