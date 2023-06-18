import SmoothScroll from "smooth-scroll";

export default function smoothScroll() {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,
  });
}
