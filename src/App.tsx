import logo from './assets/logo.svg';
import trash from './assets/trash.svg';
import todo from './assets/todo.svg';
import done from './assets/done.svg';

function App() {
  return (
    <main className="max-w-2xl px-6 py-12 pb-20 mx-auto my-10 bg-white md:my-20 md:px-32 md:rounded-3xl">
      <header className="text-center">
        <img src={logo} alt="logotipo" className="mx-auto" />
        <h1 className="mt-4 text-3xl font-medium font-display">
          Lista de Compras
        </h1>
        <p className="text-sm text-slate-500">
          Facilite sua ida ao supermercado!
        </p>
        <hr className="w-1/3 mx-auto mt-6 mb-8" />
      </header>
      <form className="flex gap-2">
        <div className="flex-shrink">
          <label htmlFor="item" className="block text-xs text-slate-400">
            Item
          </label>
          <input
            type="text"
            id="quantity"
            className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
          />
        </div>
        <div className="flex-shrink">
          <label htmlFor="quantity" className="block text-xs text-slate-400">
            Quantidade
          </label>
          <input
            type="text"
            id="quantity"
            className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
          />
        </div>
        <button className="self-end flex-shrink h-10 px-4 font-extrabold text-white rounded-lg bg-fuchsia-300">
          +
        </button>
      </form>
      <section className="mt-10 space-y-3 ">
        <article className="flex w-full gap-4">
          <img src={todo} alt="#" />
          <div className="flex-1">
            <p>Leite</p>
            <p className="text-sm text-slate-400">3 Caixas</p>
          </div>
          <img
            src={trash}
            alt="ícone de lixeira"
            className="justify-self-end"
          />
        </article>
        <hr />
        <article className="flex w-full gap-4">
          <img src={todo} alt="#" />
          <div className="flex-1">
            <p>Maçã</p>
            <p className="text-sm text-slate-400">500g</p>
          </div>
          <img
            src={trash}
            alt="ícone de lixeira"
            className="justify-self-end"
          />
        </article>
        <hr />
      </section>
      <section className="mt-16 space-y-3">
        <h2 className="mb-10 text-3xl text-center font-display">
          Itens já comprados
        </h2>
        <article className="flex w-full gap-4">
          <img src={done} alt="#" />
          <div className="flex-1">
            <p>Leite</p>
            <p className="text-sm text-slate-400">3 Caixas</p>
          </div>
          <img
            src={trash}
            alt="ícone de lixeira"
            className="justify-self-end"
          />
        </article>
        <hr />
        <article className="flex w-full gap-4">
          <img src={done} alt="#" />
          <div className="flex-1">
            <p>Maçã</p>
            <p className="text-sm text-slate-400">500g</p>
          </div>
          <img
            src={trash}
            alt="ícone de lixeira"
            className="justify-self-end"
          />
        </article>
        <hr />
      </section>
    </main>
  );
}

export default App;
