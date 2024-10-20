
import React from "react";
import TestimonialCard from "../testimonial";
import Client1 from "../../../app/assets/client1.png";
import Client2 from "../../../app/assets/client2.png";
import Client3 from "../../../app/assets/client3.png";

const testimonials = [
  {
    name: "John Doe",
    designation: "CEO, Company XYZ",
    testimonial: "This service has been a game changer for our business!",
    image: Client1, 
  },
  {
    name: "Jane Smith",
    designation: "Marketing Manager, Company ABC",
    testimonial: "Exceptional support and amazing results!",
    image: Client2, 
  },
  {
    name: "Mike Johnson",
    designation: "Product Owner, Company 123",
    testimonial: "Highly recommend! Will definitely use again.",
    image: Client3, 
  },
];

const TestimonialWrapper = () => {
  return (
    <div className="container py-12 px-4 my-12" id="testimonials">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-primary active">Wall of Love</p>
        <h2 className="heading-2 text-white text-center mb-8">What Our Clients Say!</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            designation={testimonial.designation}
            testimonial={testimonial.testimonial}
            image={testimonial.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialWrapper;
