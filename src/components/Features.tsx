
export const Features = () => {
  const features = [
    {
      title: "Modular Pipelines",
      description: "Build processing pipelines using plug-and-play Modules.",
      icon: "🧩"
    },
    {
      title: "Dual-Specification",
      description: "Write Modules in either Python or Verilog—or both.",
      icon: "⚡"
    },
    {
      title: "Integrated Analysis",
      description: "Evaluate algorithmic accuracy, hardware latency, and power consumption in a single interface.",
      icon: "📊"
    },
    {
      title: "Open Hardware Library",
      description: "Use our pre-built Modules or contribute your own.",
      icon: "🔧"
    },
    {
      title: "Flexible User Interface",
      description: "Use FORSEE via an intuitive GUI or command line.",
      icon: "💻"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes FORSEE unique and powerful for BCI development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
