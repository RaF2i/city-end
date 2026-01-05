import React from "react"

const Footer = () => {
    return (
        <div className="w-full px-4 md:px-0">
            <div className="max-w-screen-xl mx-auto py-10 md:py-20 flex flex-col md:flex-row gap-10 md:gap-32">
                <div className="md:basis-1/2">
                    <h1 className="te text-[8rem] md:text-[10rem] lg:text-[11.5rem] font-semibold leading-none tracking-tight">
                        C_E
                    </h1>
                </div>
                <div className="md:basis-1/2 flex flex-col md:flex-row gap-8 md:gap-4">
                    <div className="md:basis-1/3">
                        <h4 className="mb-6 md:mb-10 text-zinc-500 font-semibold">Socials</h4>
                        {["Instagram", "Twitter", "LinkedIn"].map(
                            (item, index) => (
                                <a
                                    key={index}
                                    href={`#${item}`}
                                    className="block mt-2 text-zinc-600 hover:text-zinc-400 transition-colors"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>
                    <div className="md:basis-1/3">
                        <h4 className="mb-6 md:mb-10 text-zinc-500 font-semibold">Sitemaps</h4>
                        {["Home", "Work", "Careers", "Contact"].map(
                            (item, index) => (
                                <a
                                    key={index}
                                    href={`#${item}`}
                                    className="block mt-2 text-zinc-300 hover:text-zinc-100 transition-colors"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>

                    <div className="md:basis-1/2 flex flex-col md:items-end">
                        <p className="text-left md:text-right text-sm md:text-base">
                            Tick ENd is digital agency driven by
                            oviously money and other stuff on the world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer