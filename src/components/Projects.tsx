
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-2">Featured <span className="text-secondary">Projects</span></h2>
                        <p className="text-gray-600">Landmark developments shaping the future.</p>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-secondary font-bold hover:underline">
                        View All Projects <ArrowRight size={16} className="ml-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Project Card 1 */}
                    <div className="group relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80 bg-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Riyadh Commercial Tower"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-white text-xl font-bold mb-1">Riyadh Commercial Tower</h3>
                            <p className="text-gray-300 text-sm flex items-center gap-1">
                                <span className="bg-secondary w-2 h-2 rounded-full inline-block"></span> Riyadh, KSA
                            </p>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="group relative rounded-xl overflow-hidden shadow-lg h-64 md:h-80 bg-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1590644365607-1c5a38fc61e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Jeddah Industrial Complex"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-white text-xl font-bold mb-1">Jeddah Industrial Complex</h3>
                            <p className="text-gray-300 text-sm flex items-center gap-1">
                                <span className="bg-secondary w-2 h-2 rounded-full inline-block"></span> Jeddah, KSA
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center md:hidden">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center w-full bg-white border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
