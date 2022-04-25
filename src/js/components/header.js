import throttle from 'lodash.throttle';

export default function header({
	headerSelector,
	headerFixedMod,
	menuTriggerSelector,
	menuTriggerActiveMod,
	sidebarSelector,
	sidebarActiveMod,
}) {
	const headerEl = document.querySelector(headerSelector);

	document.addEventListener('scroll', throttle(() => {
		headerEl.classList.toggle(headerFixedMod, window.scrollY > 0);
	}, 100));

	const menuTrigger = document.querySelector(menuTriggerSelector);
	const sidebar = document.querySelector(sidebarSelector);

	menuTrigger.addEventListener('click', () => {
		if (menuTrigger.classList.contains(menuTriggerActiveMod)) {
			menuTrigger.classList.remove(menuTriggerActiveMod);
			sidebar.classList.remove(sidebarActiveMod);
		} else {
			menuTrigger.classList.add(menuTriggerActiveMod);
			sidebar.classList.add(sidebarActiveMod);
		}
	});
}
