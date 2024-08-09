import { SetStateAction, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AbsoluteButton } from "../global/buttons";

export const RichTextEditor = () => {
  const [text, setText] = useState("");

  const handleChange = (value: SetStateAction<string>) => {
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
      <AbsoluteButton>Save</AbsoluteButton>
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
