import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="bg-gray-500 w-full h-full">
      <Image src={images[currentImageIndex]} alt="" height={800} width={800} />
    </div>
    // <div className="w-full h-full relative">
    //   <AnimatePresence>
    //     {images.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => (
    //       <motion.div
    //         key={image}
    //         initial={{ y: 50, opacity: 0, scale: 1 - (index * 0.05) }}
    //         animate={{ y: (index * 50), x: (50 * index), opacity: 1, scale: 1 - (index * 0.05) }}
    //         exit={{ y: -50, opacity: 0, scale: (index === 0) ? 1.1 : 1 - (index * 0.05) }}
    //         transition={{ duration: 0.5 }}
    //         style={{ zIndex: -index }}
    //         className="w-full h-full absolute top-0 left-0"
    //       >
    //         <Image src={image} alt="" fill style={{objectFit: "contain"}} />

    //       </motion.div>
    //     ))}
    //   </AnimatePresence>
    //   <button onClick={handleNextImage}>Next Image</button>
    // </div>
  );
};

export default Carousel;