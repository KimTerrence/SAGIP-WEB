'use client';

import { Combobox } from "@/components/custom/combobox";
import Navbar from "@/components/custom/navbar";
import ScrollToTop from "@/components/custom/scrolltop";
import { Badge } from "@/components/ui/badge";

const pestCards = [
  {
    name: "Rice Black Bug",
    description: "Attacks rice plants during early seedling stages by sucking sap from leaf sheaths.",
    image: "/pest/palay/ricebug.jpg",
    crop: "Palay",
  },
  {
    name: "Rice Stem Borer",
    description: "Larvae bore into rice stems, cutting off nutrient flow and causing deadhearts.",
    image: "/pest/palay/greenleafhopper.jpg",
    crop: "Corn",
  },
  {
    name: "Rice Leaf Folder",
    description: "Folds leaves together with silk and feeds inside, damaging leaf tissues.",
    image: "/pest/palay/ricebug.jpg",
    crop: "default",
  },
  {
    name: "Rice Bug",
    description: "Feeds on developing grains, causing unfilled or discolored grains.",
    image: "/pest/palay/whorlmaggot.jpg",
    crop: "default",
  },
  {
    name: "Brown Planthopper",
    description: "Destroys plants by sucking sap and transmitting viruses like grassy stunt.",
    image: "/pest/palay/ricebug.jpg",
    crop: "default",
  },
  {
    name: "Green Leafhopper",
    description: "Transmits tungro virus and weakens rice plants by sap-sucking.",
    image: "/pest/palay/ricebug.jpg",
    crop: "default",
  },
];

export default function Pest() {
  return (
    <div>
      <Navbar />
      <div className="bg-white p-8">
        <div className="grid mt-16 min-h-[82vh] w-full place-items-center bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="w-full h-full">
            <Combobox />

            {/* Cards Section */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
              {pestCards.map((pest, index) => (
                <div
                  key={index}
                  className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 bg-white border border-gray-200"
                >
                  <img src={pest.image} alt={pest.name} className="w-full"/>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{pest.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {pest.description}
                  </p>
                  <Badge variant={pest.crop as "Palay" | "Corn" | "default" | "outline"}>{pest.crop}</Badge>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
