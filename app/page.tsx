import MyComponent from "@/components/home/mycomponent";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center pb-9">
        <nav className="flex justify-center items-center self-stretch px-16 py-7 w-full text-white bg-red-900 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-4xl font-medium"> SubhMangalPlanning </div>
            <div className="flex gap-5 my-auto text-lg font-semibold uppercase max-md:flex-wrap">
              <div className="grow underline">Home</div>
              <div>About us</div>
              <div>Services</div>
              <div>Gallery</div>
              <div>Contact</div>
            </div>
          </div>
        </nav>

        <div className="mt-16 w-full max-w-[1320px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-bold text-red-900 leading-[85px] max-md:max-w-full max-md:text-4xl max-md:leading-[63px]">
                  Plan Your <br />
                  <span className="text-red-900">Dream Wedding</span> <br />
                  With Us
                </div>
                <div className="mt-16 text-base leading-10 text-neutral-700 max-md:mt-10 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. Donec in porttitor elit. Suspendisse accumsan iaculis tincidunt.{" "}
                </div>
                <button className="bg-[#770C15] text-white px-16 py-4 rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow items-start pt-20 min-h-[720px] max-md:mt-10 max-md:max-w-full">
                <Image loading="lazy" src="/hero.png" alt="ext_50 image" className="object-cover absolute inset-0 size-full" layout="fill" />
                <div className="relative shrink-0 mt-72 h-[339px] rounded-[95px_0px_0px_0px] w-[15px] max-md:hidden max-md:mt-10" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="px-5 mt-28 w-full max-w-[1199px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-2 pt-2 pb-9 mx-auto w-full bg-white border-black border-solid shadow-lg border-[3px] max-md:mt-8">
                  <div className="flex justify-center items-center self-stretch px-16 py-6 bg-red-900 max-md:px-5"> <Image loading="lazy" src="/Wedding cake.png" alt="ext_53 image" className="w-32 aspect-square" width={128} height={128} /> </div>
                  <div className="mt-10 text-2xl font-bold text-center capitalize text-neutral-800"> Common <br /> communication <br /> Channels </div>
                  <div className="flex gap-1.5 mt-5 text-base font-extrabold uppercase text-neutral-800 items-center">
                    <div className="grow underline">see more</div>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-2 pt-2 pb-9 mx-auto w-full bg-white border-black border-solid shadow-lg border-[3px] max-md:mt-8">
                  <div className="flex justify-center items-center px-16 py-6 bg-red-900 max-md:px-5"> <Image loading="lazy" src="/Photograph.png" alt="ext_55 image" className="w-32 aspect-square" width={128} height={128} /> </div>
                  <div className="mt-10 text-2xl font-bold text-center capitalize text-neutral-800"> Vendor Coordination <br /> and <br /> Management </div>
                  <div className="flex gap-1.5 self-center mt-4 text-base font-extrabold uppercase text-neutral-800 items-center">
                    <div className="grow underline">see more</div>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-2 pt-2 pb-9 mx-auto w-full bg-white border-black border-solid shadow-lg border-[3px] max-md:mt-8">
                  <div className="flex justify-center items-center self-stretch px-16 py-6 bg-red-900 max-md:px-5"> <Image loading="lazy" src="/Diamond.png" alt="ext_57 image" className="w-32 aspect-square" width={128} height={128} /> </div>
                  <div className="mt-10 text-2xl font-bold text-center capitalize text-neutral-800"> Task <br /> Scheduling <br /> Tools </div>
                  <div className="flex gap-1.5 mt-5 text-base font-extrabold uppercase text-neutral-800 items-center">
                    <div className="grow underline">see more</div>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-2 pt-2 pb-9 mx-auto w-full bg-white border-black border-solid shadow-lg border-[3px] max-md:mt-8">
                  <div className="flex justify-center items-center self-stretch px-16 py-6 bg-red-900 max-md:px-5"> <Image loading="lazy" src="/Couple.png" alt="ext_59 image" className="w-32 aspect-square" width={128} height={128} /> </div>
                  <div className="mt-10 text-2xl font-bold text-center capitalize text-neutral-800"> Personalized <br /> Mood <br /> Boards </div>
                  <div className="flex gap-1.5 mt-5 text-base font-extrabold uppercase text-neutral-800 items-center">
                    <div className="grow underline">see more</div>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 mt-10 w-full max-w-[1199px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-2 pt-2 pb-9 mx-auto w-full bg-white border-black border-solid shadow-lg border-[3px] max-md:mt-8">
                  <div className="flex justify-center items-center self-stretch px-16 py-6 bg-red-900 max-md:px-5"> <Image loading="lazy" src="/Dinner.png" alt="ext_61 image" className="w-32 aspect-square" width={128} height={128} /> </div>
                  <div className="mt-10 text-2xl font-bold text-center capitalize text-neutral-800"> User-Friendly <br /> Interface </div>
                  <div className="flex gap-1.5 mt-14 text-base font-extrabold uppercase text-neutral-800 max-md:mt-10 items-center">
                    <div className="grow underline">see more</div>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-2 pt-2 pb-9 mx-auto w-full bg-white border-black border-solid shadow-lg border-[3px] max-md:mt-8">
                  <div className="flex justify-center items-center self-stretch px-16 py-6 bg-red-900 max-md:px-5"> <Image loading="lazy" src="/Wedding invitation.png" alt="ext_63 image" className="w-32 aspect-square" width={128} height={128} /> </div>
                  <div className="mt-10 text-2xl font-bold text-center capitalize text-neutral-800"> E-commerce <br /> enabled Vendor <br /> Catalogue </div>
                  <div className="flex gap-1.5 mt-4 text-base font-extrabold uppercase text-neutral-800 items-center">
                    <div className="grow underline">see more</div>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-2 pt-2 pb-9 mx-auto w-full bg-white border-black border-solid shadow-lg border-[3px] max-md:mt-8">
                  <div className="flex justify-center items-center self-stretch px-16 py-6 bg-red-900 max-md:px-5"> <Image loading="lazy" src="/Hindu wedding.png" alt="ext_65 image" className="w-32 aspect-square" width={128} height={128} /> </div>
                  <div className="mt-10 text-2xl font-bold text-center capitalize text-neutral-800"> Astrology <br /> Bot </div>
                  <div className="flex gap-1.5 mt-14 text-base font-extrabold uppercase text-neutral-800 max-md:mt-10 items-center">
                    <div className="grow underline">see more</div>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-center px-2 pt-2 pb-9 mx-auto w-full bg-white border-black border-solid shadow-lg border-[3px] max-md:mt-8">
                  <div className="flex justify-center items-center self-stretch px-16 py-6 bg-red-900 max-md:px-5"> <Image loading="lazy" src="/Musical notes.png" alt="ext_67 image" className="w-32 aspect-square" width={128} height={128} /> </div>
                  <div className="mt-10 text-2xl font-bold text-center capitalize text-neutral-800"> Venue Theme <br /> based Cloth <br /> recommendation </div>
                  <div className="flex gap-1.5 mt-5 text-base font-extrabold uppercase text-neutral-800 items-center">
                    <div className="grow underline">see more</div>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex items-center justify-center h-screen w-full bg-blue-100 px-16">
          <div className="min-w-32 border h-4/5 scale-100 bg-green-500 rounded-lg"></div>
          <div className="min-w-32 border h-4/5 scale-[.90] bg-yellow-500 rounded-lg"></div>
          <div className="min-w-32 border h-4/5 scale-[.85] bg-orange-500 rounded-lg"></div>
          <div className="min-w-32 border h-4/5 scale-[.80] bg-red-500 rounded-lg"></div>
        </div> */}
      </main>
      <MyComponent />
    </>

  );
}
