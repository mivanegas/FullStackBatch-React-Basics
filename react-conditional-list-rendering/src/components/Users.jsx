import "./Users.css";

function Users({ avatar, name, email, isPremium, age }) {
  //   const userBoxStyle = {
  //     border: "1px solid beige",
  //     width: "max-content",
  //     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  //     backgroundColor: "white",
  //     padding: "10px",
  //     borderRadius: "6px",
  //     margin: "10px auto",
  //   };

  //Way 1: Internal
  //   return (
  //     <div style={userBoxStyle}>
  //       <img
  //         src="https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2VzfGVufDB8fDB8fHww"
  //         alt=""
  //       />
  //       <h2>Madeline</h2>
  //       <p>maddie@gmail.com</p>
  //     </div>

  //Way 2: External
  return (
    <div className="user-box">
      <img src={avatar} />
      <h2>{name}</h2>
      <p>{email}</p>
      {isPremium && <p className="premium">Premium User</p>}
      {age >= 18 && <p>Eligible to vote</p>}
    </div>
  );
}

export default Users;
