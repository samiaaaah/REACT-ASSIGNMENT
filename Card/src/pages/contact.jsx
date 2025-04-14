import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Hyderabad&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <h1 className="font-bold">Contact Form</h1>
              <input
                type="text"
                placeholder="First name"
                {...register("firstName", { required: true, maxLength: 80 })}
                className="border p-2 rounded"
              />
              {errors.firstName && <span className="text-red-500 text-sm">First name is required</span>}

              <input
                type="text"
                placeholder="Last name"
                {...register("lastName", { required: true, maxLength: 100 })}
                className="border p-2 rounded"
              />
              {errors.lastName && <span className="text-red-500 text-sm">Last name is required</span>}

              <input
                type="tel"
                placeholder="Telephone"
                {...register("telephone", { required: true })}
                className="border p-2 rounded"
              />
              {errors.telephone && <span className="text-red-500 text-sm">Phone number is required</span>}

              <input
                type="submit"
                className="bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600"
              />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
