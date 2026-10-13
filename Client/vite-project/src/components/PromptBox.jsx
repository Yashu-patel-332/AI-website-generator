import { useState } from "react";
import { generateWebsite } from "../services/api";
import PromptTemplates from "./PromptTemplates";

function PromptBox({ onWebsiteGenerated }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    console.log("Button clicked");
    console.log("Current prompt:", prompt);

    if (!prompt.trim()) {
      setError("Please enter a website description.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await generateWebsite(prompt);

      console.log("Generated website:", data);

      onWebsiteGenerated(data.website);
    } catch (error) {
      console.error("Frontend error:", error);

      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="prompt-section">
      <PromptTemplates onSelect={setPrompt} />

      <div className="section-header">
        <h2>Describe Your Website</h2>

        <p>Tell AI what kind of website you want to create.</p>
      </div>

      <textarea
        className="prompt-input"
        placeholder="Example: Create a modern portfolio website for a MERN Stack developer..."
        rows="7"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={loading}
      />

      {error && <p className="error-message">⚠️ {error}</p>}

      <button
        className="generate-btn"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "✨ Generating..." : "✨ Generate Website"}
      </button>
    </section>
  );
}

export default PromptBox;
