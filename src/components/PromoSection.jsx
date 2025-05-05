import React from "react";

const PromoSection = ({
  videoSrc,
  label,
  heading,
  description,
  buttonText,
}) => {
  const videoRef = React.useRef(null);

  return (
    <>
    <section className="mb-12 w-full h-[800px] relative">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-contain"
            hidecontrols
            muted
            autoPlay
            loop
          />
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <p className="font-semibold">{label}</p>
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <p className="max-w-xl mx-auto text-lg dark:text-gray-400 mb-8">
          {description}
        </p>
        <button className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
         {buttonText}
        </button>
      </section>
    </>
    
  );
};

export default PromoSection;
