import { ImageComponentType } from './types/imageComponent.interface';

function ImageComponent({
  className, link, alt, click,
}: ImageComponentType) {
  return (
    <button
      className="article__button picture__button"
      key={link}
      type="button"
      onClick={click}
    >
      <img
        className={className}
        src={link}
        alt={alt}
      />
    </button>
  );
}

export default ImageComponent;
