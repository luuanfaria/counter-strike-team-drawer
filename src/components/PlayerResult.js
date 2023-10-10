export default function PlayerResult({ playerName, playerLevel }) {
  return (
    <div className="flex items-center gap-5 text-theme-light">
      <div className="block w-full min-w-[205px] max-w-[205px] border-none rounded-md py-2 px-3 shadow-lg bg-theme-dark focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
        <h4 className="text-theme-light font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
          {playerName}
        </h4>
      </div>

      <div>
        <div className="w-10 text-center border-none rounded-md py-2 px-2 shadow-lg bg-theme-dark focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm appearance-none">
          <h4 className="text-theme-light font-semibold">{playerLevel}</h4>
        </div>
      </div>
    </div>
  );
}
