import React, { useState } from "react";
import WhyChooseSection from "../WhyChooseSection/WhyChooseSection";
import { TechStack } from "../TechStack/TechStack";
import { ToastContainer, toast } from "react-toastify";
import { RiLoader3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
// Assuming WhyChooseSection is in a separate file

export default function AiPageEdit() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quaerat est et culpa unde perferendis voluptates qui quo laudantium!",

    whyChoose: [
      "Expertise",
      "Innovation at the Core",
      "Collaboration for Success",
      "Tailored Solutions",
    ],
    techStack: [
      { name: "React", type: "Frontend", img: "react.png" },
      { name: "Node.js", type: "Backend", img: "nodejs.png" },
    ],
  });
  const cardLabels = [
    "Expertise",
    "Innovation at the Core",
    "Collaboration for Success",
    "Tailored Solutions",
  ];
  const handleWhyChooseChange = (descriptions) => {
    setFormData({
      ...formData,
      whyChoose: descriptions,
    });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedTechStack = [...formData.techStack];
    updatedTechStack[index][name] = value;
    setFormData({
      ...formData,
      techStack: updatedTechStack,
    });
  };
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const updatedTechStack = [...formData.techStack];
    updatedTechStack[index]["img"] = URL.createObjectURL(file);
    setFormData({
      ...formData,
      techStack: updatedTechStack,
    });
  };
  const handleAddTechStack = () => {
    setFormData({
      ...formData,
      techStack: [...formData.techStack, { name: "", type: "", img: "" }],
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Form submitted", {
        autoClose: 1500, // close after 1.5 seconds
        onClose: () => navigate("/ai"), // navigate after closing
      });
    }, 1500);

    console.log(formData);
    // dispatch(LandingPageEdit(formData));
    // navigate("/landingPage");
  };

  return (
    <div className="w-full mb-6">
      <form
        className="flex justify-center flex-col w-[50%] m-auto gap-2"
        method="post"
        onSubmit={handleSubmit}
      >
        {/* Custom Service Model */}
        <div>
          <h1 className="text-[28px] text-custom-purple mb-4 mt-2 font-bold text-center ">
            Ai Edit
          </h1>
          <label className="text-webDescrip font-semibold">Description</label>
          <textarea            className="bg-white shadow-lg text-webDescrip px-3 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Custom Service Description"
          />

          <div className="border border-dashed border-custom-purple p-4 mt-6 ">
            <label className="text-webDescrip font-semibol text-[20px] mx-auto">
              Why Choose Us
            </label>
            <WhyChooseSection
              descriptions={formData.whyChoose}
              minCards={3}
              maxCards={4}
              onChange={handleWhyChooseChange}
              cardLabels={cardLabels}
            />
          </div>

          {/* Tech Stack */}
          <TechStack
            techStack={formData.techStack}
            onChange={handleChange}
            onImageChange={handleImageChange}
            onAddTechStack={handleAddTechStack}
          />
        </div>

        {/* Submit button */}
        <div className="w-full flex justify-center items-center mt-4 mb-4">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className={`text-white text-[16px] w-[300px] h-[48px] px-5 bg-gradient-to-r from-fromclr to-toclr hover:bg-gradient-to-r hover:from-toclr hover:to-fromclr rounded-full flex justify-center items-center focus:outline-none relative`}
          >
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <RiLoader3Line className="animate-spin h-5 w-5 mr-3" />
                <span>Submitting</span>
              </div>
            ) : (
              <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                Submit
              </p>
            )}
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
