const API_URL = "http://localhost:5000/api"

export const generateWebsite = async (prompt) => {
  const response = await fetch(`${API_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: prompt }),
  });

  const data = await response.json();

  if(!response.ok) {
    throw new Error(data.message || "Failed to generate website.");
  }

  return data;
};