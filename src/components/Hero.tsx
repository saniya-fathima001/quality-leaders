
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative bg-primary pt-6 pb-10 px-4 md:py-20 overflow-hidden">
            {/* Background Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-slate-800 z-0"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto text-center md:text-left max-w-2xl mx-auto">
                <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-3">
                    Building Saudi Arabia’s Construction & <span className="text-secondary">Infrastructure</span> Projects
                </h1>

                <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
                    Trusted partner for large-scale development and infrastructure excellence.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                    <a
                        href="#contact"
                        className="w-full sm:w-auto bg-secondary hover:bg-amber-600 text-white font-bold text-lg py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 min-h-[48px]"
                    >
                        Request a Quote <ArrowRight size={20} />
                    </a>
                    <a
                        href="#projects"
                        className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-lg py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 min-h-[48px]"
                    >
                        View Our Work <ArrowUpRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

