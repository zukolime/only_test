export const isMobile = (breakpoint: number = 768): boolean => {
  return window.innerWidth < breakpoint;
};
