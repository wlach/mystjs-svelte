import { MyST } from 'mystjs';

const myst = new MyST();

function mystjs(options) {
	const extensions = options.extensions || ['md'];
	return {
		markup: async ({ content, filename }) => {
			if (!extensions.includes(filename.split('.').pop())) return;
			return {
				code: myst.render(content),
				data: {},
				map: ''
			};
		}
	};
}

export { mystjs };
