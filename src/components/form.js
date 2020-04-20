import React from "react";

class Form extends React.Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.weathweMethod}>
          <input type="text" name="city" placeholder="Город"/>
          <button> Получить погоду </button>
        </form>
      </div>
    );
  }
}

export default Form;
