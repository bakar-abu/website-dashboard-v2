import React, { useState } from "react";
import WhyChooseSection from "../WhyChooseSection/WhyChooseSection";
import { TechStack } from "../TechStack/TechStack";
import { RiLoader3Line } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
// Assuming WhyChooseSection is in a separate file
const data = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae quaerat est et culpa unde perferendis voluptates qui quo laudantium!",

    whyChoose: [
      {
        name: "Expertise",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, praesentium. Corrupti delectus cum repellat porro sed ex eaque ipsum sapiente.",
        image: "console_erp_image.jpg",
      },
      {
        name: "Innovative ",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, praesentium. Corrupti delectus cum repellat porro sed ex eaque ipsum sapiente.",
        image: "SaaSbyonsoleDot.jpg",
      },
      {
        name: "Client ",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, praesentium. Corrupti delectus cum repellat porro sed ex eaque ipsum sapiente.",
        image: "console_mvp_image.jpg",
      },
      {
        name: "Customization",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, praesentium. Corrupti delectus cum repellat porro sed ex eaque ipsum sapiente.",
        image: "console_mvp_image.jpg",
      },
    ],
    techStack: [
      { name: "React", type: "BlockchainPlatforms", img: "react.png" },
      { name: "Node.js", type: "BackendTechnologies", img: "nodejs.png" },
      // Add more technologies as needed
    ],
  },
];

