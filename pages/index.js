import Banner from "../components/Banner/Banner";
import FootballSchedule from "../components/FootballSchedule/FootballSchedule";
import Header from "../components/Header/Header";

export default function Home() {
    return (
        <div data-theme="mytheme" className="w-full">
            <div className="max-w-[1440px] mx-auto">
                <Header></Header>
                <Banner></Banner>
                <FootballSchedule />
            </div>
        </div>
    );
}
