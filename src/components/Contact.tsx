
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-primary p-6 text-white text-center">
                        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                        <p className="text-gray-300">Get a free quote for your next project.</p>
                    </div>

                    <div className="p-6 md:p-8">
                        <form className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="Your Name" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="email@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="+966 5..." />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="mt-4 w-full bg-primary hover:bg-slate-800 text-white font-bold text-lg py-4 rounded-lg shadow-md active:scale-95 transition-all flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="flex flex-col items-center">
                                <Phone className="text-secondary mb-2" />
                                <span className="text-gray-600 text-sm">+966 50 000 0000</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <Mail className="text-secondary mb-2" />
                                <span className="text-gray-600 text-sm">info@qlg.sa</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <MapPin className="text-secondary mb-2" />
                                <span className="text-gray-600 text-sm">Riyadh, Saudi Arabia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
