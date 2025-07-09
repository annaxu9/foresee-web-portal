
export const AnalysisModes = () => {
  const modes = [
    {
      title: "Python Execution",
      description: "Runs modules natively on datasets to measure accuracy.",
      icon: "🐍",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Hardware Simulation", 
      description: "Uses iverilog for cycle-accurate Verilog simulations to measure latency and accuracy.",
      icon: "⚙️",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Power Estimation",
      description: "Converts Verilog to circuits using Yosys, simulates activity using iverilog, and uses OpenSTA for precise power and timing analysis.",
      icon: "⚡",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Analysis Modes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            FORESEE supports three robust types of performance analyses
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {modes.map((mode, index) => (
            <div
              key={mode.title}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${mode.color} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {mode.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{mode.title}</h3>
              <p className="text-gray-300 leading-relaxed">{mode.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 italic">
            You may substitute these default tools with your own to customize the analysis pipeline.
          </p>
        </div>
      </div>
    </section>
  );
};
