import React from 'react';

// UGH! Raw createElement calls hurt. JSX is way mo betta.
// return React.createElement("div", { className: `ui inverted ${props.color} menu` },
//     React.createElement("a", { className: "item" },
//       React.createElement("h2", { className: "ui header" }, [
//         React.createElement("i", { className: `icon ${props.icon}` }, []),
//         React.createElement("div", { className: "content" }, props.title),
//         React.createElement("div", { className: "sub header" }, props.description)
//       ])
//    )
// )

// A function component just takes props and returns JSX. Simple!
// const Navbar = props => (
//   <div className={`ui inverted ${props.color} menu`}>
//     <a href="https://google.com" className="item">
//       <h2 className="ui header">
//         <i className={`icon ${props.icon}`}></i>
//         <div className="content">{props.title}</div>
//         <div className="sub header">{props.description}</div>
//       </h2>
//     </a>
//   </div>
// )

// Class components are used when we need state.
// They must have a render method that returns JSX.
// They store props on the instance `this`.
// The render method DOES NOT TAKE PROPS!
class Navbar extends React.Component {
  render() {
    const menuClasses = `ui inverted ${this.props.color} menu`
    const iconClasses = `icon ${this.props.icon}`
    return (
      <div className={menuClasses}>
        <a href="https://google.com" className="item">
          <h2 className="ui header">
            <i className={iconClasses}></i>
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </a>
      </div>
  )
  }
}

export default Navbar;
