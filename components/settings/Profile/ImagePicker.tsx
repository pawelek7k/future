import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInput.current?.click();
  };

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
  return (
    <div>
      {" "}
      <label></label>
      <div className="flex flex-col gap-4 w-[15rem]">
        <div className="w-40 h-40 rounded-full relative border border-myPrimary flex items-center justify-center font-sans">
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
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
        <button
          type="button"
          className="bg-accent text-text"
          onClick={handlePickClick}
        >
          Choose a cover
        </button>
      </div>
    </div>
  );
};
