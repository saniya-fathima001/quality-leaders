
import { CalendarCheck, MapPin, Award } from 'lucide-react';

const Trust: React.FC = () => {
    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <CalendarCheck className="w-12 h-12 text-secondary mb-3" />
                        <h3 className="text-3xl font-bold text-primary mb-1">15+</h3>
                        <p className="text-gray-600 font-medium">Years of Experience</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Award className="w-12 h-12 text-secondary mb-3" />
                        <h3 className="text-3xl font-bold text-primary mb-1">200+</h3>
                        <p className="text-gray-600 font-medium">Projects Delivered</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <MapPin className="w-12 h-12 text-secondary mb-3" />
                        <h3 className="text-lg font-bold text-primary mb-1">Saudi-Wide</h3>
                        <p className="text-gray-600 font-medium">Market Expertise</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
