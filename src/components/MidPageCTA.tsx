

const MidPageCTA: React.FC = () => {
    return (
        <section className="py-16 bg-primary text-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Planning a construction project?</h2>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                    Let’s discuss your vision and how we can bring it to life with precision and quality.
                </p>
                <a
                    href="#contact"
                    className="inline-block bg-secondary text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-amber-600 active:scale-95 transition-all w-full md:w-auto min-h-[48px]"
                >
                    Request Consultation
                </a>
            </div>
        </section>
    );
};

export default MidPageCTA;
