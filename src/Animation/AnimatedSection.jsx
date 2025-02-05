import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from 'prop-types';  // استيراد PropTypes

const AnimatedSection = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`rounded-lg my-1 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// تحديد التحقق من النوع
AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,  // تحقق من أن الـ children موجودة
  className: PropTypes.string,
};

export default AnimatedSection;
