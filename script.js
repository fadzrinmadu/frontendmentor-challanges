const projects = [
	{
		name: 'base-apparel-coming-soon-page',
	},
	{
		name: 'bookmark-landing-page',
	},
	{
		name: 'clipboard-landing-page',
	},
	{
		name: 'easybank-landing-page',
	},
	{
		name: 'four-card-features-section',
	},
	{
		name: 'fylo-dark-theme-landing-page',
	},
	{
		name: 'fylo-landing-page-with-two-column-layout',
	},
	{
		name: 'huddle-landing-page-with-alternating-feature-blocks',
	},
	{
		name: 'huddle-landing-page-with-curved-sections',
	},
	{
		name: 'huddle-landing-page-with-single-introductory-section',
	},
	{
		name: 'insure-landing-page',
	},
	{
		name: 'intro-component-with-signup-form',
	},
	{
		name: 'manage-landing-page',
	},
	{
		name: 'ping-coming-soon-page',
	},
	{
		name: 'pricing-component-with-toggle',
	},
	{
		name: 'project-tracking-intro-component',
	},
	{
		name: 'single-price-grid-component',
	},
	{
		name: 'url-shortening-api',
	}
];

const list = document.getElementById('list');

projects.forEach(({ name, youtube }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="./${name}/index.html">
			<img src="./${name}/design/desktop-preview.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="https://github.com/fadzrinmadu/${name}" target="_blank" rel="nonopener" class="gray">
				<i class="fab fa-github"></i>
			</a>
			<a href="./${name}/index.html" target="_blank" class="blue">
				<i class="fas fa-eye"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
