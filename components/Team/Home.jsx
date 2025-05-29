import Image from "next/image";
import React from "react";
import ali from "../../public/assets/ali.jpg";
import yasir from "../../public/assets/yasir.jpg";
import papu from "../../public/assets/papu.jpg";
import aqib from "../../public/assets/aqib.jpg";
import sami from "../../public/assets/sami.jpg";

function Home() {
  return (
    <div className="flex items-center justify-center w-full h-auto">
      <div className="w-full h-auto flex justify-center flex-col gap-12 mobile:gap-8 py-20 items-center mobile:p-4 mobile:py-16 wide:w-[90rem]">
        <h1 className="text-xl font-semibold mobile:mb-8">Our Team</h1>
        <div className="w-full h-auto flex justify-center flex-row gap-8 mobile:flex-col">
          <div className="w-[20%] min-h-32 flex flex-col items-center justify-evenly gap-2 mobile:justify-center mobile:w-full">
            <Image
              src={yasir}
              alt="CEO & Founder"
              width={140}
              height={140}
              className="mobile:w-3/4"
            />
            <h3 className="text-gray-700 text-sm mobile:text-lg">
              CEO & Founder
            </h3>
            <h1 className="text-xl">Shakir Solangi</h1>
          </div>
          <div className="w-[20%] min-h-36 flex flex-col items-center justify-between gap-2 mobile:justify-center mobile:w-full">
            <Image
              src={ali}
              alt="FullStack Mern Developer"
              width={120}
              height={100}
              className="mobile:w-3/4"
            />
            <h3 className="text-gray-700 text-sm mobile:text-lg">
              FullStack Mern Developer
            </h3>
            <h1 className="text-xl">Ali Raza</h1>
          </div>
          <div className="w-[20%] min-h-36 flex flex-col items-center justify-between gap-2 mobile:justify-center mobile:w-full">
            <Image
              src={sami}
              alt="SQA Tester"
              width={130}
              height={130}
              className="mobile:w-3/4"
            />
            <h3 className="text-gray-700 text-sm mobile:text-lg">
              FullStack Developer
            </h3>
            <h1 className="text-xl">Sami Solangi</h1>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center flex-row gap-8 mobile:flex-col">
          <div className="w-[20%] min-h-36 flex flex-col items-center justify-between gap-2 mobile:justify-center mobile:w-full">
            <Image
              src={aqib}
              alt="SQA Tester"
              width={120}
              height={100}
              className="mobile:w-3/4"
            />
            <h3 className="text-gray-700 text-sm mobile:text-lg">SQA Tester</h3>
            <h1 className="text-xl">Aqib Ali</h1>
          </div>
          <div className="w-[20%] min-h-36 flex flex-col items-center justify-between gap-2 mobile:justify-center mobile:w-full">
            <Image
              src={papu}
              alt="QA Tester"
              width={140}
              height={120}
              className="mobile:w-3/4"
            />
            <h3 className="text-gray-700 text-sm mobile:text-lg">QA Tester</h3>
            <h1 className="text-xl">Papu Solangi</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
