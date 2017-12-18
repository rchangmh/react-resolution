import React, { Component } from 'react'
import { Input as SemanticInput } from 'semantic-ui-react'
import { Input as AntdInput } from 'antd'

export default class MyInput extends Component {
	render() {
		if (this.props.inputtype === 'dollar') {
			return <AntdInput {...this.props} />
		}
		return <SemanticInput {...this.props} />
	}
}
