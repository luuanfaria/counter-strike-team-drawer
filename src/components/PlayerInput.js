export default function PlayerInput() {
  return (
    <div className="flex items-center gap-5 text-theme-light">
      <input
        className="placeholder:italic placeholder:text-theme-light placeholder:text-opacity-80 block w-full border border-theme-mid rounded-md py-2 px-3 shadow-sm bg-theme-darkest focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Insira o nome do jogador"
        type="text"
        name="nickname"
      />

      <div>
        <input
          className="placeholder:italic placeholder:text-theme-light w-10 border border-theme-mid rounded-md py-2 px-2 shadow-sm bg-theme-darkest focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          type="number"
          name="level"
          max={5}
          min={1}
        />
      </div>
    </div>
  );
}
