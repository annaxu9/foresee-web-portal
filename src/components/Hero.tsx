
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            FORESEE
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-4 font-light">
            A New Framework to Explore Processing On-BCI
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Welcome to the official site for FORESEE, a powerful open-source framework designed to accelerate and streamline the development and evaluation of neural signal processing pipelines for brain-computer interfaces (BCIs).
          </p>
        </div>
        
        <div className="mb-12">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            FORESEE enables seamless co-design between algorithmic development in Python and hardware description in Verilog, offering researchers and engineers a unified, intuitive platform to iterate and explore.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            Download FORESEE
          </Button>
          <Button variant="outline" size="lg" className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full transition-all duration-300">
            View on GitHub
          </Button>
          <Button variant="outline" size="lg" className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full transition-all duration-300">
            Read Paper (IEEE)
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};
