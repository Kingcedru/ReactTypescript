interface props{
    color?: string;
    children: string;
}

function Button({color='btn-success',children}:props) {
  return (
    <button type="button" onClick={()=>console.log(color)} className={`btn ${color}`}>{children}</button>
  )
}

export default Button