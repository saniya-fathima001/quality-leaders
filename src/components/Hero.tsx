
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative bg-primary pt-12 pb-16 px-4 md:py-24 overflow-hidden">
            {/* Background Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-slate-800 z-0"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto text-center md:text-left max-w-2xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                    Delivering Construction & <span className="text-secondary">Infrastructure</span> Projects Across Saudi Arabia
                </h1>

                <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                    Trusted partner for large-scale development and infrastructure excellence.
                </p>

                <div className="flex flex-col gap-4">
                    <a
                        href="#contact"
                        className="w-full md:w-auto bg-secondary hover:bg-amber-600 text-white font-bold text-lg py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 min-h-[48px]"
                    >
                        Request a Quote <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
