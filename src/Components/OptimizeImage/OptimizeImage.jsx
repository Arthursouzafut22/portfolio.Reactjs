import { useState, useEffect } from "react";

const OptimizeImage = ({ src, alt, fallback }) => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const imagem = new Image();
    imagem.src = src;
    imagem.alt = alt;
    imagem.onload = () => setLoader(true);
  }, [src, alt]);

  if (!loader) return fallback;

  return <img src={src} alt={alt} />;
};

export default OptimizeImage;
