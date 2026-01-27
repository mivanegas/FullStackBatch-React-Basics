// One way to use props
function Student({ count, name, batch, stack }) {
  return (
    <>
      <h2>Student No. {count}</h2>
      <ul>
        <li>Name: {name}</li>
        <li>Batch: {batch}</li>
        <li>Stack: {stack}</li>
      </ul>
    </>
  );
}

//Another way to use props
// function Student(props) {
//   return (
//     <>
//       <h2>Name: {props.name}</h2>
//       <p>Batch: {props.batch}</p>
//     </>
//   );
// }

export default Student;
