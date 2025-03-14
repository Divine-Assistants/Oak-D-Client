interface ScrollToOptions {
    left?: number;
    top?: number;
    behavior?: "auto" | "smooth";
  }
  
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
   export function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({top: 20, behavior: 'smooth'});
  }