import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShedule } from "./../../redux/actions/sheduleAction";

const CricketShedule = () => {
  const { shedule, isLoading } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllShedule());
  }, []);

  return (
    <div className="w-[80%] mx-auto">
      {isLoading && <h2>Loadding...</h2>}

      <div className="py-10">
        <h2 className="text-center font-bold text-2xl border border-secondary mb-2 rounded-md m-0 py-2">
          Cricket Match- 0{shedule.length}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {shedule &&
            shedule.map((match) => (
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
                    <img src={match.team1Flag} alt="" className="w-10 h-10" />
                    <p className="font-bold capitalize">{match.team1}</p>
                  </div>
                  <p className="text-2xl font-bold text-orange-600">VS</p>
                  <div className="flex gap-4 items-center">
                    <p className="font-bold capitalize">{match.team2}</p>
                    <img src={match.team2Flag} alt="" className="w-10 h-10" />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-secondary">More Match</button>
        </div>
      </div>
    </div>
  );
};

export default CricketShedule;
