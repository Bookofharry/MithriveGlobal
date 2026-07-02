export default function OurInfluence() {
  const stats = [
    { value: "5,000+", label: "Lives & Careers Impacted" },
    { value: "15+", label: "Strategic Capability Areas" },
    { value: "250+", label: "Capacity-Building Courses" },
    { value: "100+", label: "Organizations Partnered With" },
    { value: "98.2%", label: "Client Satisfaction Rate" },
  ];

  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
      {/* Background pattern/image overlay */}
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dtxtk0u9u/image/upload/f_auto,q_auto/v1782559312/IMG_1893_yssgye.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/95 to-brand-navy/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-sm font-bold tracking-widest text-brand-lime uppercase mb-4">Our Influence</h2>
        <p className="text-3xl md:text-4xl font-bold mb-16 text-white max-w-3xl mx-auto leading-tight">
          Our Reach. Our Results.
        </p>
        
        <div className="flex flex-wrap justify-center items-start gap-y-12 gap-x-6 sm:gap-x-10 md:gap-x-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-[140px] sm:w-[160px] lg:w-auto flex-shrink-0">
              <span className="text-4xl lg:text-5xl font-extrabold text-brand-lime mb-3 drop-shadow-md">{stat.value}</span>
              <span className="text-sm lg:text-base font-medium text-gray-300 max-w-[140px] sm:max-w-[160px] leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
