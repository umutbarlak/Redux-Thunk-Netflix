import { baseImgUrl } from "../constants";

const PlayerCard = ({ player }) => {
  console.log(player);
  return (
    <div className="w-[140px] rounded-md overflow-hidden">
      <div>
        {player.profile_path ? (
          <img
            className="h-[210px]"
            height={175}
            src={baseImgUrl + player?.profile_path}
            alt=""
          />
        ) : (
          <div className="h-[210px] bg-gray-400"></div>
        )}

        <h2 className="text-lg font-semibold">{player?.original_name}</h2>
        <h3 className=" line-clamp-2">{player?.character}</h3>
      </div>
    </div>
  );
};

export default PlayerCard;
