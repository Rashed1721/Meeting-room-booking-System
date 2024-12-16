import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // handle form submission (e.g., send to an API)
  };

  return (
    <div className="flex flex-col items-center  p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-12 mb-28 space-y-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-4 animate-fadeIn">
        Contact Us
      </h2>
      <div className="space-y-2 text-center animate-fadeIn">
        <p className="flex items-center justify-center space-x-2 text-gray-600">
          <FiMail className="text-blue-600" /> <span>contact@company.com</span>
        </p>
        <p className="flex items-center justify-center space-x-2 text-gray-600">
          <FiPhone className="text-blue-600" /> <span>+1 (234) 567-890</span>
        </p>
        <p className="flex items-center justify-center space-x-2 text-gray-600">
          <FiMapPin className="text-blue-600" />{" "}
          <span>123 Main St, Suite 101, City, Country</span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-6 animate-fadeIn"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="subject"
            className="text-sm font-semibold text-gray-700"
          >
            Subject
          </label>
          <input
            id="subject"
            {...register("subject", { required: "Subject is required" })}
            className="p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a subject"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="p-3 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            placeholder="Write your message here..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
