"use client";
import Image from "next/legacy/image";
import { ChangeEvent, useRef, useState } from "react";

export const ImagePicker: React.FC = () => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      return setPickedImage(null);
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  const handleImageClick = () => {
    imageInput.current?.click();
  };

  return (
    <div className="z-10">
      <div className="bg-white/20 rounded-full dark:bg-black/60 backdrop-blur-lg flex items-center gap-4 border border-sky-950  w-28 h-28">
        <div
          className="w-28 h-28 rounded-full relative border border-sky-950 dark:border-rose-950 flex items-center justify-center font-sans cursor-pointer z-10 text-sm"
          onClick={handleImageClick}
        >
          {!pickedImage && "Select a photo."}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          )}
        </div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          ref={imageInput}
          className="hidden"
          onChange={handleImageChange}
          required
        />
      </div>
    </div>
  );
};
