

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
            <div className="container mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Quality Leaders Group. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;
