// TODO Utilize the props to create a coffee component

const Coffee = ({ coffee: { name, size } }) => {
  return (
    <li className='coffee'>
      <h3>
        {name} <i>{size}</i>
      </h3>
    </li>
  )
}

export default Coffee