export default function ArVrPageEdit() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(data[0]);
  const cardLabels = [
    "Expertise in Immersive Technology",
    "Innovation-Driven Solutions",
    "Client-Centric Collaboration",
    "Tailored Experiences",
  ];
  const handleWhyChooseChange = (descriptions) => {
    setFormData({
      ...formData,
      whyChoose: descriptions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Form submitted", {
        autoClose: 1500, // close after 1.5 seconds
        onClose: () => navigate("/arvr"), // navigate after closing
      });
    }, 1500);

    console.log(formData);
    // dispatch(LandingPageEdit(formData));
    // navigate("/landingPage");
  };
  //tech stack
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleOpenEditModal = (index) => {
    setEditIndex(index);
    setEditItem(formData.techStack[index]);
    setIsEditModalOpen(true);
  };
  const handleDeleteTechStack = (index) => {
    const updatedTechStack = formData.techStack.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      techStack: updatedTechStack,
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTechData((prevFormData) => ({
      ...prevFormData,
      techStack: {
        ...prevFormData.techStack,
        [name]: value,
      },
    }));
  };
  const [techData, setTechData] = useState({
    techStack: {
      name: "",
      type: "",
      img: null, // Assuming img is initially null
    },
  });
  const handleEditInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "img") {
      // If the change is in the image input field
      const file = files[0];
      setEditItem((prevItem) => ({
        ...prevItem,
        img: file,
      }));
    } else {
      // If the change is in other input fields
      setEditItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };
  const handleEditTechStack = () => {
    // Implement logic to update the tech stack item with the edited data
    // For example, you can update the item directly in the tech stack array
    const updatedTechStack = [...formData.techStack];
    updatedTechStack[editIndex] = editItem;
    setFormData({
      ...formData,
      techStack: updatedTechStack,
    });
    // Close the edit modal
    handleCloseEditModal();
  };
  // Function to close the edit modal
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditIndex(null);
    setEditItem(null);
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
    const newTechStackItem = {
      name: techData.techStack.name,
      type: techData.techStack.type,
      img: techData.techStack.img,
    };

    // Add the new object to the techStack array
    setFormData((prevFormData) => ({
      ...prevFormData,
      techStack: [...prevFormData.techStack, newTechStackItem],
    }));
    closeModal();
  };
  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState(null);

  return (
    <div className="w-full mb-6">
      <form
        className="flex justify-center flex-col w-[50%] m-auto gap-2"
        method="post"
        onSubmit={handleSubmit}
      >
        {/* ArVr Edit */}
        <div>
          <h1 className="text-[28px] text-custom-purple mb-4 mt-2 font-bold text-center ">
            Ar/Vr Edit
          </h1>
          <label className="text-webDescrip font-semibold">Description</label>
          <textarea
            className="bg-white shadow-lg text-webDescrip px-3 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              minCards={4}
              maxCards={4}
              onChange={handleWhyChooseChange}
              cardLabels={cardLabels}
            />
          </div>

          {/* Tech Stack */}
          <div className="border border-dashed flex flex-col border-custom-purple p-4 mt-6">
            <div className="flex flex-row  justify-between items-center">
              <label className="text-webDescrip font-semibol text-[20px] ">
                Tech Stack
              </label>

              <button
                type="button"
                onClick={openModal}
                className="text-white btn btn-success"
              >
                <FaPlus />
                Add
              </button>
            </div>

            {console.log("formData", formData?.techStack)}
            <div className="w-full text-webDescrip font-semibold">
              AR Development
            </div>
            {formData?.techStack?.map((item, index) =>
              item?.type === "ARDevelopment" ? (
                <div className="w-full flex" key={item.name}>
                  <div className="w-full flex justify-between">
                    <div>{item?.name}</div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(index)}
                        className="text-success mr-2"
                      >
                        <FaPen />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteTechStack(index)}
                        className="text-error"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ) : null
            )}
            {/* Backend */}
            <div className="w-full text-webDescrip font-semibold">
              VR Development
            </div>
            {formData?.techStack?.map((item, index) =>
              item?.type === "VRDevelopment" ? (
                <div className="w-full flex" key={item.name}>
                  <div className="w-full flex justify-between">
                    <div>{item?.name}</div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(index)}
                        className="text-success mr-2"
                      >
                        <FaPen />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteTechStack(index)}
                        className="text-error"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ) : null
            )}
            {/* Database */}
            <div className="w-full text-webDescrip font-semibold">
              3D Modeling
            </div>
            {formData?.techStack?.map((item, index) =>
              item?.type === "3DModeling" ? (
                <div className="w-full flex" key={item.name}>
                  <div className="w-full flex justify-between">
                    <div>{item?.name}</div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(index)}
                        className="text-success mr-2"
                      >
                        <FaPen />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteTechStack(index)}
                        className="text-error"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ) : null
            )}
            {/* CI/CD */}
            <div className="w-full text-webDescrip font-semibold">
              Interaction Frameworks
            </div>
            {formData?.techStack?.map((item, index) =>
              item?.type === "InteractionFrameworks" ? (
                <div className="w-full flex" key={item.name}>
                  <div className="w-full flex justify-between">
                    <div>{item?.name}</div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(index)}
                        className="text-success mr-2"
                      >
                        <FaPen />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteTechStack(index)}
                        className="text-error"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ) : null
            )}
            {/* VCS */}
            <div className="w-full text-webDescrip font-semibold">
              Platform Compatibility
            </div>
            {formData?.techStack?.map((item, index) =>
              item?.type === "PlatformCompatibility" ? (
                <div className="w-full flex" key={item.name}>
                  <div className="w-full flex justify-between">
                    <div>{item?.name}</div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleOpenEditModal(index)}
                        className="text-success mr-2"
                      >
                        <FaPen />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteTechStack(index)}
                        className="text-error"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
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
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white border border-dashed flex flex-col border-custom-purple p-4 mt-6">
            <label className="text-webDescrip font-semibol text-[20px] ">
              Tech Stack
            </label>
            <div className="mb-4">
              <label className="text-webDescrip font-semibold">Tech Name</label>
              <input
                type="text"
                name="name"
                value={formData?.techStack?.name}
                onChange={handleInputChange}
                placeholder="Tech Name"
                className="bg-white shadow-lg text-webDescrip px-3 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div className="mb-4">
                <label className="text-webDescrip font-semibold">
                  Tech Type
                </label>
                <select
                  name="type"
                  value={formData?.techStack?.type}
                  onChange={handleInputChange}
                  className="bg-white shadow-lg text-webDescrip px-3 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">Select Tech Type</option>
                  <option value="ARDevelopment">AR Development</option>
                  <option value="VRDevelopment">VR Development</option>
                  <option value="3DModeling">3D Modeling</option>
                  <option value="InteractionFrameworks">
                    Interaction Frameworks
                  </option>
                  <option value="PlatformCompatibility">
                    Platform Compatibility
                  </option>
                </select>
              </div>
              <div className="mt-4">
                <label className="text-webDescrip font-semibold mt-2 block">
                  Upload Image
                </label>
                <input
                  type="file"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="bg-white shadow-lg text-webDescrip px-3 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleAddTechStack}
                className="text-white text-[16px] px-4 py-2 bg-blue-500 rounded-full  hover:bg-blue-600"
              >
                Save
              </button>

              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div className="bg-white border border-dashed flex flex-col border-custom-purple p-4 mt-6">
            <label className="text-webDescrip font-semibol text-[20px] ">
              Tech Stack
            </label>
            <div className="mb-4">
              <label className="text-webDescrip font-semibold">Tech Name</label>
              <input
                type="text"
                name="name"
                value={editItem.name}
                onChange={handleEditInputChange}
                placeholder="Tech Name"
                className="bg-white shadow-lg text-webDescrip px-3 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mt-4">
              <label className="text-webDescrip font-semibold mt-2 block">
                Upload Image
              </label>
              <input
                type="file"
                name="img"
                onChange={handleEditInputChange}
                accept="image/*"
                className="bg-white shadow-lg text-webDescrip px-3 text-[16px] border focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mt-4">
              <button
                className="text-white text-[16px] px-4 py-2 bg-blue-500 rounded-full  hover:bg-blue-600"
                onClick={handleEditTechStack}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
