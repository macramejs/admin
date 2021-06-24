import { Component as ReactComponent } from 'react';
import { Component } from '@macramejs/macrame-react';
import { Component as TComponent } from '@macramejs/macrame';

export default class BasePage extends ReactComponent<{ components: TComponent[] }> {
	render() {
		return (
			<div>
				{this.props.components.map((component, i) => (
					<Component
						key={i}
						name={component.name}
						props={component.props}
					/>
				))}
			</div>
		);
	}
}
