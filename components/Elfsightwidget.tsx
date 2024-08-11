import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="elfsight-app-d01e4b63-0ce4-4192-b645-e6c0b20ef6e0"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default ElfsightWidget;
