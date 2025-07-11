import React from "react";

const Demo: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div
        id="demo"
        className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center"
      >
        <h3 className="text-3xl font-bold text-white mb-6">Demo Video</h3>
        <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden mb-6">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yY-t5psEGOY"
            title="FORESEE Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
        <p className="text-gray-300">
          Watch FORESEE in action and see how easy it is to build and analyze
          BCI processing pipelines.
        </p>
      </div>
    </section>
  );
};

export default Demo;
