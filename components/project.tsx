import Image from "next/image";

const Project = () => {
    return (
        <div className="flex flex-col mx-auto text-white w-full max-w-screen-lg px-4 md:px-8">
            <h1 className="text-4xl text-center mb-6">BahalaNaGang.Co</h1>

            {/* Sections Container */}
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 space-y-8 md:space-y-0">
                {/* Company Background Section */}
                <div className="flex-3">
                    <h2 className="text-2xl text-orange-500 mb-2">Company Background</h2>
                    <p className="text-base md:text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab culpa aut ea reprehenderit, obcaecati esse doloremque consequatur molestias quis dolorum voluptatum debitis perferendis ex in. Quia repellendus cupiditate praesentium magni!
                    </p>
                </div>

                {/* Our Services Section */}
                <div className="flex-3">
                    <h2 className="text-2xl text-orange-500 mb-2">Our Services</h2>
                    <p className="text-base md:text-lg lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui cum aut dolorem in a libero quod, veritatis expedita, ab, quas dicta nostrum exercitationem! Eum aut excepturi sit ratione amet.
                    </p>
                </div>
            </div>

            {/* Images */}
            <div className="flex flex-row gap-4 ">
                <div className="w-full md:w-1/2 lg:w-1/2">
                    <Image
                        src="/services1.png"
                        alt="image of first service"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-auto"
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2">
                    <Image
                        src="/services2.png"
                        alt="image of second service"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;
