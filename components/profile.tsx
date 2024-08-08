import Image from "next/image";
import Link from "next/link";


const Profile = () => {
    return (
        <div className="relative z-10 mt-[-45px] flex flex-col md:flex-row items-center 
        md:items-start text-white w-full">
            {/* Profile Content */}
            <div className="flex flex-col items-center 
                            md:items-start w-full md:w-2/3 lg:w-1/5
                            max-w-md mb-4 md:mb-0 md:mr-4 md:ml-11 ">
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                    <Image
                        src="/avatar.png"
                        alt="avatar"
                        height={150}
                        width={150}
                        className="rounded-full mx-auto md:mx-0"
                    />
                </div>
                <div className="flex flex-col items-center md:items-start  space-y-4 mt-4 w-full">
                    <div className="flex flex-wrap justify-center md:justify-start md:ml-4 space-x-4">
                        <Link href="https://www.facebook.com/marqk051209" >
                            <Image
                                src="/fbIcon.svg"
                                width={30}
                                height={30}
                                alt="Follow me on Facebook"
                                className=""
                            />
                        </Link>
                        <Link href="https://x.com/kuyamarqk?t=qYTXrSXze1cn8qD1R3PSww&s=09">
                            <Image
                                src="/xIcon.svg"
                                width={30}
                                height={30}
                                alt="Follow me on X"
                                className=""
                            />
                        </Link>
                        <Link href="https://m.me/marqk051209">
                            <Image
                                src="/messengerIcon.svg"
                                width={30}
                                height={30}
                                alt="Message me on Messenger"
                                className=""
                            />
                        </Link>

                    </div>

                </div>
                <div className="flex flex-row gap-4 w-full items-center md:flex-row  mt-4">
                    <button
                        type="button"
                        className="flex justify-center focus:outline-none text-white
                             bg-orange-500 hover:bg-yellow-500 focus:ring-4
                              focus:ring-yellow-300 font-medium rounded-lg 
                              text-sm px-5 py-2.5 dark:focus:ring-yellow-900 w-1/3 mx-auto"
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
                        className="flex justify-center focus:outline-none
                             text-white bg-orange-500 hover:bg-yellow-500 focus:ring-4
                              focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 
                              dark:focus:ring-yellow-900 w-2/3  mx-auto"
                    >
                        Save
                    </button>
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
