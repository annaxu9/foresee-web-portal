
export const GuiOverview = () => {
  const views = [
    {
      title: "Overview Page",
      description: "Launchpad for your work",
      features: [
        "Import/create pipelines and modules",
        "Start performance analyses"
      ]
    },
    {
      title: "Pipeline Page", 
      description: "Visual pipeline editor",
      features: [
        "Connect Modules including inputs (e.g., synthetic data, datasets), computation blocks, and outputs",
        "Customize module configurations, such as FFT options"
      ]
    },
    {
      title: "Analysis Page",
      description: "Run and visualize analyses",
      features: [
        "Compare performance across Python and hardware implementations",
        "Export results as CSV files for offline use"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-purple-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Graphical User Interface (GUI)
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The FORESEE GUI simplifies the user experience with three key views
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {views.map((view, index) => (
            <div
              key={view.title}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white">{view.title}</h3>
              </div>
              <p className="text-blue-300 mb-6 font-medium">{view.description}</p>
              <ul className="space-y-3">
                {view.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
