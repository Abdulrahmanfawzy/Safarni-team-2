import React from "react";
import actvity1 from "../../assets/images/activity-1.png";
import actvity2 from "../../assets/images/activity-2.png";
import actvity3 from "../../assets/images/activity-3.png";
import actvity4 from "../../assets/images/activity-4.png";

const activities = [
  {
    title: "Visit the Grand Plaza",
    description:
      "The heart of Eldoria, surrounded by historical buildings and lively cafes.",
    image: actvity1,
  },
  {
    title: "Explore the Museum",
    description: "Features modern art by local and global artists.",
    image: actvity2,
  },
  {
    title: "Wander lush, green paths",
    description:
      "A serene oasis featuring diverse plant species and tranquil walking paths.",
    image: actvity3,
  },
  {
    title: "Discover Sunset Bay",
    description:
      "A peaceful coastal spot, perfect for golden views and quiet strolls.",
    image: actvity4,
  },
];

const TopActivates = () => {
  return (
    <section className="w-full max-w-[1240px] mx-auto py-8 ">
      <h2 className="text-[24px] font-bold text-[#111928] mb-6">
        Top Activates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="relative h-[200px] w-full overflow-hidden rounded-[12px]">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div>
              <h3 className="text-[18px] font-bold text-[#111928] mb-1">
                {activity.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#6B7280]">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopActivates;
