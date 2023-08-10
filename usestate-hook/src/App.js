import React from "react";

// 1. Captures a new goal using a forum

function GoalForm(props) {
  const [formData, setFormData] = React.useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }

  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={changeHandler}
        />
        <button onClick={submitHandler}>Submit Goal</button>
      </form>
    </>
  );
}

// 2. Loops over all the previously added goals and displays them as a unordered list

function ListOfGoals(props) {
    return (
        <ul>
            {props.allGoals.map((g) => (
                <li key={g.goal}>
                    <span>My goal is to {g.goal}, by {g.by}</span>
                </li>
            ))}
        </ul>
    );
}

/* 3. Put those tow components together and allows the render, 
as well as pass the functions that they'll be working with through their props*/

export default function App() {
    const [allGoals, updateAllGoals] = React.useState([]);

    function addGoal(goal) {updateAllGoals([...allGoals, goal])}

    return (
        <div className="App">
            <GoalForm onAdd={addGoal}/>
            <ListOfGoals allGoals={allGoals}/>
        </div>
    );
}