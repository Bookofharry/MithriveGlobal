const clients = [
  "CBN", "NLNG", "BUA Cement", "FIRS", "ICPC", 
  "AERO Contractors", "Embassy of Belgium", "JDPI Maiduguri", "NIRSAL PLC", "Sokoto Cement",
  "ANEEJ", "ENERGIA Limited", "NAHCO Aviance", "NiMet", "TY Danjuma Foundation",
  "Central Bank of Nigeria HQ", "Fed. Min. of Petroleum Resources", "Havenhills Synergy", "NELMCO Abuja", "SAHCO Aviance",
  "Yola Electricity Dist.", "University of Jos", "Institute of Peace & Conflict Resolution", "Financial Reporting Council"
];

export default function ClientLogoGrid({ limit }: { limit?: number }) {
  const displayClients = limit ? clients.slice(0, limit) : clients;
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
      {displayClients.map((client, index) => (
        <div 
          key={index} 
          className="bg-gray-50 border border-gray-100 py-8 px-4 rounded flex items-center justify-center text-center hover:bg-brand-navy hover:text-white transition-colors duration-300"
        >
          <span className="font-semibold text-sm md:text-base">{client}</span>
        </div>
      ))}
    </div>
  );
}
