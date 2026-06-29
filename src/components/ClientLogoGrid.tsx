import Image from "next/image";

const clients = [
  { name: "CBN", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782556791/image24_lixxzl.png" },
  { name: "NLNG", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782556909/image22_kuatqx.png" },
  { name: "BUA Cement", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782556968/image1_jskbjw.png" },
  { name: "FIRS", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557116/image15_rptw3o.png" },
  { name: "ICPC", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557151/image2_vldhk7.jpg" },
  { name: "AERO Contractors", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557237/image14_zvlfsq.png" },
  { name: "Embassy of Belgium", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557271/image4_oborom.jpg" },
  { name: "JDPI Maiduguri", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557291/image11_ypcs5n.jpg" },
  { name: "NIRSAL PLC", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557465/image18_cbtn74.jpg" },
  { name: "Sokoto Cement", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557465/image19_csleed.png" },
  { name: "ANEEJ", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557463/image13_byzir6.jpg" },
  { name: "ENERGIA Limited", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557457/image3_hs2dn6.png" },
  { name: "NAHCO Aviance", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782560347/images_1_usd3fc.jpg" },
  { name: "NiMet", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557467/image27_pdz5kv.png" },
  { name: "TY Danjuma Foundation", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557460/image10_ddnats.jpg" },
  { name: "Central Bank of Nigeria HQ", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557457/image5_ujf3jb.png" },
  { name: "Fed. Min. of Petroleum Resources", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557459/image8_mberc0.jpg" },
  { name: "Havenhills Synergy", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557464/image16_guin9x.jpg" },
  { name: "NELMCO Abuja", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557466/image21_skplge.jpg" },
  { name: "SAHCO Aviance", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557463/image12_sjhgqz.png" },
  { name: "Yola Electricity Dist.", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557458/image6_ktmmpz.png" },
  { name: "University of Jos", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557458/image7_hna9n5.png" },
  { name: "Institute of Peace & Conflict Resolution", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557467/image29_b2dujg.jpg" },
  { name: "Financial Reporting Council", logo: "https://res.cloudinary.com/dtxtk0u9u/image/upload/v1782557459/image9_zlxkc4.jpg" }
];

export default function ClientLogoGrid({ limit }: { limit?: number }) {
  const displayClients = limit ? clients.slice(0, limit) : clients;
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
      {displayClients.map((client, index) => (
        <div 
          key={index} 
          className="bg-white border border-gray-100 rounded flex items-center justify-center text-center hover:shadow-lg transition-all duration-300 h-32 relative overflow-hidden group"
        >
          {client.logo ? (
            <div className="relative w-full h-full p-6 flex items-center justify-center">
              <Image src={client.logo} alt={`${client.name} logo - Mithrive Global client`} fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-300" />
            </div>
          ) : (
            <span className="font-semibold text-sm md:text-base text-gray-700 px-4 group-hover:text-brand-navy transition-colors">{client.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}
