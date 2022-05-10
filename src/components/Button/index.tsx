import style from './Button.module.scss'


interface ButtonProps {
  text: string,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

export function Button(props: ButtonProps) {
  return (
    <button className={style.button} type={props.type} onClick={props.onClick}>{props.text}</button>
  )
}
