export function Button ({ text, funcs }) {
  return (
    <button onClick={funcs} className="btn">
      {text}
    </button>
  )
}