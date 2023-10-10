import { useEffect, useState } from "react";

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize the state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
