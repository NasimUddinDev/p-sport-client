import { useEffect, useState } from "react";

const FootballSchedule = () => {
  const [footballMatch, setFootballMatch] = useState([]);

  useEffect(() => {
    fetch("football.json")
      .then((res) => res.json())
      .then((data) => setFootballMatch(data));
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-center font-bold text-2xl pb-5">
        Football Match- 0{footballMatch.length}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {footballMatch.map((match) => (
          <div
            key={match._id}
            className="border border-secondary rounded-md p-10"
          >
            <div className="flex justify-between">
              <h4 className="uppercase font-bold text-secondary">
                FIFA- {match.matchs}
              </h4>
              <p className="font-bold">
                {match.time} | {match.date}
              </p>
            </div>
            <div className="flex justify-between pt-7">
              <div className="flex gap-4 items-center">
                <img src={match.team1Flag} alt="" />
                <p className="font-bold capitalize">{match.team1}</p>
              </div>
              <p className="text-2xl font-bold text-orange-600">VS</p>
              <div className="flex gap-4 items-center">
                <p className="font-bold capitalize">{match.team2}</p>
                <img src={match.team2Flag} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootballSchedule;
