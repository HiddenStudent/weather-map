import React from "react";

const Form = props => (
  <div>
    <form onSubmit={props.weathweMethod}>
      <input type="text" name="city" placeholder="Город"/>
      <button> Получить погоду </button>
    </form>
  </div>
);

export default Form;
