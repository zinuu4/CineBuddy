export const buttonsStyles = `
.swiper-button-next,
.swiper-button-prev {
  display: flex;
  width: 50px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background: rgba(138, 136, 145, 0.32);
  transition: opacity var(--duration), visibility var(--duration);
  color: white;
}
.swiper-button-next::before,
.swiper-button-prev::before {
  content: "";
  position: absolute;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
  background: hsla(258,4%,55%,.32);
  z-index: -1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border: none;
  border-radius: 8px;
  transition: transform .1s;
}
.swiper-button-next svg,
.swiper-button-prev svg{
  width: 24px;
  height: 24px;
  
}
.swiper-button-next svg path,
.swiper-button-prev svg path{
  stroke: white; 
  stroke-width: 1; 
  
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: radial-gradient(
    100% 100% at 100% 0,
    hsla(257, 5%, 74%, 0.32) 0,
    hsla(258, 4%, 55%, 0.32) 100%
  );
  transform: scale(1.2) translateZ(0);
}
@media only screen and (max-width: 1000px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  .swiper-button-next::before,
  .swiper-button-prev::before {
    display: none;
  }
}
`;
