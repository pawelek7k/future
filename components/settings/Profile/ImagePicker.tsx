import { SecondHeading } from "@/components/global/heading";
import Image from "next/image";
import { ChangeEvent, ReactNode, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  children: ReactNode;
}

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
      <div className="bg-white/20 p-2 rounded-full dark:bg-black/60 backdrop-blur-lg flex items-center gap-4 border border-sky-950 dark:border-rose-950">
        <div
          className="w-24 h-24 rounded-full relative border border-sky-950 dark:border-rose-950 flex items-center justify-center font-sans cursor-pointer z-10"
          onClick={handleImageClick}
        >
          {!pickedImage && <FaUserCircle className="w-24 h-24" />}
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
        <SecondHeading>Nazwa użytkownika</SecondHeading>
      </div>
    </div>
  );
};

export const BackgroundImagePicker: React.FC<Props> = ({ children }) => {
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
    <div
      className="relative w-[30rem] rounded-br-3xl rounded-tl-3xl h-full cursor-pointer"
      onClick={handleImageClick}
      style={{
        backgroundImage: pickedImage ? `url(${pickedImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={imageInput}
        className="hidden"
        onChange={handleImageChange}
        required
      />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        {!pickedImage && "Click to select an image"}
      </div>
      {children}
    </div>
  );
};
