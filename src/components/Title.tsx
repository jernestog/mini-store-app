type TitleProps = {
    text : string
}
export const Title = ({text} : TitleProps) => {
  return (
    <h2 className="text-black font-bold">
        {text}
    </h2>
  )
}
