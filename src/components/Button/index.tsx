import style from './Button.module.scss'


interface ButtonProps {
  text: string,
  type?: "button" | "submit" | "reset" | undefined
}

export function Button(props: ButtonProps) {
  return (
    <button className={style.button} type={props.type}>{props.text}</button>
  )
}
