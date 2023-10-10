import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../app/page";

export default function PlayerInput({ playerId }) {
  const { players, setPlayers, isCleared, setIsCleared } =
    useContext(PlayerContext);

  const [playerName, setPlayerName] = useState("");
  const [playerLevel, setPlayerLevel] = useState(1);

  useEffect(() => {
    if (playerName && playerLevel) {
      const playerExists = players.find((player) => player.id === playerId);

      if (playerExists) {
        setPlayers((prevPlayers) =>
          prevPlayers.map((player) =>
            player.id === playerId
              ? { id: playerId, name: playerName, level: playerLevel }
              : player,
          ),
        );
      } else {
        setPlayers((prevPlayers) => [
          ...prevPlayers,
          { id: playerId, name: playerName, level: playerLevel },
        ]);
      }
    }
  }, [playerName, playerLevel, playerId]);

  useEffect(() => {
    if (isCleared) {
      clearPlayer();
      setIsCleared(false);
    }
  }, [isCleared]);

  const clearPlayer = () => {
    setPlayerName("");
    setPlayerLevel(1);
  };

  const handlePlayerNameChange = (event) => {
    const newName = event.target.value;
    setPlayerName(newName);
  };

  const handleLevelChange = (event) => {
    const newLevel = Number(event.target.value);
    setPlayerLevel(newLevel);
  };

  return (
    <div className="flex items-center gap-5 text-theme-light">
      <input
        className="placeholder:italic placeholder:text-theme-light placeholder:text-opacity-80 placeholder:text-sm block w-full border border-theme-mid rounded-md py-2 px-3 shadow-sm bg-theme-darkest focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Insira o nome do jogador"
        type="text"
        name="nickname"
        value={playerName}
        onChange={handlePlayerNameChange}
      />

      <div>
        <select
          className="placeholder:italic placeholder:text-theme-light w-10 text-center border border-theme-mid rounded-md py-2 px-2 shadow-sm bg-theme-darkest focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm appearance-none"
          type="number"
          name="level"
          max={5}
          min={1}
          value={playerLevel}
          onChange={handleLevelChange}
        >
          <option value="none" disabled hidden>
            -
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
    </div>
  );
}
