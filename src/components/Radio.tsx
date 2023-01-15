import React from "react";
import { motion } from "framer-motion";
function Radio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-l font-bold text-blue-500 p-12">Food Step</h4>
      <div>
        <div>
          <input
            className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer
            mb-4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="inline-block text-gray-800">Pasta</label>
        </div>
        <div>
          <input
            className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer
            mb-4"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label className="inline-block text-gray-800">Pizza</label>
        </div>
      </div>
    </motion.div>
  );
}
export default Radio;
