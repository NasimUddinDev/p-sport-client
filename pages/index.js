import FootballSchedule from "../components/FootballSchedule/FootballSchedule";

export default function Home() {
    return (
        <div data-theme="mytheme" className="w-full h-[2000px]">
            <div className="max-w-[1440px] mx-auto">
                <FootballSchedule />
            </div>
        </div>
    );
}
