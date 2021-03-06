import React, { Component } from "react";
class Counter extends Component {
    state = {
        count: 0 
        // tags: []
    };
  renderTags()
  {
    if (this.state.tags.length===0) {return <p>No Tags present!</p>}
    else return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
  }

  handleIncrement = (product) =>
  {
    console.log(product);
    this.setState({count: this.state.count + 1});
  };
    
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick = {()=> this.handleIncrement(product)}
        className="btn btn-secondary btn-sm">Increment</button>
        {/* {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount(){
      const{count} = this.state;
      return count === 0 ?"Zero": count;
  }
}

export default Counter;
