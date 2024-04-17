import type { Item } from '../App';
import todo from '../assets/todo.svg';
import done from '../assets/done.svg';
import trash from '../assets/trash.svg';

type ItemProps = {
  item: Item;
  handleClickComplete: (id: string) => void;
  handleClickDelete: (id: string) => void;
};

export default function Item({
  item,
  handleClickComplete,
  handleClickDelete,
}: ItemProps) {
  return (
    <>
      <article className="flex w-full gap-4">
        <button onClick={() => handleClickComplete(item.id)}>
          <img src={item.completed ? done : todo} alt="#" />
        </button>
        <div className="flex-1">
          <p
            className={`${item.completed ? 'text-slate-400 line-through' : ''}`}
          >
            {item.name}
          </p>
          <p
            className={`text-sm text-slate-400 ${
              item.completed && 'line-through'
            } `}
          >
            {item.quantity}
          </p>
        </div>
        <button onClick={() => handleClickDelete(item.id)}>
          <img
            src={trash}
            alt="ícone de lixeira"
            className="justify-self-end"
          />
        </button>
      </article>
      <hr />
    </>
  );
}
