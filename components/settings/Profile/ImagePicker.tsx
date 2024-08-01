import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export const ImagePicker = () => {
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
    <div>
      <div className="bg-neutral-100 p-2 rounded-full">
        <div
          className="w-32 h-32 rounded-full relative border border-myPrimary flex items-center justify-center font-sans cursor-pointer"
          onClick={handleImageClick}
        >
          {!pickedImage && <p>No image picked yet.</p>}
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
