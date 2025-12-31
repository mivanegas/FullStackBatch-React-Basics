import Users from "./components/Users";
import "./App.css";

function App() {
  // const hobbies = ["Swimming", "Dancing", "Singing", "Cycling"];
  // const marks = [
  //   { subject: "JavaScript", marks: 80 },
  //   { subject: "HTML", marks: 95 },
  //   { subject: "CSS", marks: 90 },
  //   { subject: "React", marks: 70 },
  // ];

  const users = [
    {
      id: 1,
      avatar:
        "https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2VzfGVufDB8fDB8fHww",
      name: "Maria",
      email: "maria@gmail.com",
      isPremium: true,
      age: 17,
    },
    {
      id: 2,
      avatar:
        "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2VzfGVufDB8fDB8fHww",
      name: "Yaritza",
      email: "yaritza@gmail.com",
      isPremium: false,
      age: 28,
    },
    {
      id: 3,
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXN8ZW58MHx8MHx8fDA%3D",
      name: "Maddie",
      email: "maddie@gmail.com",
      isPremium: true,
      age: 45,
    },
  ];
  return (
    <div className="container">
      {/* <Users
        avatar="https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2VzfGVufDB8fDB8fHww"
        name={"Maria"}
        email={"maria@gmail.com"}
        isPremium={true}
        age={17}
      />
      <Users
        avatar="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2VzfGVufDB8fDB8fHww"
        name={"Yaritza"}
        email={"yaritza@gmail.com"}
        isPremium={false}
        age={28}
      />
      <Users
        avatar="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXN8ZW58MHx8MHx8fDA%3D"
        name={"Maddie"}
        email={"maddie@gmail.com"}
        isPremium={true}
        age={45}
      /> */}

      {/* <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul> */}

      {/* {marks.map((element, index) => (
        <div key={index}>
          <span style={{ fontSize: "2em" }}>{element.subject}</span>
          <span
            style={{
              border: "1px solid black",
              marginLeft: "1em",
              padding: "5px",
            }}
          >
            {element.marks}
          </span>
        </div>
      ))} */}

      {users.map((user) => (
        <Users
          key={user.id}
          avatar={user.avatar}
          name={user.name}
          email={user.email}
          isPremium={user.isPremium}
          age={user.age}
        />
      ))}
    </div>
  );
}

export default App;

/*

# Conditional Rendering:
  - Concept
    - If condition is true: show
    - If condition is false: hide
  - Syntax:
    - {condition && (<h1>Test</h1>)}

 # Rendering Lists
    - Render JSX/component multiple times (as many number of elements in the array)
    - Each child should have a unique key prop
    - Syntax:
      - array.map((element, index) => (
          <h1>{element}</h1>
        ))
*/
