export default function header({
	menuTriggerSelector,
	menuTriggerActiveMod,
	sidebarSelector,
	sidebarActiveMod,
}) {
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
