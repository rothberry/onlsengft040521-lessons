const Item = ({ id, title, handleOnDelete }) => {
  // return `<li id=${props.id}>${props.title}</li>`

  // const handleInsideClick = () => {
  //   console.log("clicked....")
  // }
  return (
    <li id={id}>
      {title} <button onClick={handleOnDelete}>x</button>
    </li>
  )
}

// console.log(Item({ id: 1, title: "KASHFVGKSHA" }))

export default Item
