import Image from 'next/image';

function MyComponent() {
    return (
        <div className="flex flex-col items-center pb-9">
            <div className="self-stretch py-20 pl-20 mt-20 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-12 py-20 mt-1.5 w-full text-center bg-white shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <div className="self-center mt-14 text-4xl font-bold text-900 capitalize max-md:mt-10"> About our wedding Planning Services </div>
                            <div className="mt-20 text-base leading-10 text-neutral-700 max-md:mt-10 max-md:max-w-full">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. Donec in porttitor elit. Suspendisse accumsan iaculis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. Donec in porttitor elit. Suspendisse accumsan iaculis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. Donec in porttitor elit. Suspendisse accumsan iaculis tincidunt.{" "}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                        <Image loading="lazy" src="/hero.png" alt="ext_51 image" className="mt-11 w-full aspect-[1.47] max-md:mt-10 max-md:max-w-full" width={180} height={180} />
                    </div>
                </div>
            </div>

            <div className="px-5 mt-40 w-full max-w-[1202px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                        <div className="text-6xl font-bold text-red-900 capitalize max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                            <span className="leading-[64px]">What we Serve to </span>You for <span className="leading-[64px]"> your </span>
                            <span className="text-red-900 leading-[64px]">best wedding</span>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow mt-4 text-xl max-md:mt-10 max-md:max-w-full">
                            <div className="leading-10 text-neutral-700 max-md:max-w-full"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit.{" "} </div>
                            <div className="flex gap-4 self-start mt-10 font-extrabold uppercase text-neutral-800"> <div className="grow underline">see more</div> <Image loading="lazy" src="http://b.io/ext_52-" alt="ext_52 image" className="shrink-0 w-10 border-solid aspect-[1.82] border-[3px] border-neutral-800 stroke-[3px] stroke-neutral-800" width={28} height={51} /> </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex justify-center items-center self-stretch px-16 py-12 mt-60 w-full bg-orange-100 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <Image loading="lazy" src="http://b.io/ext_69-" alt="ext_69 image" className="w-full aspect-[1.28] max-w-[1347px] max-md:max-w-full" width={1347} height={1053} />
            </div>

            <div className="mt-72 w-full max-w-[1199px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 mt-24 text-xl max-md:mt-10 max-md:max-w-full">
                            <div className="leading-10 text-neutral-700 max-md:max-w-full"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit.{" "} </div>
                            <div className="flex gap-4 self-start mt-8 font-extrabold uppercase text-neutral-800"> <div className="grow underline">see more</div> <Image loading="lazy" src="http://b.io/ext_70-" alt="ext_70 image" className="shrink-0 w-10 border-solid aspect-[1.82] border-[3px] border-neutral-800 stroke-[3px] stroke-neutral-800" width={35} height={29} /> </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 text-6xl font-bold capitalize text-neutral-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                            <Image loading="lazy" src="http://b.io/ext_71-" alt="ext_71 image" className="aspect-square w-[62px]" width={62} height={62} />
                            <div className="mt-4 max-md:max-w-full max-md:text-4xl"> Our Recent Work <br /> best wedding gallery </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 mt-24 w-full max-w-[1202px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-neutral-800 max-md:mt-7">
                            <Image loading="lazy" src="http://b.io/ext_72-" alt="ext_72 image" className="w-full aspect-[0.84]" width={1342} height={1600} />
                            <div className="flex flex-col items-start pt-2.5 pr-20 pb-6 pl-3 w-full bg-white max-md:pr-5">
                                <div className="text-xl font-semibold text-center capitalize"> Gallery Wedding 1 </div>
                                <div className="flex gap-2.5 mt-3 text-base font-bold uppercase"> <div className="grow underline">see more</div> <Image loading="lazy" src="http://b.io/ext_73-" alt="ext_73 image" className="shrink-0 border-solid aspect-[1.32] border-[3px] border-neutral-800 stroke-[3px] stroke-neutral-800 w-[29px]" width={29} height={38} /> </div>
                            </div>
                            <Image loading="lazy" src="http://b.io/ext_74-" alt="ext_74 image" className="mt-10 w-full aspect-[1.59] max-md:mt-10" width={2135} height={1342} />
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-neutral-800 max-md:mt-7">
                            <Image loading="lazy" src="http://b.io/ext_75-" alt="ext_75 image" className="w-full aspect-[1.59]" width={2135} height={1342} />
                            <div className="flex flex-col items-start pt-2.5 pr-20 pb-6 pl-3 w-full bg-white max-md:pr-5">
                                <div className="text-xl font-semibold text-center capitalize"> Gallery Wedding 2 </div>
                                <div className="flex gap-2.5 mt-3 text-base font-bold uppercase"> <div className="grow underline">see more</div> <Image loading="lazy" src="http://b.io/ext_76-" alt="ext_76 image" className="shrink-0 border-solid aspect-[1.32] border-[3px] border-transparent border-neutral-800 stroke-[3px] stroke-neutral-800 w-[29px]" width={29} height={38} /> </div>
                            </div>
                            <Image loading="lazy" src="http://b.io/ext_77-" alt="ext_77 image" className="mt-10 w-full aspect-[0.84] max-md:mt-10" width={1342} height={1600} />
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-neutral-800 max-md:mt-7">
                            <Image loading="lazy" src="http://b.io/ext_78-" alt="ext_78 image" className="w-full aspect-[0.84]" width={1342} height={1600} />
                            <div className="flex flex-col items-start pt-2.5 pr-20 pb-6 pl-3 w-full bg-white max-md:pr-5">
                                <div className="text-xl font-semibold text-center capitalize"> Gallery Wedding 3 </div>
                                <div className="flex gap-2.5 mt-3 text-base font-bold uppercase"> <div className="grow underline">see more</div> <Image loading="lazy" src="http://b.io/ext_79-" alt="ext_79 image" className="shrink-0 border-solid aspect-[1.32] border-[3px] border-neutral-800 stroke-[3px] stroke-neutral-800 w-[29px]" width={29} height={38} /> </div>
                            </div>
                            <Image loading="lazy" src="http://b.io/ext_80-" alt="ext_80 image" className="mt-8 w-full aspect-[1.54]" width={2135} height={1342} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 px-5 w-full max-w-[1200px] text-neutral-800 max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col flex-1 items-start pt-2.5 pr-20 pb-6 pl-3 bg-white max-md:pr-5">
                    <div className="text-xl font-semibold text-center capitalize"> Gallery Wedding 4 </div>
                    <div className="flex gap-2.5 mt-3 text-base font-bold uppercase"> <div className="grow underline">see more</div> <Image loading="lazy" src="http://b.io/ext_81-" alt="ext_81 image" className="shrink-0 border-solid aspect-[1.32] border-[3px] border-neutral-800 stroke-[3px] stroke-neutral-800 w-[29px]" width={29} height={38} /> </div>
                </div>
                <div className="flex flex-col flex-1 items-start pt-2.5 pr-20 pb-6 pl-3 bg-white max-md:pr-5">
                    <div className="text-xl font-semibold text-center capitalize"> Gallery Wedding 5 </div>
                    <div className="flex gap-2.5 mt-3 text-base font-bold uppercase"> <div className="grow underline">see more</div> <Image loading="lazy" src="http://b.io/ext_82-" alt="ext_82 image" className="shrink-0 border-solid aspect-[1.32] border-[3px] border-neutral-800 stroke-[3px] stroke-neutral-800 w-[29px]" width={29} height={38} /> </div>
                </div>
                <div className="flex flex-col flex-1 items-start pt-2.5 pr-20 pb-6 pl-3 bg-white max-md:pr-5">
                    <div className="text-xl font-semibold text-center capitalize"> Gallery Wedding 6 </div>
                    <div className="flex gap-2.5 mt-3 text-base font-bold uppercase"> <div className="grow underline">see more</div> <Image loading="lazy" src="http://b.io/ext_83-" alt="ext_83 image" className="shrink-0 border-solid aspect-[1.32] border-[3px] border-neutral-800 stroke-[3px] stroke-neutral-800 w-[29px]" width={29} height={38} /> </div>
                </div>
            </div>
            <Image loading="lazy" src="http://b.io/ext_84-" alt="ext_84 image" className="mt-36 w-full aspect-[1.43] max-w-[1320px] max-md:mt-10 max-md:max-w-full" width={1320} height={920} />
            <div className="flex flex-col px-5 mt-36 w-full max-w-[1202px] max-md:mt-10 max-md:max-w-full">
                <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-2xl font-bold text-neutral-800 max-md:mt-10 max-md:max-w-full">
                                <div className="text-6xl capitalize max-md:max-w-full max-md:text-4xl"> book for an appointment </div>
                                <div className="mt-16 text-xl leading-10 text-neutral-700 max-md:mt-10 max-md:max-w-full"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit. Donec in porttitor elit. Suspendisse accumsan iaculis tincidunt.{" "} </div>
                                <div className="mt-16 text-4xl capitalize max-md:mt-10 max-md:max-w-full"> Our Info </div>
                                <div className="flex gap-3.5 self-start mt-14 whitespace-nowrap text-neutral-700 max-md:mt-10">
                                    <Image loading="lazy" src="http://b.io/ext_85-" alt="ext_85 image" className="shrink-0 aspect-square w-[25px]" width={25} height={25} />
                                    <div className="flex-auto my-auto">+112233445566</div>
                                </div>
                                <div className="flex gap-3.5 mt-8 whitespace-nowrap max-md:flex-wrap">
                                    <Image loading="lazy" src="http://b.io/ext_86-" alt="ext_86 image" className="shrink-0 self-start aspect-square w-[25px]" width={25} height={25} />
                                    <div className="flex-auto max-md:max-w-full"> truelove@wedding.com </div>
                                </div>
                                <div className="flex gap-3.5 self-start mt-8 text-neutral-700">
                                    <Image loading="lazy" src="http://b.io/ext_87-" alt="ext_87 image" className="shrink-0 self-start aspect-square w-[25px]" width={25} height={25} />
                                    <div className="flex-auto">Bandar Lampung</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-start px-16 pt-16 border-black border-solid shadow-lg border-[3px] max-md:mt-8 max-md:max-w-full">
                                <div className="flex z-10 flex-col items-start pb-9 border-orange-400 border-solid shadow-lg border-[3px] max-md:pr-5 max-md:max-w-full">
                                    <div className="flex z-10 flex-col px-16 py-11 mt-0 w-full bg-white shadow-lg max-md:px-5 max-md:max-w-full">
                                        <div className="max-md:mr-2 max-md:max-w-full">
                                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                                    <div className="flex flex-col grow text-xl max-md:mt-8">
                                                        <div className="text-4xl font-bold capitalize text-neutral-800"> Contact us </div>
                                                        <div className="mt-14 text-neutral-700 max-md:mt-10"> Name </div>
                                                        <div className="mt-9 text-neutral-500"> Your name </div>
                                                        <div className="shrink-0 mt-2.5 h-0.5 bg-black border-2 border-black border-solid" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                                    <div className="flex flex-col grow mt-20 text-xl max-md:mt-10">
                                                        <div className="text-neutral-700">Phone Number</div>
                                                        <div className="mt-9 text-neutral-500"> Your phone number </div>
                                                        <div className="shrink-0 mt-1.5 h-0.5 bg-black border-2 border-black border-solid" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-16 text-xl text-neutral-700 max-md:mt-10 max-md:max-w-full"> Email </div>
                                        <div className="mt-10 text-xl text-neutral-500 max-md:max-w-full"> Enter Your Email </div>
                                        <div className="shrink-0 mt-2.5 h-0.5 bg-black border-2 border-black border-solid max-md:max-w-full" />
                                        <div className="mt-16 text-xl text-neutral-700 max-md:mt-10 max-md:max-w-full"> Message </div>
                                        <div className="mt-11 text-xl text-neutral-500 max-md:mt-10 max-md:max-w-full"> Leave Your Message </div>
                                        <div className="shrink-0 mt-1.5 h-0.5 bg-black border-2 border-black border-solid max-md:max-w-full" />
                                        <div className="flex flex-col pb-2 mt-12 ml-2.5 max-w-full text-xl font-extrabold text-white uppercase whitespace-nowrap bg-black rounded-3xl w-[258px] max-md:mt-10">
                                            <div className="flex z-10 gap-5 px-9 py-1.5 mt-0 rounded-3xl border-white border-solid bg-neutral-800 border-[3px] max-md:px-5">
                                                <div className="flex-auto my-auto">Submit</div>
                                                <Image loading="lazy" src="http://b.io/ext_88-" alt="ext_88 image" className="shrink-0 aspect-[0.98] w-[47px]" width={47} height={47} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden relative flex-col justify-center mt-52 w-full text-2xl font-medium text-center min-h-[287px] text-neutral-700 max-md:mt-10 max-md:max-w-full">
                <Image loading="lazy" src="http://b.io/ext_89-" alt="ext_89 image" className="object-cover absolute inset-0 size-full" layout="fill" />
                <div className="flex relative justify-center items-center px-16 py-20 bg-white bg-opacity-80 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col mt-3.5 mb-4 max-w-full w-[300px]">
                        <Image loading="lazy" src="http://b.io/ext_90-" alt="ext_90 image" className="self-center aspect-square w-[47px]" width={47} height={47} /><div className="mt-7 underline">Watch Our Documentation</div>
                    </div>
                </div>
            </div>
            <div className="mt-36 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow max-md:mt-10">
                                        <div className="text-6xl font-bold text-orange-400 max-md:text-4xl">
                                            <span className="">True</span><span className="text-orange-400">L ve</span>
                                        </div>
                                        <div className="mt-10 text-2xl font-semibold leading-10 text-neutral-700 max-md:mt-10">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus placerat velit.{" "}
                                        </div>
                                        <div className="flex gap-5 mt-10 max-md:pr-5 max-md:mt-10">
                                            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd0c20aee88bddd40c99c1725afc15ab0fe17ad6186248f1c069cd3f774ef7a?apiKey=26d3383497af445c8a5ef7825b140c3a&" alt="icon_1" className="shrink-0 aspect-square w-[35px]" width={35} height={35} />
                                            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1be85aea4db731204ea6c1f4c2f9b91cf49b2d6dc3e02b106c77ddb9ed406cde?apiKey=26d3383497af445c8a5ef7825b140c3a&" alt="icon_2" className="shrink-0 aspect-square w-[35px]" width={35} height={35} />
                                            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/65da70e85678e57b54b8474daf755cf9365ec169a38e76f5d4aa67f2a947acf8?apiKey=26d3383497af445c8a5ef7825b140c3a&" alt="icon_3" className="shrink-0 aspect-square w-[35px]" width={35} height={35} />
                                            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cf241b0b6e3917691ad9e2f8dbed004ae3e144aa1f9f64beb22d7677bcd5770?apiKey=26d3383497af445c8a5ef7825b140c3a&" alt="icon_4" className="shrink-0 aspect-square w-[35px]" width={35} height={35} />
                                            <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/889cb0a802f62676bfa75fa62bd60aea75e4191df7552767d245a8bc511757d5?apiKey=26d3383497af445c8a5ef7825b140c3a&" alt="icon_5" className="shrink-0 aspect-square w-[35px]" width={35} height={35} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col mt-14 text-xl text-neutral-700 max-md:mt-10">
                                        <div className="text-2xl font-bold capitalize text-neutral-800"> Menu </div>
                                        <div className="mt-11 max-md:mt-10">Home</div>
                                        <div className="mt-7">About us</div>
                                        <div className="mt-7">Services</div>
                                        <div className="mt-7">Gallery</div>
                                        <div className="mt-6">Contact</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="grow px-px mt-2.5 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col self-stretch my-auto text-xl text-neutral-700 max-md:mt-10">
                                        <div className="text-2xl font-bold capitalize text-neutral-800"> Services </div>
                                        <div className="mt-11 max-md:mt-10">Wedding Plan</div>
                                        <div className="mt-6">Photography</div>
                                        <div className="mt-6">Decoration</div>
                                        <div className="mt-7">Invitation</div>
                                        <div className="mt-7">Catering</div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
                                    <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8575fd0148f8bd23ff9007fe896841248a177f3e6f8a7b1d05c2aab42a8e3df?apiKey=26d3383497af445c8a5ef7825b140c3a&" alt="ext_48 image" className="grow w-full aspect-[1.16] max-md:mt-10" width={1200} height={1035} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shrink-0 mt-20 border-solid bg-stone-300 border-[3px] border-stone-300 h-[3px] max-md:mt-10 max-md:max-w-full" />
            <div className="mt-10 text-2xl font-extrabold text-neutral-700 max-md:mt-10 max-md:max-w-full">
                Copyright © 2023, All Right Reserved.
            </div>
        </div>
    );
}

export default MyComponent;