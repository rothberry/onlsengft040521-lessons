const Item = ({ id, title, author, handleOnDelete }) => {
  // return `<li id=${props.id}>${props.title}</li>`

  // const handleInsideClick = () => {
  //   console.log("clicked....")
  // }
  const createKey = () => {
    return Math.random().toString(36).substr(2, 9)
  }
  const newKey = createKey()
  // console.log("newKey: ", newKey)

  return (
    <li id={id} key={newKey}>
      {title} - {author} <button onClick={handleOnDelete}>x</button>
    </li>
  )
}

// console.log(Item({ id: 1, title: "KASHFVGKSHA" }))

export default Item
