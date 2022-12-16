import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShedule } from "../../redux/actions/sheduleAction";

const Shedules = () => {
  const { shedule, isLoading } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllShedule());
  }, []);

  return (
    <div className="">
      {isLoading && <h2>Loadding...</h2>}

      <div className="py-10">
        <h2 className="text-center font-bold text-2xl mb-2">
          Cricket Match- 0{shedule.length}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shedule &&
            shedule.map((match) => (
              <div
                key={match._id}
                className="border border-secondary rounded-md p-10 bg-gradient-to-r from-secondary via-primary to-secondary text-white"
              >
                <div className="flex justify-between">
                  <h4 className="uppercase font-bold text-white">
                    ICC- {match.matchs}
                  </h4>
                  <p className="font-bold">
                    {match.time} | {match.date}
                  </p>
                </div>
                <div className="flex justify-between pt-7">
                  <div className="flex gap-4 items-center">
                    <img src={match.team1Flag} alt="" className="w-10 h-6" />
                    <p className="font-bold capitalize">{match.team1}</p>
                  </div>
                  <p className="text-2xl font-bold text-orange-600">VS</p>
                  <div className="flex gap-2 items-center">
                    <p className="font-bold capitalize">{match.team2}</p>
                    <img src={match.team2Flag} alt="" className="w-10 h-6" />
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

export default Shedules;
