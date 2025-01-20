// Animation utilities
export const fadeIn = (element) => {
  element.style.opacity = "0";
  element.style.display = "block";

  setTimeout(() => {
    element.style.opacity = "1";
  }, 10);
};

export const fadeOut = (element) => {
  element.style.opacity = "0";

  setTimeout(() => {
    element.style.display = "none";
  }, 300);
};

// Click outside handler for dropdowns
export const handleClickOutside = (ref, callback) => {
  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  document.addEventListener("mousedown", handleClick);
  return () => document.removeEventListener("mousedown", handleClick);
};

// Scroll handlers
export const handleScroll = (callback, threshold = 100) => {
  let lastScroll = 0;

  return () => {
    const currentScroll = window.pageYOffset;

    if (Math.abs(currentScroll - lastScroll) > threshold) {
      callback(currentScroll > lastScroll);
      lastScroll = currentScroll;
    }
  };
};

// Mobile menu handlers
export const toggleMobileMenu = (isOpen, setIsOpen) => {
  setIsOpen(!isOpen);
  document.body.style.overflow = !isOpen ? "hidden" : "auto";
};
