function Preview({ website }) {
  return (
    <section className="preview-section">

      <div className="section-header">
        <h2>Live Preview</h2>

        <p>
          Your AI-generated website will appear here.
        </p>
      </div>

      <div className="preview-container">

        {!website ? (
          <div className="preview-placeholder">

            <div className="preview-icon">
              🌐
            </div>

            <h3>
              No Website Generated
            </h3>

            <p>
              Enter a description above and click
              "Generate Website".
            </p>

          </div>
        ) : (
          <iframe
            title="AI Generated Website"
            srcDoc={website}
            className="website-preview"
          />
        )}

      </div>

    </section>
  );
}

export default Preview;