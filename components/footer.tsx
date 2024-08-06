import { FaCopyright } from 'react-icons/fa'; // Importing from react-icons for copyright symbol

const Footer = () => {
    return (
        <footer className="w-full text-white py-4">
            <div className="container mx-auto flex flex-col items-center text-center space-y-2 md:space-y-4">
                <h2 className="text-2xl font-bold">BNG.CO</h2>
                <p className="text-lg">BahalaNaGang.Co</p>
                <div className="flex items-center space-x-2">
                    <FaCopyright className="text-sm" />
                    <p className="text-sm">2024 MacTech. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
