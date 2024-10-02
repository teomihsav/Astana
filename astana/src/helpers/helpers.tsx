export function scrollToSmoothly(pos: number, time: number) {
  const currentPos = window.scrollY;
  let start: number | null = null;
  if (time == null) time = 500;
  pos = +pos, time = +time;

  window.requestAnimationFrame(function step(currentTime) {
    start = !start ? currentTime : start;
    const progress = currentTime - start;

    if (currentPos < pos) {
      // console.log('Position: ', progress, ((pos - currentPos) * progress / time) + currentPos)
      window.scrollTo(0, easeInOutCubic(progress, currentPos, pos - currentPos, time)) //((pos - currentPos) * progress / time) + currentPos);
    } else {
      window.scrollTo(0, easeInOutCubic(progress, currentPos, pos - currentPos, time));
    }
    if (progress < time) {
      window.requestAnimationFrame(step);
    } else {
      window.scrollTo(0, easeInOutCubic(progress, currentPos, pos - currentPos, time));
    }
  })
}

function easeInOutCubic(t: number, b: number, c: number, d: number) {
  t /= d / 2
  if (t < 1) return c / 2 * t * t * t + b
  t -= 2
  return c / 2 * (t * t * t + 2) + b
}