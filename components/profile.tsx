import Image from "next/image";
import emailIcon from "@/public/email.svg"; // Ensure this path is correct

const Profile = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start text-white w-full">
            {/* Profile Content */}
            <div className="flex flex-col items-center 
                            md:items-start w-full md:w-2/3 lg:w-1/5
                            max-w-md mb-4 md:mb-0 md:mr-1 md:ml-10 ">
                <div className="w-full max-w-xs">
                    <Image
                        src="/avatar.png"
                        alt="avatar"
                        height={150}
                        width={150}
                        className="rounded-2xl mx-auto md:mx-0"
                    />
                </div>
                <div className="flex flex-col items-center md:items-start space-y-4 mt-4 w-full">
                    <div className="flex flex-wrap justify-center md:justify-start space-x-4">
                        <Image
                            src="/fbIcon.svg"
                            width={30}
                            height={30}
                            alt="Follow me on Facebook"
                            className=""
                        />
                        <Image
                            src="/xIcon.svg"
                            width={30}
                            height={30}
                            alt="Follow me on X"
                            className=""
                        />
                        <Image
                            src="/messengerIcon.svg"
                            width={30}
                            height={30}
                            alt="Message me on Messenger"
                            className=""
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 w-full max-w-sm">
                        <button
                            type="button"
                            className="flex  justify-center focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900 w-full md:w-auto sm:w-1/3 "
                        >
                            <Image
                                src="/email.svg"
                                width={20}
                                height={20}
                                alt="Icon for email"
                                className="invert"
                            />
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center focus:outline-none text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900 w-full md:w-auto sm:w-2/4"
                        >
                            Save
                        </button>
                    </div>
                </div>
                <hr className="block md:hidden my-6 border-gray-700 w-full" />
            </div>

            {/* Contact Information */}
            <div className="flex-shrink-0 md:w-2/3 lg:w-4/5 text-center md:text-left md:mt-20 space-y-2">
                <p className="text-sm md:text-2xl md:mb-4 lg:text-3xl">
                    Email: <a href="mailto:Raymart.Maqueda@gmail.com" className="text-blue-400">Raymart.Maqueda@gmail.com</a>
                </p>
                <p className="text-sm md:text-2xl lg:text-lg">
                    Phone: <a href="tel:+639668164483" className="text-blue-400">+639668164483</a>
                </p>

            </div>
        </div>
    );
};

export default Profile;
