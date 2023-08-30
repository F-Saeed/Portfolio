// React
import { useRef, useEffect } from "react";

// Animation
import { motion, useAnimation, useInView } from "framer-motion";

const containerVariarants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const Reveal = ({ children, width = "fit-content" }) => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width }}>
      <motion.div
        variants={containerVariarants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        {isInView && children}
      </motion.div>
    </div>
  );
};

export default Reveal;
