"use client";

import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { toast } from "sonner";

export const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!captchaValue) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Handle form submission logic here
      console.log("Form Data:", formData);
      console.log("Captcha Value:", captchaValue);

      toast.success("Your visit has been booked successfully!");

      // Reset form
      setFormData({ name: "", phone: "", email: "" });
      setCaptchaValue(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to book visit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-[8vh] px-[5vw] z-10 font-montserrat ">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-bold text-white text-[2rem] mb-6 lg:text-[2.5rem] xl:text-[2.4vw] lg:opacity-100 xl:opacity-100 mb-[4px] lg:mb-[2vh] xl:mb-[4vh]  tracking-widest drop-shadow-lg uppercase">
          GET IN TOUCH
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name:"
                className="w-full bg-white/5 border border-white/20 rounded-full py-3.5 px-8 text-white placeholder:text-white/60 focus:outline-none focus:border-[#4da1a9] focus:bg-white/10 transition-all text-[1rem] lg:text-[1vw] shadow-inner"
                required
              />
            </div>
            <div className="relative group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone No.:"
                className="w-full bg-white/5 border border-white/20 rounded-full py-3.5 px-8 text-white placeholder:text-white/60 focus:outline-none focus:border-[#4da1a9] focus:bg-white/10 transition-all text-[1rem] lg:text-[1vw] shadow-inner"
                required
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email:"
                className="w-full bg-white/5 border border-white/20 rounded-full py-3.5 px-8 text-white placeholder:text-white/60 focus:outline-none focus:border-[#4da1a9] focus:bg-white/10 transition-all text-[1rem] lg:text-[1vw] shadow-inner"
                required
              />
            </div>
          </div>

          {/* Bottom Row: Captcha and Button */}
          <div className="flex flex-col md:flex-row items-center justify-end gap-6 lg:gap-10 mt-4">
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <div className="bg-transparent overflow-hidden scale-90 md:scale-100 origin-left">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={handleCaptchaChange}
                  theme="light"
                />
              </div>
            </div>

            {/* Middle Spacer for Desktop */}

            <div className="flex justify-center md:justify-end w-fit">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#153d3b" }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className={`w-full md:w-fit bg-[#1a4d4a] text-white font-normal py-4 px-10 rounded-full transition-all tracking-[0.1em] text-[1.1rem] lg:text-[1.2vw] shadow-lg border border-[#4da1a9]/40 uppercase flex items-center justify-center ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                style={{
                  background:
                    "linear-gradient(180deg, #1a4d4a 0%, #153d3b 100%)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                }}
              >
                {isSubmitting ? "PROCESSING..." : "BOOK YOUR VISIT"}
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
