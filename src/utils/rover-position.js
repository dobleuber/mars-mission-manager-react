const roverPositions = [
  { lat: 36.5859551, lng: -116.771884 },
  { lat: 36.5859552, lng: -116.781885 },
  { lat: 36.5859553, lng: -116.781886 },
  { lat: 36.5859554, lng: -116.781887 },
]

export default (() => {
  let currentIndex = 0
  let inc = 1
  return () => {
    const currentPosition = roverPositions[currentIndex]
    currentIndex += inc
    if (currentIndex >= 3) inc = -1
    if (currentIndex <= 0) inc = 1

    return currentPosition
  }
})()