import { useEffect, useRef, useState } from "react";

export const Textarea = () => {
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
    <textarea
      ref={textareaRef}
      className="w-full min-h-screen p-10 resize-none focus:outline-none bg-transparent"
      value={text}
      placeholder="Once upon a time lived a king who had three daughters..."
      onChange={handleChange}
    />
  );
};
