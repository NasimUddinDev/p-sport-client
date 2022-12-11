import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const about = () => {
    return (
        <div data-theme="mytheme" className="w-full">
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <h2>About</h2>
                <Footer />
            </div>
        </div>
    );
};

export default about;
