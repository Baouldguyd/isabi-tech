import React from "react";

interface ServiceItem {
  text: string;
  icon: React.ReactNode;
}

interface ServiceSectionProps {
  title: string;
  description?: string;
  servicesInclude?: string;
  items: ServiceItem[];
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  title, 
  description, 
  servicesInclude,
  items 
}) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-bold text-2xl md:text-3xl text-gray-800">{title}</h3>
      {description && <p className="text-gray-600 text-lg">{description}</p>}
      
      {servicesInclude && (
        <div className="h-auto w-auto rounded-lg p-4 bg-blue-50 inline-block mt-4">
          <p className="font-semibold text-lg">{servicesInclude}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full h-auto p-6 flex gap-4 flex-col bg-white rounded-lg shadow-light border border-gray-100 hover:shadow-medium transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            {/* Icon div */}
            <div className="w-12 h-12 bg-blue-100 p-2 rounded-lg flex items-center justify-center" role="img" aria-hidden="true">
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
  );
};

export default ServiceSection;