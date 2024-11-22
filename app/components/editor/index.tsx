"use client";
import axios from "axios";
import dynamic from "next/dynamic";
import Notiflix from "notiflix";
import { SetStateAction, useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface RichTextEditorProps {
  bookId: string;
}

interface RichTextEditorStaticProps {
  modules: any;
  formats: any;
}

export const RichTextEditor: React.FC<RichTextEditorProps> &
  RichTextEditorStaticProps = ({ bookId }) => {
  const [text, setText] = useState<string>("");

  const handleChange = (value: SetStateAction<string>) => setText(value);

  const handleSave = async () => {
    if (!bookId) {
      Notiflix.Notify.failure("Failed to save content: Book ID is missing");
      return;
    }

    try {
      await axios.put(`/api/books/update/${bookId}`, { content: text });
      Notiflix.Notify.success("Content saved successfully!");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error saving content:",
          error.response?.data || error.message
        );
        Notiflix.Notify.failure("Failed to save content");
      } else {
        console.error("Unexpected error:", error);
        Notiflix.Notify.warning("An unexpected error occurred");
      }
    }
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
      <button onClick={handleSave}>Save</button>
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
