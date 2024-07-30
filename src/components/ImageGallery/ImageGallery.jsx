import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, setImgUrl, setModal }) {
  const refLinkImgId = (imgFull) => {
    setImgUrl(imgFull);
    setModal(true);
  };

  return (
    <>
      <ul className={css.galary}>
        {images.map(({ urls }, index) => {
          console.log(urls);
          return (
            <li key={index}>
              <ImageCard
                setImgUrl={() => refLinkImgId(urls.regular)}
                img={urls.small}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
