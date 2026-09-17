import './ImagePlaceholder.css';

export default function ImagePlaceholder({ className = '', style = {} }) {
  return (
    <div className={`image-placeholder ${className}`} style={style} aria-hidden="true">
      <span className="image-placeholder__text">espaço para imagem/vídeo</span>
    </div>
  );
}
