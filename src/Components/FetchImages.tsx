import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ImageData {
  src: string;
  alt: string;
  link: string;
}

const FetchImages: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Markobanduka/kallos/main/public/images.json"
    )
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:mx-10 gap-8">
        {images.map((image, index) => (
          <div key={index} className="space-y-6">
            <Link to={image.link}>
              <img
                src={image.src}
                alt={image.alt}
                className="border rounded-lg w-full h-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchImages;
