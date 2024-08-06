import Image from "next/image";

const Cover = () => {
    return (
        <div className="relative w-full h-48 md:h-64 lg:h-80">
            <Image
                src="/cover.png" // Replace with your cover image path
                alt="Cover Image"
                layout="fill"
                objectFit="fill"
                className="rounded-lg"
            />

        </div>
    );
};

export default Cover;
