import { useRef, useMemo, useCallback, useEffect, useState } from "react";
import Icon from "./icon-wrapper";

export default function Carousel() {
  const imageUrls = [
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506485777791-e120681573dd?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482575832494-771f74bf6857?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Calculate scroll amount to avoid recalculating it each time
  const scrollAmount = useMemo(() => {
    return scrollRef.current ? scrollRef.current.offsetWidth * 0.2 : 0;
  }, [scrollRef.current?.offsetWidth]);

  // Scroll carousel
  const handleScroll = useCallback(
    (direction: string) => {
      if (scrollRef.current && scrollAmount) {
        scrollRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    },
    [scrollAmount]
  );

  // Scroll to a specific index
  const scrollToIndex = useCallback((index: number) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * index;
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isAutoScrolling) {
      intervalId = setInterval(() => {
        const nextIndex = (activeIndex + 1) % imageUrls.length;
        scrollToIndex(nextIndex);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [activeIndex, isAutoScrolling, imageUrls.length, scrollToIndex]);

  // Update active index on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const scrollWidth = scrollRef.current.offsetWidth;
        const newIndex = Math.round(scrollLeft / scrollWidth);
        setActiveIndex(newIndex);
      }
    };

    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener("scroll", handleScrollEvent);
    return () => {
      scrollElement?.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % imageUrls.length;
      scrollToIndex(nextIndex);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex, imageUrls.length, scrollToIndex]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scrollRef}
        className="relative w-full flex rounded-lg lg:rounded-xl aspect-[16/9] md:aspect-[32/9] bg-eventr-gray hide-scrollbar overflow-x-scroll snap-x snap-mandatory scroll-smooth"
      >
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start relative w-full aspect-[4/3]"
          >
            <img
              src={url}
              alt={`Carousel image ${index + 1}`}
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="my-2 relative w-full flex justify-center gap-2">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-1 h-1 rounded-full ${
              activeIndex === index ? "bg-white" : "bg-eventr-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        onClick={() => handleScroll("left")}
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-12 duration-300 text-sm md:text-lg lg:text-xl"
      >
        <Icon icon="chevron_left" />
      </button>
      <button
        onClick={() => handleScroll("right")}
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-12 duration-300 text-sm md:text-lg lg:text-xl"
      >
        <Icon icon="chevron_right" />
      </button>
    </div>
  );
}
