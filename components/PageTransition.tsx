"use client";

import { AnimatePresence, motion } from "framer-motion"; //allows components to animate out when they're removed from the React tree.
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type PageTransitionProp = {
  children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProp) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        {/* this div comes in animation when we switch */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary pointer-events-none top-0"
        /> 
        {children}
      </div>
      {/* AnimatePresence works by detecting when direct children are removed from the React tree. */}
    </AnimatePresence>
  );
};

export default PageTransition;
