import { useEffect, useState } from "react";
import SheduleCard from "../SheduleCard/SheduleCard";

const FootballSchedule = () => {
  const [footballMatch, setFootballMatch] = useState([]);

  useEffect(() => {
    fetch("football.json")
      .then((res) => res.json())
      .then((data) => setFootballMatch(data));
  }, []);

  return (
    <div className="py-8 mx-5">
      <h2 className="text-2xl font-bold text-primary border-b border-primary mb-6 uppercase">
        Football Match- 0{footballMatch.length}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {footballMatch.map((match) => (
          <SheduleCard key={match.id} match={match} />
        ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-secondary">More Match</button>
      </div>
    </div>
  );
};

export default FootballSchedule;
