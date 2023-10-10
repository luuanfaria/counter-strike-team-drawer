"use client";
import { createContext, useState, useEffect } from "react";
import PlayerInput from "../components/PlayerInput";
import PlayerResult from "../components/PlayerResult";

export const PlayerContext = createContext();

export default function Page() {
  const [players, setPlayers] = useState([]);
  const [isCleared, setIsCleared] = useState(false);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const clearPlayers = () => {
    setPlayers([]);
    setIsCleared(true);
    setTeam1([]);
    setTeam2([]);
  };

  const shuffleTeams = () => {
    let playersCopy = [...players];
    let team1ToShuffle = [];
    let team2ToShuffle = [];

    while (playersCopy.length > 0) {
      const randomIndex = Math.floor(Math.random() * playersCopy.length);
      const playerToMove = playersCopy.splice(randomIndex, 1)[0];

      if (team1ToShuffle.length < 5) {
        team1ToShuffle.push(playerToMove);
      } else {
        team2ToShuffle.push(playerToMove);
      }
    }

    setTeam1(team1ToShuffle);
    setTeam2(team2ToShuffle);
  };

  const sortTeams = () => {
    const sortedPlayers = players.map((player, index) => ({
      id: player.id,
      name: player.name,
      level: player.level,
    }));

    sortedPlayers.sort((a, b) => a.level - b.level); // Classifica os jogadores por nível

    sortedPlayers.forEach((player, index) => {
      if (index % 2 === 0) {
        setTeam1((prevPlayers) => [
          ...prevPlayers,
          {
            id: player.id,
            name: player.name,
            level: player.level,
          },
        ]);
      } else {
        setTeam2((prevPlayers) => [
          ...prevPlayers,
          {
            id: player.id,
            name: player.name,
            level: player.level,
          },
        ]);
      }
    });
  };

  return (
    <PlayerContext.Provider
      value={{ players, setPlayers, isCleared, setIsCleared }}
    >
      <div className="w-full min-h-screen bg-theme-darkest py-4 px-12">
        <div className="max-w-3xl m-auto">
          <div>
            <h1 className="text-left text-2xl font-bold text-theme-mid animate-pulse">
              CS TEAM DRAWER
            </h1>
          </div>

          <div className="flex gap-16 flex-row flex-wrap my-16 items-center justify-center">
            <div className="w-full">
              <h2 className="max-w-[30rem] m-auto text-2xl text-theme-white text-center font-semibold">
                {team1.length === 5
                  ? "Resultado do sorteio dos times, bom jogo! Clique para sortear novamente."
                  : "Adicione os jogadores e defina os níveis correspondentes para o sorteio"}
              </h2>
            </div>

            <div className="flex gap-20 flex-row flex-wrap mobile:gap-5 mobile:items-center mobile:justify-center">
              <div className="flex flex-col gap-5">
                {team1.length === 5 && team2.length === 5 ? (
                  <>
                    <h3 className="text-theme-light text-xl font-bold">
                      Time 1
                    </h3>
                    {team1.map((player) => (
                      <PlayerResult
                        key={player.id}
                        playerName={player.name}
                        playerLevel={player.level}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    <div className="h-7" />
                    <PlayerInput playerId={1} />
                    <PlayerInput playerId={2} />
                    <PlayerInput playerId={3} />
                    <PlayerInput playerId={4} />
                    <PlayerInput playerId={5} />
                  </>
                )}
              </div>

              <div className="flex flex-col gap-5">
                {team1.length === 5 && team2.length === 5 ? (
                  <>
                    <h3 className="text-theme-light text-xl font-bold">
                      Time 2
                    </h3>
                    {team2.map((player) => (
                      <PlayerResult
                        key={player.id}
                        playerName={player.name}
                        playerLevel={player.level}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    <div className="h-7" />

                    <PlayerInput playerId={6} />
                    <PlayerInput playerId={7} />
                    <PlayerInput playerId={8} />
                    <PlayerInput playerId={9} />
                    <PlayerInput playerId={10} />
                  </>
                )}
              </div>
            </div>

            <div className="flex gap-5 w-full max-w-[552px] items-center justify-end mx-16 mobile:mx-6">
              <button
                className="text-theme-light disabled:cursor-not-allowed disabled:text-theme-dark"
                disabled={players.length === 0}
                onClick={clearPlayers}
              >
                Limpar
              </button>
              {team1.length === 5 && team2.length === 5 ? (
                <button
                  className="bg-theme-orange text-theme-white px-4 py-2 rounded-md font-semibold disabled:bg-theme-light disabled:cursor-not-allowed disabled:text-theme-darkest"
                  disabled={players.length < 10}
                  onClick={() => shuffleTeams(1.5)}
                >
                  Sortear novamente
                </button>
              ) : (
                <button
                  className="bg-theme-orange text-theme-white px-4 py-2 rounded-md font-semibold disabled:bg-theme-light disabled:cursor-not-allowed disabled:text-theme-darkest"
                  disabled={players.length < 10}
                  onClick={sortTeams}
                >
                  Sortear
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </PlayerContext.Provider>
  );
}
