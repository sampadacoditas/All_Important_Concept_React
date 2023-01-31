import React, { Component } from 'react'

export default class ClassComponents extends Component <any,any>{

    constructor(props:any) {
        super(props);
        this.state = {
          brand: "BMW",
          color: "Black"
        };
      }
      changeColor() {
        this.setState(this.state.color);
      }
      render() {
        return (
          <div>
            <button onClick={() => this.changeColor()}>Change Color</button>
            <p>{this.state.color}</p>
          </div>
        );
      }
}
