import PlayerInput from "../components/PlayerInput";

export default function Page() {
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

          <div className="flex flex-col gap-5">
            <PlayerInput />
            <PlayerInput />
            <PlayerInput />
            <PlayerInput />
            <PlayerInput />
          </div>

          <div className="flex flex-col gap-5">
            <PlayerInput />
            <PlayerInput />
            <PlayerInput />
            <PlayerInput />
            <PlayerInput />
          </div>

          <div className="flex gap-5 w-full items-center justify-end mx-16">
            <button
              className="text-theme-light disabled:cursor-not-allowed"
              disabled
            >
              Limpar
            </button>
            <button
              className="bg-theme-orange text-theme-white px-4 py-2 rounded-md font-semibold disabled:bg-theme-light disabled:cursor-not-allowed disabled:text-theme-darkest"
              disabled
            >
              Sortear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
