import { useState } from "react";
import Button from "./Exercise1";

function Exercise2() {
  const texts: string = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ut illo,
    quaerat fugit ipsa quos architecto omnis, quibusdam enim blanditiis,
    tempora autem nemo at. Quos quo, debitis maiores natus labore, corporis
    eos voluptate corrupti quaerat sed recusandae obcaecati quam reiciendis
    fugiat dolorum nesciunt. Reiciendis impedit provident mollitia saepe vel
    fugit doloribus ad distinctio in porro corporis, iste veniam ea delectus
    sit molestiae tempore rem odit, voluptatibus repellendus atque, quia aut
    explicabo sapiente. Cumque ea fugiat incidunt distinctio dolore aspernatur
    cum eum debitis asperiores! Eaque iure sapiente dolorum debitis quas quam,
    repellat, a possimus nulla ipsa placeat, cupiditate asperiores deserunt
    amet?`;

  const [text, setText] = useState({ characters: texts, button: true });
  const changeText = () => {
    setText({ ...text, button: !text.button });
  };
  return (
    <div>
      <span>
        {text.characters.slice(0, text.button ? 80 : texts.length - 1)}
        <button onClick={changeText}>
          {text.button ? "Read More" : "Less"}
        </button>
      </span>
    </div>
  );
}

export default Exercise2;
