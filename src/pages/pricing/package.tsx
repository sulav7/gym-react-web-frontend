import { motion } from "framer-motion";
import PricingCards from "../about/pricing";

export function Package() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <h1 className="text-center ">
          Our Packages & <span className="text-primary">Pricing</span>
        </h1>
        <PricingCards />
      </motion.div>
    </>
  );
}
