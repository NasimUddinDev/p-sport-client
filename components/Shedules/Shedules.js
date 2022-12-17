import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShedule } from "../../redux/actions/sheduleAction";
import SheduleCard from "../SheduleCard/SheduleCard";

const Shedules = () => {
  const { shedule, isLoading } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllShedule());
  }, []);

  return (
    <div className="">
      {isLoading && <h2>Loadding...</h2>}

      <div className="py-10 mx-5">
        <h2 className="text-center font-bold text-2xl pb-5">
          Cricket Match- 0{shedule.length}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shedule &&
            shedule.map((match) => (
              <SheduleCard key={match.id} match={match} />
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
