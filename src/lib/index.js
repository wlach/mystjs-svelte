import { MyST } from 'mystjs';

const myst = new MyST();

function mystjs(options) {
	const extensions = options.extensions || ['md'];
	return {
		markup: async ({ content, filename }) => {
			if (!extensions.includes(filename.split('.').pop())) return;
			let renderedContent = myst.render(content);
			// escape any `{` characters for svelte
			renderedContent = renderedContent.replace(/({|})/g, '{"$1"}');
			return {
				code: renderedContent,
				data: {},
				map: ''
			};
		}
	};
}

export { mystjs };
