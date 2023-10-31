import { useState } from "react";

export default function Message() {
  const [student, setStudent] = useState({
    babou: {
      name: "King",
      age: 20,
      class: "senior1",
    },
    teacher: "Matress",
  });
  const change = () => {
    setStudent({...student, babou: {...student.babou, age: 24 } });
  };
  return (
    <div>
      <span>{student.babou.name}</span>
      <br />
      <span>{student.babou.age}</span>
      <br />
      <span>{student.babou.class}</span>
      <br />
      <button className="btn btn-primary" onClick={change}>
        Update
      </button>
    </div>
  );
}
