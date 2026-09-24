export const designConfig = {
  motion: {
    enabled: true,
    intensity: 6,
  },
  colors: {
    accent: "#9A7349",
    signal: "#5C4033",
  },
};

export function isMotionEnabled() {
  return designConfig.motion.enabled && designConfig.motion.intensity > 3;
}
