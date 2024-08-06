
interface BookFormData {
  title: string;
  description: string;
  selectedCover: string;
  genre: string;
  checkbox: boolean;
  tags: string[];
}

export const shareBook = async (formData: FormData) => {
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const selectedCover = formData.get("selectedCover") as string;
    const genre = formData.get("genre") as string;
    const checkbox = formData.get("forAdult") === "on";
    const tagsValue = formData.get("tags");

    let tags: string[] = [];
    if (tagsValue) {
      try {
        tags = JSON.parse(tagsValue as string);
      } catch (error) {
        console.error("Error parsing tags JSON:", error);
      }
    }

    const book: BookFormData = {
      title,
      description,
      selectedCover,
      genre,
      checkbox,
      tags,
    };

    console.log(book);
  } catch (error) {
    console.error("Error processing form data:", error);
  }
};