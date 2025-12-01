"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* Convert Shorts link → Clean embed link */
const cleanEmbed = (url) => {
  let id = "";

  if (url.includes("shorts/")) {
    id = url.split("shorts/")[1].split("?")[0];
  } else if (url.includes("v=")) {
    id = url.split("v=")[1].split("&")[0];
  }

  return `https://www.youtube.com/embed/${id}?autoplay=0&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1&enablejsapi=1&loop=1&playlist=${id}`;
};

const reels = [
  { id: 1, original: "https://youtube.com/shorts/H_rBNXV6-zY?si=qDhDoObSLRC9HEq9" },
  { id: 2, original: "https://youtube.com/shorts/q0lI6s9voVU?si=-qgSBFMUeP7SZPkx" },
  { id: 3, original: "https://youtube.com/shorts/UZwhU9VeVHs?si=-GmWWVnkpjgYlR1r" },
  { id: 4, original: "https://youtube.com/shorts/jWARuEBdAJI?si=4iZN13uVJ1BjkbnU" },
];

const HappyCustomers = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const iframeRefs = useRef({});

  /* Pause all except active */
  useEffect(() => {
    Object.keys(iframeRefs.current).forEach((id) => {
      const iframe = iframeRefs.current[id];
      if (!iframe) return;

      if (Number(id) === activeVideo) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      } else {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    });
  }, [activeVideo]);

  return (
    <section className="w-full py-14 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
      <div className="max-w-6xl mx-auto px-4">

        {/* ✨ Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Happy Customers 🎉
        </motion.h2>

        {/* Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
            place-items-center
          "
        >
          {reels.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="
                bg-white rounded-xl shadow-xl p-3 
                flex items-center justify-center cursor-pointer
                aspect-[9/16] overflow-hidden
                w-[85%] max-w-[330px]
                sm:w-full sm:max-w-none
                transition
              "
              onClick={() => setActiveVideo(item.id)}
            >
              <iframe
                loading="lazy"
                ref={(el) => (iframeRefs.current[item.id] = el)}
                className="rounded-lg w-full h-full object-cover"
                src={cleanEmbed(item.original)}
                title="Happy Customer"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </motion.div>
          ))}
        </div>

        {/* ⭐ Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <motion.a
            href="https://youtube-shorts-zeta.vercel.app"
            target="_blank"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
          >
            ⭐ Watch More Reviews
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default HappyCustomers;
