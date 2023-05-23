export const SITE = {
	title: 'Multimedia Team 4',
	description: 'Your website description.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/meluetta/Modul152/tree/main`;

export const COMMUNITY_INVITE_URL = undefined;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Multimedia Formate': [
			{ text: 'Video', link: 'Modul152/formate/video' },
			{ text: 'Bild', link: 'Modul152/formate/bild' },
			{ text: 'Audio', link: 'Modul152/formate/audio' },
		],
		'Multimedia Software': [
			{ text: 'Video', link: 'Modul152/tools/video' },
			{ text: 'Bild', link: 'Modul152/tools/bild' },
			{ text: 'Audio', link: 'Modul152/tools/audio' },
		],
		'Weiteres': [
			{ text: 'Musik', link: 'Modul152/more/music' }
		],
	},
};
