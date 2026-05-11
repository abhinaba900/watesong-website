"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
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
      toast.success("Your request has been submitted successfully!");
      
      // Reset form and close modal
      setFormData({ name: "", phone: "", email: "" });
      setCaptchaValue(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      onClose();
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[550px] bg-[#2d565a] rounded-2xl p-8 lg:p-12 shadow-2xl border border-white/10"
            style={{
               background: "linear-gradient(145deg, #2d565a 0%, #1c3d40 100%)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            {/* Header */}
            <h2 className="text-white text-[1.8rem] lg:text-[2.2rem] font-medium text-center mb-10 tracking-[0.1em] uppercase opacity-90">
              GET IN TOUCH
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col items-center">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name:"
                  className="w-full bg-[#467377] border border-[#5a8b8f] rounded-full py-3.5 px-8 text-white placeholder:text-white/60 focus:outline-none focus:border-[#a1c6c9] transition-all text-[1.1rem]"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone No.:"
                  className="w-full bg-[#467377] border border-[#5a8b8f] rounded-full py-3.5 px-8 text-white placeholder:text-white/60 focus:outline-none focus:border-[#a1c6c9] transition-all text-[1.1rem]"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email:"
                  className="w-full bg-[#467377] border border-[#5a8b8f] rounded-full py-3.5 px-8 text-white placeholder:text-white/60 focus:outline-none focus:border-[#a1c6c9] transition-all text-[1.1rem]"
                  required
                />
              </div>

              {/* Captcha */}
              <div className="pt-4 pb-4">
                <div className="bg-white p-1 rounded shadow-inner">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    onChange={handleCaptchaChange}
                    theme="light"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#153d3b" }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                type="submit"
                className={`w-fit min-w-[280px] bg-[#1a4d4a] text-white font-medium py-3.5 px-12 rounded-full transition-all tracking-[0.1em] text-[1.1rem] shadow-lg border border-[#4da1a9]/40 uppercase flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                style={{
                  background: "linear-gradient(180deg, #1a4d4a 0%, #153d3b 100%)",
                }}
              >
                {isSubmitting ? "PROCESSING..." : "SCHEDULE YOUR VISIT"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
