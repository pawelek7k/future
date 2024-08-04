import Notiflix from "notiflix";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface TagsProps {
  name: string;
}

export const Tags = ({ name }: TagsProps) => {
  const [inputValue, setInputValue] = useState("");
  const [words, setWords] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      const trimmedValue = inputValue.trim();
      const wordExists = words.includes(trimmedValue);
      if (trimmedValue.length <= 2 || wordExists) {
        Notiflix.Notify.warning(
          wordExists
            ? "This word is already added."
            : "Enter a minimum of three characters."
        );
        e.preventDefault();
        return;
      }

      setWords((prevWords) => [...prevWords, trimmedValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index: number) => {
    setWords((prevWords) => prevWords.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type={"text"}
        name=""
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <input type="hidden" name={name} value={JSON.stringify(words)} />
      <div className="flex gap-2 flex-wrap">
        {words.map((word, index) => (
          <div
            className="dark:bg-rose-950/30 bg-sky-950/30 shadow-lg rounded-full py-1 min-w-12 text-center flex flex-nowrap items-center gap-1 px-2"
            key={index}
          >
            <span className="text-nowrap">{word}</span>
            <div onClick={() => handleDelete(index)} className="cursor-pointer">
              <RxCross2 />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
