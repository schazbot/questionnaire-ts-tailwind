import React from "react";
import { motion } from "framer-motion";

function Greeting() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header>
        <h1>Questionnaire</h1>
        <h3>Hello! 👋 This is the first page</h3>
        <p>
          Answer some questions based on your subscription, and see your results
          at the end
        </p>
      </header>
    </motion.div>
  );
}
export default Greeting;
