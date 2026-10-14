const API_URL = "https://ai-website-generator-nine-sage.vercel.app/api";

export const generateWebsite = async (prompt) => {
const response = await fetch(`${API_URL}/generate`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ prompt }),
});

const data = await response.json();

if (!response.ok) {
throw new Error(data.message || "Failed to generate website");
}

return data;
};
