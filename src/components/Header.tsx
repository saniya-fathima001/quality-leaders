import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="text-xl font-bold text-primary tracking-tight">
                    QUALITY <span className="text-secondary">LEADERS</span>
                </div>

                <div className="flex items-center gap-4">
                    {/* Call Action Button */}
                    <a
                        href="tel:+966500000000"
                        className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-md font-medium text-sm active:scale-95 transition-transform"
                    >
                        <Phone size={16} className="fill-current" />
                        <span>Call</span>
                    </a>

                    {/* Hamburger Menu */}
                    <button
                        className="p-2 text-primary hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <nav className="absolute top-16 left-0 w-full bg-white shadow-lg border-b border-gray-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    <a href="#" className="font-medium text-gray-700 py-2 border-b border-gray-50">Home</a>
                    <a href="#services" className="font-medium text-gray-700 py-2 border-b border-gray-50">Services</a>
                    <a href="#projects" className="font-medium text-gray-700 py-2 border-b border-gray-50">Projects</a>
                    <a href="#contact" className="font-medium text-gray-700 py-2">Contact Us</a>
                </nav>
            )}
        </header>
    );
};

export default Header;
