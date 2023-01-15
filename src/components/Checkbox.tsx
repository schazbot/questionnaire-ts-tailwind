import React from "react";
import { motion } from "framer-motion";
function Checkbox() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="text-l font-bold text-blue-500 p-12">Pets Step</h4>
      <div className="flex items-center p-12 mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value="cats"
          className="w-4 h-4 mb-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 mb-4 text-sm text-black-900 dark:text-black-300">
          I like cats
        </label>
      </div>
      <div className="flex items-center p-12">
        <input
          id="checked-checkbox"
          type="checkbox"
          value="dogs"
          className="w-4 h-4 mb-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 mb-4 text-sm text-black-900 dark:text-black-300">
          I like dogs
        </label>
      </div>
    </motion.div>
  );
}
export default Checkbox;
