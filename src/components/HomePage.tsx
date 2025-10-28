import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative h-screen flex w-screen bg-black overflow-x-hidden">
      <div className="opacity-35">
        <Image
          width={2000}
          height={2000}
          src="/images/dust.png"
          alt=""
          className="absolute -z-1 h-screen w-screen object-contain "
        />
      </div>

      <div className=" absolute -left-[150%] top-32 blur-[1000px]  bg-[#EC4E02] w-516 h-150 "></div>
      <div className="absolute font-Gilroy z-1 top-1/2 right-0 rotate-270 -translate-y-[200%]">
        <span className="font-bold">Echo</span>
        <span className="font-light">Botics</span>
      </div>

      <div className="absolute top-4/6 left-5/6 cursor-pointer z-20">
        <Image
          width={1000}
          height={1000}
          src="/images/badge.png"
          alt=""
          className="w-25"
        />
      </div>

      <div className="absolute bottom-8 left-8">
        <div className="relative flex justify-center items-center h-[100px] w-[100px]">
          <div className="absolute w-full h-full animate-spin-slow">
            <div className="absolute inset-0 flex justify-center items-center">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                <path
                  id="circlePath"
                  d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="none"
                />
                <text font-size="6" letter-spacing="3" text-anchor="middle">
                  <textPath href="#circlePath" startOffset="0%">
                    SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL
                    • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL •
                    SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL
                    • SCROLL • SCROLL • SCROLL • SCROLL •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              className="w-3 h-3">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex font-FontSpring flex-1 translate-x-10 flex-col justify-center h-screen">
        <h2 className=" font-Gilroy font-normal text-[#EC4E02] tracking-widest uppercase text-lg">
          Best Agentic Ai
        </h2>
        <div className=" flex flex-col gap-4 text-7xl">
          <div className="flex gap-20 ">
            Making
            {/* <div className="-translate-x-16 flex justify-center rounded-xl items-center relative">
              <svg
                width="350"
                height="96"
                viewBox="0 0 527 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0">
                <path
                  d="M0 36C0 16.1178 16.1178 0 36 0L419.084 0C428.87 0 438.235 3.98418 445.021 11.0351L468.121 35.0351C490.133 57.9048 473.926 96 442.184 96H36C16.1178 96 0 79.8823 0 60L0 36Z"
                  fill="url(#pattern0_402_1006)"
                />
                <foreignObject
                  x="-31.8"
                  y="-31.8"
                  width="574.218"
                  height="159.6">
                  <div style={{backdropFilter: "blur(15.9px)", clipPath: "url(#bgblur_0_402_1006_clip_path)", height: "100%", width: "100%"}}></div>
                </foreignObject>
                <path
                  data-figma-bg-blur-radius="31.8"
                  d="M0 12C0 5.37258 5.37258 0 12 0L419.084 0C428.87 0 438.235 3.98418 445.021 11.0351L507.24 75.6784C514.578 83.3016 509.175 96 498.595 96H12C5.37258 96 0 90.6274 0 84L0 12Z"
                  fill="#EC4E02"
                  fill-opacity="0.5"
                />
                <path
                  d="M263.33 48.1632L262.069 77.1274H266.236L264.976 48.1632H263.33Z"
                  fill="white"
                />
                <path
                  d="M262.069 19.2H266.236L264.976 48.1641H263.33L262.069 19.2Z"
                  fill="white"
                />
                <path
                  d="M293.106 46.0889V50.2354L264.143 48.9752V47.3491L293.106 46.0889Z"
                  fill="white"
                />
                <path
                  d="M235.2 50.2354V46.0889L264.144 47.3491V48.9752L235.2 50.2354Z"
                  fill="white"
                />
                <path
                  d="M286.095 67.1704L283.168 70.1179L263.574 48.7351L264.733 47.5765L286.095 67.1704Z"
                  fill="white"
                />
                <path
                  d="M242.212 29.1591L245.139 26.2119L264.733 47.5742L263.574 48.7328L242.212 29.1591Z"
                  fill="white"
                />
                <path
                  d="M283.168 26.2119L286.095 29.1591L264.733 48.7328L263.574 47.5742L283.168 26.2119Z"
                  fill="white"
                />
                <path
                  d="M245.139 70.1179L242.212 67.1704L263.574 47.5765L264.733 48.7554L245.139 70.1179Z"
                  fill="white"
                />
                <defs>
                  <pattern
                    id="pattern0_402_1006"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1">
                    <use
                      transform="matrix(0.00195312 0 0 0.0107178 0 -2.92969)"
                    />
                  </pattern>
                  <clipPath
                    id="bgblur_0_402_1006_clip_path"
                    transform="translate(31.8 31.8)">
                    <path d="M0 12C0 5.37258 5.37258 0 12 0L419.084 0C428.87 0 438.235 3.98418 445.021 11.0351L507.24 75.6784C514.578 83.3016 509.175 96 498.595 96H12C5.37258 96 0 90.6274 0 84L0 12Z" />
                  </clipPath>
                  <image
                    id="image0_402_1006"
                    width="512"
                    height="640"
                    preserveAspectRatio="none"
                    href="/images/arrowbg.jpg"
                  />
                </defs>
              </svg>
            </div> */}
            <Image
              width={500}
              height={500}
              src="/images/arrow.png"
              alt=""
              className="-translate-x-16 w-[350px]"
            />
          </div>

          <div className="flex items-center  gap-5">
            <div className="relative border border-[#EC4E02] flex px-2! items-center ">
              <span className=" font-NoContinue">Conversations</span>
              <div className="absolute w-2 h-2 top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#EC4E02]"></div>
              <div className="absolute w-2 h-2 top-0 -right-2 -translate-x-1/2 -translate-y-1/2 bg-[#EC4E02]"></div>
              <div className="absolute w-2 h-2 -bottom-2 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#EC4E02]"></div>
              <div className="absolute w-2 h-2 -bottom-2 -right-2 -translate-x-1/2 -translate-y-1/2 bg-[#EC4E02]"></div>
            </div>{" "}
            With
          </div>
          <div>
            <span className="font-Averno">Ai</span>{" "}
            <span className="text-[#EC4E02]">Feel</span>{" "}
            <span className="font-Gilroy font-extrabold">Real</span>
            <span className="text-[#EC4E02]">.</span>
          </div>
        </div>
        <p className="font-Gilroy mt-2!">
          <span className="text-[#EC4E02]">Echobotics</span> is redefining{" "}
          <span className="text-[#EC4E02]">human-AI</span> interaction with
          real-time voice chat, and lip-sync technology. <br />
          Our Ai doesn&apos;t just talk, it feels like a real person, and it can
          talks and connects like a <span className="text-[#EC4E02]">
            real
          </span>{" "}
          assistant.
        </p>
        <button
          className="w-fit flex p-2! justify-center items-center border-2 border-[#EC4E02] rounded-xl font-normal text-sm font-Gilroy gap-10 pl-5! mt-4! "
          style={{
            backgroundImage:
              "linear-gradient(255.71deg, rgba(236, 78, 2, 0.4) -96.41%, rgba(0, 0, 0, 0.4) 153.59%)",
          }}>
          Explore
          <div className="flex justify-center items-center bg-[#EC4E02] w-8 h-8 rounded-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.6591 16.7663L20.6591 7.01643L10.9092 7.01643"
                stroke="white"
                stroke-width="1.331"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.80181 20.4523L20.3184 6.93579"
                stroke="white"
                stroke-width="1.331"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className="sun img w-[50%] overflow-hidden h-[120vh] rotate-180 bg-no-repeat">
        <Image
          width={1000}
          height={1000}
          src="/images/sunimg.png"
          alt=""
          className="w-full blur-xs -translate-x-[40%] rotate-37 translate-y-25 scale-125 h-full"
        />
      </div>
    </div>
  );
};

export default HomePage;
