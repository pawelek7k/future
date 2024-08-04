import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export const CoverPicker: React.FC = () => {
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
      <div className="bg-white/20 dark:bg-black/60 border border-sky-950 dark:border-rose-950">
        <div className="w-[12rem] h-[18rem] cursor-pointer z-10">
          {!pickedImage && ""}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The cover selected by the user"
              layout="fill"
              objectFit="cover"
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
