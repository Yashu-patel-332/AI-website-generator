import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function CodeEditor({ website , onCodeChange }) {
   
  const [code,setCode] = useState(website || "")
   const [copied,setCopied] = useState(false);

   useEffect(()=>{
    setCode(website || "");
   },[website])


   const handleCopy = async()=>{
    if(!website) return;

    try {
      await navigator.clipboard.writeText(website)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy code:', error)
    }
   }

   
   const handleUpdatePreview = ()=>{
    onCodeChange(code)
   }



  return (
    <section className="editor-section">
        <div className="section-header">
            <h2>Generated Code</h2>
            <p>Generated HTML, CSS, and JavaScript code will appear here.</p>
        </div>

        {website && (
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        )}

        {!website ?(
          <div className="editor-placeholder">
            <div className="editor-icon">📄</div>

            <h3>Code Editor</h3>

            <p>Your generated code will appear here.</p>
        </div>
        ) : (
          <>
          <textarea className="code-editor-input" value={code}  onChange={(e) => setCode(e.target.value)} spellCheck="false" />
            <button className="update-preview-btn" onClick={handleUpdatePreview}>
              Update Preview
            </button>
          </>
        )}


    </section>
  )
}

export default CodeEditor