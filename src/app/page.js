"use client";
import { useState } from "react";
import PlayerInput from "../components/PlayerInput";

export default function Page() {
  const [players, setPlayers] = useState([]);

  const clearPlayers = () => {
    setPlayers([]);
  };

  const sortTeams = () => {
    const sortedPlayers = players.map((player, index) => ({
      id: player.id,
      name: player.name,
      level: player.level,
    }));

    sortedPlayers.sort((a, b) => a.level - b.level); // Classifica os jogadores por nível

    const team1 = [];
    const team2 = [];

    sortedPlayers.forEach((player, index) => {
      if (index % 2 === 0) {
        team1.push({
          id: player.id,
          name: player.name,
          level: player.level,
        });
      } else {
        team2.push({
          id: player.id,
          name: player.name,
          level: player.level,
        });
      }
    });

    console.log("Time 1:", team1);
    console.log("Time 2:", team2);
  };

  const addPlayer = (player) => {
    setPlayers([...players, player]);
  };

  return (
    <div className="w-full min-h-screen bg-theme-darkest py-4 px-12">
      <div className="max-w-3xl m-auto">
        <div>
          <h1 className="text-left text-2xl font-bold text-theme-mid animate-pulse">
            CS TEAM DRAWER
          </h1>
        </div>

        <div className="flex gap-20 flex-row flex-wrap my-16 items-center justify-center">
          <div className="w-full">
            <h2 className="max-w-[30rem] m-auto text-2xl text-theme-white text-center font-semibold">
              Adicione os jogadores e defina os níveis correspondentes para o
              sorteio
            </h2>
          </div>

          <div className="flex gap-20 flex-row flex-wrap mobile:gap-5 mobile:items-center mobile:justify-center">
            <div className="flex flex-col gap-5">
              <PlayerInput addPlayer={addPlayer} playerId={1} />
              <PlayerInput addPlayer={addPlayer} playerId={2} />
              <PlayerInput addPlayer={addPlayer} playerId={3} />
              <PlayerInput addPlayer={addPlayer} playerId={4} />
              <PlayerInput addPlayer={addPlayer} playerId={5} />
            </div>

            <div className="flex flex-col gap-5">
              <PlayerInput addPlayer={addPlayer} playerId={6} />
              <PlayerInput addPlayer={addPlayer} playerId={7} />
              <PlayerInput addPlayer={addPlayer} playerId={8} />
              <PlayerInput addPlayer={addPlayer} playerId={9} />
              <PlayerInput addPlayer={addPlayer} playerId={10} />
            </div>
          </div>

          <div className="flex gap-5 w-full items-center justify-end mx-16">
            <button
              className="text-theme-light disabled:cursor-not-allowed disabled:text-theme-dark"
              disabled={players.length === 0}
              onClick={clearPlayers}
            >
              Limpar
            </button>
            <button
              className="bg-theme-orange text-theme-white px-4 py-2 rounded-md font-semibold disabled:bg-theme-light disabled:cursor-not-allowed disabled:text-theme-darkest"
              disabled={players.length < 10}
              onClick={sortTeams}
            >
              Sortear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
