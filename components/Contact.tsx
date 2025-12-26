import Image from "next/image";
import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top dotted decoration */}
      <div className="absolute left-8 top-8 hidden md:block">
        <Image src="/images/dots.svg" alt="" width={120} height={120} />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[48px] font-semibold text-[#141219] mb-6">
              Contact Us
            </h2>

            <p className="text-[16px] leading-7 text-[#CD6028] max-w-md mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s.
            </p>

            <div className="space-y-6 text-[15px] text-[#141219]">
              <div className="flex gap-3 items-start">
                <span className="text-[#CD6028]">📍</span>
                <p>
                  <strong>U.S Office</strong>
                  <br />
                  Aadrila Technologies Inc,
                  <br />
                  840 Green St, 8th Floor
                  <br />
                  Country, Sector-K Aliganj
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-[#CD6028]">📍</span>
                <p>
                  <strong>India Office</strong>
                  <br />
                  Aadrila Technologies Pvt Ltd
                  <br />
                  B-1, 127/K, Sector-K Aliganj
                  <br />
                  Lucknow, Uttar Pradesh 226024
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <ContactForm />
        </div>
      </div>

      {/* FOOTER STRIP */}
      <div className="bg-[#3E6EB4] text-white">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm space-y-2">
          <p>
            © 2025 by Aadrila Technologies Private Limited CIN
            U74999UP2017PTC094688
          </p>
          <p>
            Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Uttar
            Pradesh, India, 226024
          </p>
        </div>
      </div>
    </section>
  );
}
