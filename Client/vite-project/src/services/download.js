export const downloadWebsite = (website) => {
  if (!website) {
    return;
  }

  const blob = new Blob(
    [website],
    {
      type: "text/html",
    }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "ai-generated-website.html";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};