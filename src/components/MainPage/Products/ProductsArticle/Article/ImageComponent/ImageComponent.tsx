import { ImageComponentType } from './types/imageComponent.interface';

function ImageComponent({
  className, link, alt, click,
}: ImageComponentType) {
  return (
    <button
      // className="article__button picture__button"
      className={className}
      key={link}
      type="button"
      onClick={click}
    >
      <img
        className="article__image picture__image"
        // className={className}
        src={link}
        alt={alt}
        loading="lazy"
      />
    </button>
  );
}

export default ImageComponent;
