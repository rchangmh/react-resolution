import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '/src/styles'

export default class NavBar extends Component {
  state = {
    activeItem: window.location.pathname,
  }

  render() {
    return (
      <Menu inverted widths={this.props.elements.length}>
        {this.props.elements.map((element, index) => (
          <Menu.Item
            key={index}
            as={Link}
            to={`/${element}`}
            name={element}
            active={this.state.activeItem === `/${element}`}
            onClick={(e, { to }) => this.setState({ activeItem: to })}
          />
        ))}
      </Menu>
    )
  }
}
