import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const DiscSlider = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      width={"50%"}
    >
      <div>
        <img src="unreleased_cover.png" alt="cover" />
      </div>
      <div>
        <img src="cover.png" alt="cover" />
      </div>
      <div>
        <img src="cover-1.png" alt="cover" />
      </div>
    </Carousel>
  );
};
