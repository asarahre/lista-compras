import { Item } from "./components/Item";

function App() {
  return (
    <>
      <main className="h-screen w-screen relative bg-black z-0">
        <div className="fixed z-10">
          <img
            className=""
            src="/image.png"
            alt="imagen com desenhos de comida"
          />
        </div>

        <div className="fixed flex h-full w-full z-20">
          <div className="flex flex-col items-center h-full w-full">
            <div className="flex flex-col max-w-[50%] justify-center gap-4 w-full h-full ">
              {/* <h1 className="text-3xl font-bold underline">Lista de Compras</h1> */}
              <div className="flex flex-row  w-full items-end   gap-3">
                <div className=" flex flex-col w-full min-w-[4rem]">
                  <label
                    htmlFor="first_name"
                    className="flex mb-2 text-sm font-medium text-gray-600 "
                  >
                    Item
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="w-full  h-9 bg-gray-900  text-gray-400 text-sm rounded-lg  p-2.5 ring-2 ring-gray-500  hover:ring-pink-400 focus:ring-purple-700 outline-none"
                    required
                  />
                </div>

                <div className="flex flex-col w-auto ">
                  <label
                    htmlFor="countries"
                    className="flex mb-2 text-sm font-medium text-gray-600 "
                  >
                    Quantidade
                  </label>

                  <div className="flex w-auto">
                    <select
                      id="countries"
                      className="flex h-9 w-1/2 p-2 text-gray-400 bg-gray-900 text-sm rounded-l-lg  ring-2 ring-gray-500  hover:ring-pink-400 focus:ring-purple-700 outline-none"
                    >
                      <option value="Unidade">Uni</option>
                      <option value="Litros">Litros</option>
                      <option value="kg">kg</option>
                      <option value="Gm">Gm</option>
                    </select>

                    <input
                      type="number"
                      id="states"
                      className="appearance-none h-9 w-1/2 p-2 bg-gray-900 text-gray-400 text-sm  font-light rounded-r-lg ring-2 ring-gray-500 hover:ring-pink-400 focus:ring-purple-700 hover:border-purple-700 outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col w-auto">
                  <label
                    htmlFor="countries"
                    className="flex mb-2 text-sm font-medium text-gray-600"
                  >
                    Categoria
                  </label>
                  <select
                    id="countries"
                    className=" flex h-9 p-2 bg-gray-900 text-center option text-gray-400 text-sm rounded-lg  ring-2 ring-gray-500  hover:ring-pink-400 focus:ring-purple-700 outline-none"
                  >
                    <option
                      className=" text-center hover:bg-pink-400"
                      value="US"
                    >
                      Fruta
                    </option>
                    <option className="text-center " value="CA">
                      Bebida
                    </option>
                    <option className="text-center " value="FR">
                      Doces
                    </option>
                    <option className="text-center  rounded-b-lg" value="DE">
                      Cereais
                    </option>
                  </select>
                </div>

                <div className="w-auto h-auto">
                  <button
                    type="button"
                    className="text-white h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-400 font-medium  text-sm text-center "
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full ">
                <Item
                  nome="Maça"
                  unidade="1 kg"
                  tag=" 🍎 Frunta"
                  color={"orange"}
                />
                <Item
                  nome="Leite"
                  unidade="2 Litros"
                  tag=" 🥛 Bebida"
                  color={"blue"}
                />
                <Item
                  nome="Fine"
                  unidade="500 Gm"
                  tag=" 🍭 Doces"
                  color={"pink"}
                />
                <Item
                  nome="Milho"
                  unidade="1 kg"
                  tag=" 🌽 Vegetal"
                  color={"yellow"}
                />
                <Item
                  nome="Brocules"
                  unidade="500 gm"
                  tag="  🥬 Legumes"
                  color={"green"}
                />
                <Item
                  nome="Bacon"
                  unidade="150 gm"
                  tag=" 🥓 Carne"
                  color={"purple"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
