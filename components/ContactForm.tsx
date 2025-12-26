"use client";

import { Formik, Form, Field } from "formik";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  inquiryType: "",
  message: "",
};

export default function ContactForm() {
  return (
    <div
      className="
        w-[684px]
        h-[664px]
        rounded-[20px]
        border border-[#E5E7EB]
        bg-white
        px-[50px]
        py-[80px]
        shadow-[0_0_40px_rgba(0,0,0,0.04)]
      "
    >
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form className="flex flex-col gap-[24px]">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-[24px]">
            <Field
              name="fullName"
              placeholder="Full Name"
              className="h-[52px] rounded-[10px] border border-[#D1D5DB] px-[18px] text-[15px] placeholder:text-[#9CA3AF] focus:outline-none"
            />
            <Field
              name="email"
              placeholder="Email"
              className="h-[52px] rounded-[10px] border border-[#D1D5DB] px-[18px] text-[15px] placeholder:text-[#9CA3AF] focus:outline-none"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-[24px]">
            <Field
              name="phone"
              placeholder="Phone Number"
              className="h-[52px] rounded-[10px] border border-[#D1D5DB] px-[18px] text-[15px] placeholder:text-[#9CA3AF] focus:outline-none"
            />
            <Field
              name="company"
              placeholder="Company Name"
              className="h-[52px] rounded-[10px] border border-[#D1D5DB] px-[18px] text-[15px] placeholder:text-[#9CA3AF] focus:outline-none"
            />
          </div>

          {/* Inquiry Type */}
          <Field
            name="inquiryType"
            placeholder="Inquiry Type"
            className="h-[52px] rounded-[10px] border border-[#D1D5DB] px-[18px] text-[15px] placeholder:text-[#9CA3AF] focus:outline-none"
          />

          {/* Message */}
          <Field
            as="textarea"
            name="message"
            placeholder="Message"
            className="h-[180px] resize-none rounded-[10px] border border-[#D1D5DB] px-[18px] py-[14px] text-[15px] placeholder:text-[#9CA3AF] focus:outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="mt-[8px] h-[56px] w-full rounded-full bg-[#3B6CB7] text-[16px] font-semibold text-white"
          >
            Send Inquiry
          </button>
        </Form>
      </Formik>
    </div>
  );
}
