import React from 'react';
import { Select as ThemeUiSelect } from 'theme-ui';

import Label from './label';

export default function Select({
	id,
	label,
	options,
	value,
	width = '160px',
	onChange,
}) {
	return (
		<Label htmlFor={id}>
			{label}
			<ThemeUiSelect
				id={id}
				sx={{
					borderColor: 'border',
					borderStyle: 'solid',
					borderWidth: 1,
					fontSize: 's',
					width,
				}}
				value={value || ''}
				onChange={(event) => onChange(event.target.value)}>
				{options.map(({ label, value }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</ThemeUiSelect>
		</Label>
	);
}
