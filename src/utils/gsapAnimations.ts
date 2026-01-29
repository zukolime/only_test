import gsap from 'gsap';

// анимация затухания
export const animateFadeIn = (element: HTMLDivElement) => {
  gsap.fromTo(
    element,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
    },
  );
};

// анимация вращения
export const animateCircleRotation = (element: HTMLDivElement, rotation: number) => {
  gsap.to(element, {
    rotate: rotation,
    duration: 1,
    ease: 'power2.out',
    onUpdate() {
      element.style.setProperty('--circle-rotation', `${rotation}deg`);
    },
  });
};

// анимация смены годов
export const animateYearChange = (element: HTMLSpanElement, from: number, to: number) => {
  gsap.fromTo(
    element,
    { innerText: from },
    {
      innerText: to,
      duration: 1.5,
      ease: 'power2.in',
      snap: { innerText: 1 },
    },
  );
};
