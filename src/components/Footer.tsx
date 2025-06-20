
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Explore Processing On-BCI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Download FORSEE today and redefine how neural signal pipelines are developed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Download
            </Button>
            <Button variant="outline" size="lg" className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full">
              Documentation
            </Button>
            <Button variant="outline" size="lg" className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full">
              GitHub
            </Button>
          </div>
        </div>

        {/* License & Citation Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">📄 License & Citation</h3>
            <p className="text-gray-300 mb-4">
              FORSEE is open-source software. Please cite our work in your research:
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm text-gray-300">
              @article{"{forsee2024,"}<br/>
              {"  title={FORSEE: A Framework for Neural Signal Processing Pipeline Development},"}<br/>
              {"  author={[Authors]},"}<br/>
              {"  journal={IEEE Conference},"}<br/>
              {"  year={2024}"}<br/>
              {"}"}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">🤝 Contribute</h3>
            <p className="text-gray-300 mb-4">
              Instructions for people to contribute:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Fork the repository on GitHub
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Create feature branches for new modules
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Submit pull requests with documentation
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Report issues and suggest improvements
              </li>
            </ul>
          </div>
        </div>

        {/* Design Philosophy */}
        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Design Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-xl font-semibold text-white mb-2">Simplicity</h4>
              <p className="text-gray-400">Intuitive interface that doesn't sacrifice power for ease of use</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="text-xl font-semibold text-white mb-2">Interoperability</h4>
              <p className="text-gray-400">Seamless integration between Python algorithms and Verilog hardware</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="text-xl font-semibold text-white mb-2">Community</h4>
              <p className="text-gray-400">Open-source ecosystem that grows with researcher contributions</p>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">📅 Project Timeline</h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-orange-300">Deadline: July 2025</strong>
            </p>
            <p className="text-gray-400 mt-2">
              Stay tuned for major updates and new features as we approach our milestone release.
            </p>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center border-t border-gray-700 pt-8">
          <p className="text-gray-300 text-lg mb-4">
            FORSEE is open-source and developed to empower researchers and engineers in the BCI space.
          </p>
          <p className="text-gray-400">
            We welcome feedback, contributions, and collaborations.
          </p>
        </div>
      </div>
    </footer>
  );
};
