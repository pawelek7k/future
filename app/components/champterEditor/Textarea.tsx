import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const RichTextEditor = () => {
  const [text, setText] = useState("");

  const handleChange = (value: string) => {
    setText(value);
  };

  return (
    <div className="w-full min-h-screen p-10 relative">
      <ReactQuill
        value={text}
        onChange={handleChange}
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
        placeholder="Once upon a time lived a king who had three daughters..."
      />
      <button
        className="mt-4 p-2 absolute -top-28 right-0  bg-sky-900 text-white py-2 px-4 rounded-lg
        hover:bg-sky-950
        dark:bg-rose-900 dark:hover:bg-rose-800
        shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
      >
        Save
      </button>
    </div>
  );
};

RichTextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

RichTextEditor.formats = [
  "header",
  "font",
  "list",
  "bullet",
  "bold",
  "italic",
  "underline",
  "color",
  "background",
  "align",
  "link",
  "image",
];
