import { motion } from "framer-motion";
import { ReactNode } from "react";

const AnimatedPage = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeInOut" } }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: "easeInOut" } }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
