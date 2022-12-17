export default function SheduleCard({ match }) {
  return (
    <div className="border border-secondary rounded-md p-10 bg-gradient-to-r from-secondary via-primary to-secondary text-white">
      <div className="flex justify-between">
        <h4 className="uppercase font-bold text-white">ICC- {match.matchs}</h4>
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
  );
}
