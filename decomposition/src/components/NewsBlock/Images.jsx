// Компонент отображает картинки

export default function Images(props) {
  const {containerClass, imageClassName, src, alt } = props;

  return (
    <div className={containerClass}>
      <img className={imageClassName} src={src} alt={alt} />
    </div>
  );
}

