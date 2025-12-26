
import { Hammer, Building2, Ruler, HardHat } from 'lucide-react';

const services = [
    {
        icon: <Building2 className="w-8 h-8 text-secondary" />,
        title: "Commercial Construction",
        description: "Office buildings, retail centers, and industrial facilities."
    },
    {
        icon: <Ruler className="w-8 h-8 text-secondary" />,
        title: "Infrastructure Development",
        description: "Roads, utilities, and public works projects."
    },
    {
        icon: <HardHat className="w-8 h-8 text-secondary" />,
        title: "Project Management",
        description: "End-to-end planning and execution oversight."
    },
    {
        icon: <Hammer className="w-8 h-8 text-secondary" />,
        title: "Renovation & Fit-out",
        description: "Modernizing spaces for optimal performance."
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Core <span className="text-secondary">Services</span></h2>
                    <p className="text-gray-600 max-w-xl mx-auto">Delivering excellence in every phase of construction.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
