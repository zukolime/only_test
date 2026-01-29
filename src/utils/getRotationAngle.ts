export const getRotationAngle = (activeIndex: number, angleStep: number) => {
  const targetAngle = -120;

  return targetAngle - activeIndex * angleStep;
};
