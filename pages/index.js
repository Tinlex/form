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
        "iframe[id='JotFormIFrame-242801698872468']",
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
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          minHeight: "auto",
          height: "1500px",
        }}
      >
        <iframe
          id="JotFormIFrame-242784513981364"
          title="Submit Your Application for the Game Designer Role"
          onLoad={() => window.parent.scrollTo(0, 0)}
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/242801698872468"
          onSubmit={() => console.log("hey")}
          frameBorder="0"
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            border: "none",
            height: "2500px",
          }}
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
}
