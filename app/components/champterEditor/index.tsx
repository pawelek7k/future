import { useEffect, useRef, useState } from "react";
import { Textarea } from "./Textarea";

export const ChampterEditor = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);
  return (
    <section className="flex flex-col gap-16 mt-8 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="rounded-lg p-4 flex flex-col items-center justify-center">
          <Textarea />
        </div>
      </div>
    </section>
  );
};
