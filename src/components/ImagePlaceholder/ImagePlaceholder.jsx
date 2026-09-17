import './ImagePlaceholder.css';

export default function ImagePlaceholder({ className = '', style = {}, text = 'espaço para imagem/vídeo' }) {
  return (
    <div className={`image-placeholder ${className}`} style={style} aria-hidden="true">
      <span className="image-placeholder__text">{text}</span>
    </div>
  );
}
