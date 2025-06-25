const teamMembers = [
  {
    name: "Aasmaan Yadav",
    university: "Duke University",
    image: "public/team/shaan.jpeg" // Adjust filename as needed
  },
  {
    name: "Fernando Cuello Garcia",
    university: "Yale University",
    image: "public/team/fernando.jpeg"
  },
  {
    name: "Alejandro Gonzalez",
    university: "Yale University",
    image: "public/team/alejandro_gonzalez.jpeg"
  },
  {
    name: "Bernardo Eilert Trevisan",
    university: "Yale University",
    image: "public/team/Bernardo-Trevisan.jpg"
  },
  {
    name: "Muhammed Ugur",
    university: "Yale University",
    image: "public/team/muhammed.jpg"
  },
  {
    name: "Anna Xu",
    university: "Yale University",
    image: "public/team/anna_xu.JPG"
  },
  {
    name: "Raghavendra Pradyumna Pothukuchi",
    university: "Yale University",
    image: "public/team/Pothukuchi.jpg"
  },
  {
    name: "Abhishek Bhuttacharjee",
    university: "Yale University",
    image: "public/team/abhishek.jpg"
  }
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't load
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iNjQiIGZpbGw9IiM0QzFEOTUiLz4KPHN2ZyB4PSIzMiIgeT0iMzIiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJ3aGl0ZSI+CjxwYXRoIGQ9Ik0xMiAxMmM0IDAgOC0yIDgtNnMtNC02LTgtNi04IDItOCA2IDQgNiA4IDZ6bTAgMmMtNiAwLTEyIDMtMTIgOXYzaDI0di0zYzAtNi02LTktMTItOXoiLz4KPHN2Zz4KPHN2Zz4=";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-blue-400 font-medium">
                {member.university}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-gray-300 mb-6">
              Interested in contributing to FORSEE? We welcome collaborations and contributions from researchers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
              <button className="border border-gray-400 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                View Publications
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};