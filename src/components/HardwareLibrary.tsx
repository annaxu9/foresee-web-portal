export const HardwareLibrary = () => {
  const modules = [
    "FFT (Fast Fourier Transform)",
    "PWXC (Pairwise Cross-Correlation)",
    "BBF (Butterworth Bandpass Filter)",
    "SVM (Support Vector Machine)",
    "THR (Thresholding Block)",
    "TKEO (Teager-Kaiser Energy Operator)",
    "AVG (Signal Averaging)",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Open Hardware Library
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            FORESEE comes bundled with hardware implementations of commonly used
            neural processing Modules
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((module, index) => (
            <div
              key={module}
              className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:translateY-[-4px]"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3"></div>
                <h3 className="text-white font-semibold">{module}</h3>
              </div>
            </div>
          ))}
          <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 flex items-center justify-center">
            <span className="text-gray-400 font-semibold">And more...</span>
          </div>
        </div>

        {/* <div className="text-center">
          <div className="bg-gradient-to-r from-green-800/30 to-blue-800/30 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Community Contribution Welcome
            </h3>
            <p className="text-gray-300 text-lg">
              The library is open for community contribution—help us grow the
              ecosystem. We welcome your modules, improvements, and feedback to
              make FORESEE even better.
            </p>
          </div>
        </div> */}
        {/* Design Philosophy */}
        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Design Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Simplicity
              </h4>
              <p className="text-gray-400">
                Intuitive interface that doesn't sacrifice power for ease of use
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Interoperability
              </h4>
              <p className="text-gray-400">
                Seamless integration between Python algorithms and Verilog
                hardware
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Community
              </h4>
              <p className="text-gray-400">
                Open-source ecosystem that grows with researcher contributions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
