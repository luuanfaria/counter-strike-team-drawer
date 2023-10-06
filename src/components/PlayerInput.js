"use client";
import { useEffect, useState } from "react";

export default function PlayerInput({ addPlayer, playerId }) {
  const [player, setPlayer] = useState({
    id: playerId,
    name: "",
    level: 0,
  });

  const handleLevelChange = (e) => {
    const updatedPlayer = { ...player, level: e.target.value };
    setPlayer(updatedPlayer);
    if (updatedPlayer.level !== 0 && updatedPlayer.name !== "") {
      addPlayer(updatedPlayer);
    }
  };

  const handlePlayerNameChange = (e) => {
    const updatedPlayer = { ...player, name: e.target.value };
    setPlayer(updatedPlayer);
    if (updatedPlayer.level !== 0 && updatedPlayer.name !== "") {
      addPlayer(updatedPlayer);
    }
  };

  const handleClearPlayer = () => {
    setPlayer((prevState) => ({
      ...prevState,
      id: playerId,
      name: "",
      level: 0,
    }));
  };

  return (
    <div className="flex items-center gap-5 text-theme-light">
      <input
        className="placeholder:italic placeholder:text-theme-light placeholder:text-opacity-80 block w-full border border-theme-mid rounded-md py-2 px-3 shadow-sm bg-theme-darkest focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Insira o nome do jogador"
        type="text"
        name="nickname"
        onChange={handlePlayerNameChange}
      />

      <div>
        <select
          className="placeholder:italic placeholder:text-theme-light w-10 text-center border border-theme-mid rounded-md py-2 px-2 shadow-sm bg-theme-darkest focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm appearance-none"
          type="number"
          name="level"
          max={5}
          min={1}
          defaultValue="none"
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
