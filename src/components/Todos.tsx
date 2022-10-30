import { ReactNode } from 'react'

type AppProps = {
  items: string[]
  children?: ReactNode
}

const Todos = (props: AppProps) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default Todos
