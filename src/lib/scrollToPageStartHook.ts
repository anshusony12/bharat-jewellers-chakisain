import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const scrollToPageStart = () => {
  // Find the first header or main content div
  const headerElement = document.querySelector('main > div:first-child, header, [data-page-start]');
  
  if (headerElement instanceof HTMLElement) {
    // Smooth scroll to the element
    headerElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Ensure the element can receive focus
    headerElement.tabIndex = -1; // Make focusable if not already
    headerElement.focus({
      preventScroll: true
    });
  }
};

export const useScrollToPageStart = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToPageStart();
  }, [location.pathname]); // Re-run when path changes
};
