import { VariantProps } from "class-variance-authority";
import { Tag, tagBase } from "./Tag";

interface props extends VariantProps<typeof tagBase> {
  nome: string;
  unidade: string;
  tag: string;
}

export function Item({ nome, unidade, tag, color }: props) {
  return (
    <>
      <div className="flex flex-row justify-between items-center bg-gray-900  w-full h-14 rounded-lg p-2 px-3">
        <div className="flex flex-row items-center gap-3 ">
          <input
            id="purple-checkbox"
            type="checkbox"
            value=""
            className=" accent-purple-500 w-4 h-4 bg-gray-800 border-gray-300 rounded hover:accent-purple-500 focus:ring-purple-500 transition-all duration-200"
          />

          <div>
            <p className="text-gray-400  font-bold">{nome}</p>
            <p className="text-gray-400 text-sm font-semibold">{unidade}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Tag tag={tag} color={color} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
