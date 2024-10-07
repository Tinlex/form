import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Add the JotForm embed script
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    document.body.appendChild(script);

    // Execute the embed handler when the script is loaded
    script.onload = () => {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-242784513981364']",
        "https://form.jotform.com/"
      );
    };

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div style={{ width: "100%", maxWidth: "100%", height: "539px" }}>
        <iframe
          id="JotFormIFrame-242784513981364"
          title="Submit Your Application for the Game Designer Role"
          onLoad={() => window.parent.scrollTo(0, 0)}
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/242784513981364"
          onSubmit={() => console.log("hey")}
          frameBorder="0"
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            height: "539px",
            border: "none",
          }}
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
}
