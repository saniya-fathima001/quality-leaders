
import { CalendarCheck, MapPin, Award } from 'lucide-react';

const Trust: React.FC = () => {
    return (
        <section className="py-8 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-primary">Why Trust Us</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center justify-center gap-3 md:flex-col md:text-center">
                        <CalendarCheck className="w-8 h-8 text-secondary flex-shrink-0" />
                        <div className="text-left md:text-center">
                            <h3 className="text-xl font-bold text-primary">15+ Years</h3>
                            <p className="text-gray-600 text-sm">Experience</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 md:flex-col md:text-center">
                        <Award className="w-8 h-8 text-secondary flex-shrink-0" />
                        <div className="text-left md:text-center">
                            <h3 className="text-xl font-bold text-primary">200+ Projects</h3>
                            <p className="text-gray-600 text-sm">Delivered</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 md:flex-col md:text-center">
                        <MapPin className="w-8 h-8 text-secondary flex-shrink-0" />
                        <div className="text-left md:text-center">
                            <h3 className="text-lg font-bold text-primary">Saudi-Wide</h3>
                            <p className="text-gray-600 text-sm">Expertise</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;

