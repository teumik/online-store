import { ImageComponentType } from './types/imageComponent.interface';

function ImageComponent({
  className, link, alt, click,
}: ImageComponentType) {
  return (
    <button
      className={className}
      key={link}
      type="button"
      onClick={click}
    >
      <img
        className="article__image picture__image"
        src={link}
        alt={alt}
        loading="lazy"
      />
    </button>
  );
}

export default ImageComponent;
