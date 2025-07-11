
import { Button } from "@/components/ui/button";

export const UseCases = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore More
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover real-world applications and dive deeper into FORESEE
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Use Cases</h3>
            <p className="text-gray-300 mb-6">
              View real use cases of FORESEE in seizure detection pipeline exploration.
            </p>
            <Button variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-800/30">
              View Examples
            </Button>
          </div>

          <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-6">📄</div>
            <h3 className="text-2xl font-bold text-white mb-4">Research Paper</h3>
            <p className="text-gray-300 mb-6">
              Read the full paper with detailed methodology and results.
            </p>
            <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-800/30">
              Read Paper
            </Button>
          </div>

          <div className="bg-gradient-to-br from-green-800/30 to-blue-800/30 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-6">💻</div>
            <h3 className="text-2xl font-bold text-white mb-4">GitHub Repository</h3>
            <p className="text-gray-300 mb-6">
              Get started with FORESEE, contribute, and explore the source code.
            </p>
            <Button variant="outline" className="border-green-400 text-green-300 hover:bg-green-800/30">
              View on GitHub
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
