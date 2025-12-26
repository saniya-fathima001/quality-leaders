
import { CalendarCheck, MapPin, Award } from 'lucide-react';

const Trust: React.FC = () => {
    return (
        <section className="py-6 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 divide-y md:divide-y-0 md:grid-cols-3 gap-4 md:gap-8">
                    <div className="flex items-center justify-center gap-3 py-2 md:py-0">
                        <CalendarCheck className="w-6 h-6 text-secondary flex-shrink-0" />
                        <span className="text-primary font-bold text-sm md:text-base">10+ Years Experience</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 py-2 md:py-0">
                        <Award className="w-6 h-6 text-secondary flex-shrink-0" />
                        <span className="text-primary font-bold text-sm md:text-base">Major Projects Delivered</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 py-2 md:py-0">
                        <MapPin className="w-6 h-6 text-secondary flex-shrink-0" />
                        <span className="text-primary font-bold text-sm md:text-base">Saudi Market Expertise</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;

