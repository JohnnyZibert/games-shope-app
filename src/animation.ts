export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transaction: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transaction: { duration: 0.75 },
  },
}
export const cardGame = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transaction: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transaction: { duration: 0.75 },
  },
}
