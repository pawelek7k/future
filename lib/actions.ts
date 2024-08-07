export const shareBook = async (formData: FormData) => {
  try {
    const response = await fetch('/api/book', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const result = await response.json();
    if (result.error) {
      throw new Error(result.error);
    }

    return result;
  } catch (error) {
    console.error("Error processing form data:", error);
    throw error;
  }
};
