import styles from "./discSlider.module.css";
import Carousel from "react-spring-3d-carousel";

interface IDiscSliderProps {
  slides: string[];
}

export const DiscSlider: React.FC<IDiscSliderProps> = ({ slides }) => {
  const slideImages = slides.map((slide, index) => ({
    key: index,
    content: (
      <div className={styles.imageWrap}>
        <img src={slide} alt="cover" width="100%" height="100%" key={index} />
      </div>
    ),
  }));

  return (
    <div className={styles.carousel}>
      <Carousel slides={slideImages} showNavigation={false} />
    </div>
  );
};
