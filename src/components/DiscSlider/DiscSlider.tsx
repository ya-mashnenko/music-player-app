import { Carousel } from "3d-react-carousal";
import styles from "./discSlider.module.css";

const slides = [
  <img src="unreleased_cover.png" alt="cover" width="80%" />,
  <img src="cover.png" alt="cover" width="80%" />,
  <img src="cover-1.png" alt="cover" width="80%" />,
];

export const DiscSlider = () => {
  return (
    <div className={styles.carousel}>
      <Carousel slides={slides} />
    </div>
  );
};
