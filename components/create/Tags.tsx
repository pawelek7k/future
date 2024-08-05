import Notiflix from "notiflix";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export const Tags: React.FC = () => {
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
    <div className="flex flex-col">
      <label
        htmlFor="tags"
        className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2"
      >
        Tags
      </label>
      <input
        type="text"
        name="tags"
        id="tags"
        placeholder="Tags"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full px-3 py-2 rounded-lg dark:text-neutral-100 dark:bg-rose-950/30  text-gray-900  placeholder-gray-500  focus:outline-none  shadow-lg backdrop-blur-md mb-4"
      />
      <input type="hidden" value={JSON.stringify(words)} />
      <div className="flex gap-2 flex-wrap">
        {words.map((word, index) => (
          <div
            className="dark:bg-zinc-950/30 bg-sky-950/30 shadow-lg rounded-full py-1 min-w-12 text-center flex flex-nowrap items-center gap-1 px-2 "
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
