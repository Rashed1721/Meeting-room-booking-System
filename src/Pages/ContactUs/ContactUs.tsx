import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="mb-6 text-center">
        <p>Email: contact@company.com</p>
        <p>Phone: +1 (234) 567-890</p>
        <p>Office: 123 Main St, Suite 101, City, Country</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        <div className="flex flex-col animate-fadeIn">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="p-2 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col animate-fadeIn">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email",
              },
            })}
            className="p-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col animate-fadeIn">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            {...register("subject", { required: "Subject is required" })}
            className="p-2 border border-gray-300 rounded"
          />
          {errors.subject && (
            <p className="text-red-500">{errors.subject.message}</p>
          )}
        </div>

        <div className="flex flex-col animate-fadeIn">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="p-2 border border-gray-300 rounded h-24"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
