type ButtonProps ={
    text : string
    onClick? : (id: string) => void
}

export const Button = ({text, onClick} : ButtonProps) => {
  return (
    <button className="text-sm bg-black text-white py-1 px-6 rounded"
            onClick={()=> onClick}>
        {text}
    </button>
  )
}
