import { BsFillEyeFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";

export default function Button({title1="Get Started",title2="Right Now", eyes=false}) {
  return (
    <button className="group relative bg-white hover:bg-zinc-300 text-black font-semibold text-xs md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-full overflow-hidden transition-colors duration-200 ease-in-out shadow-lg hover:shadow-xl w-32 md:w-40">
      <div className="relative h-5 flex items-center justify-center">
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex space-x-[1px]">
              {title1.split("").map((letter, index) => (
                <span
                  key={`up-${index}`}
                  className="inline-block transition-all duration-300 group-hover:-translate-y-full opacity-100 group-hover:opacity-0"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {letter}
                </span>
              ))}
            </span>
            {eyes ? (
              <BsFillEyeFill 
                className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-full opacity-100 group-hover:opacity-0"
                style={{ transitionDelay: `${("Get Started".length - 1) * 80}ms` }}
              />
            ) : (
              <FaLocationArrow
                className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-full opacity-100 group-hover:opacity-0"
                style={{ transitionDelay: `${("Get Started".length - 1) * 80}ms` }}
              />
            )}
          </span>
        </span>

        <span className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex space-x-[1px]">
              {title2.split("").map((letter, index) => (
                <span
                  key={`down-${index}`}
                  className="inline-block translate-y-full transition-all duration-300 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {letter}
                </span>
              ))}
            </span>
            {eyes ? (
              <BsFillEyeFill 
                className="h-4 w-4 translate-y-full transition-all duration-300 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                style={{ transitionDelay: `${("Get Started".length - 1) * 80}ms` }}
              />
            ) : (
              <FaLocationArrow
                className="h-4 w-4 translate-y-full transition-all duration-300 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                style={{ transitionDelay: `${("Get Started".length - 1) * 80}ms` }}
              />
            )}
          </span>
        </span>
      </div>
    </button>
  )
}