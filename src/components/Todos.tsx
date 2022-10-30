import Todo from '../models/todo'
import TodoItem from './TodoItem'

type AppProps = {
  items: Todo[]
  children?: React.ReactNode
}

const Todos = (props: AppProps) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  )
}

export default Todos
