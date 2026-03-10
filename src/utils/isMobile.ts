export const isMobile = (breakpoint: number = 770): boolean => {
  return window.innerWidth < breakpoint;
};
