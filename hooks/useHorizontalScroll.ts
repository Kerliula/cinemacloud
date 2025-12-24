import { useRef, useEffect, useState } from "react";

export const useHorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowArrows(scrollWidth > clientWidth);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(checkScroll, 100);
    const handleResize = () => checkScroll();

    window.addEventListener("resize", handleResize);
    scrollRef.current?.addEventListener("scroll", checkScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
      scrollRef.current?.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right", amount = 400) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return { scrollRef, showArrows, canScrollLeft, canScrollRight, scroll };
};
