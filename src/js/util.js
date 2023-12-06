export function formatDate(date) {
	return new Date(date).toLocaleDateString('en-GB');
}

export function slugify(text) {
	return text
	  .toString()
	  .toLowerCase()
	  .replace(/\s+/g, '-')
	  .replace(/[^\w-]+/g, '')
	  .replace(/--+/g, '-')
	  .replace(/^-+/, '')
	  .replace(/-+$/, '');
}
  