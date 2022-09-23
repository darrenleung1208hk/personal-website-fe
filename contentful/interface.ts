export interface IOrganization {
	name: string;
	website: string;
	location: string;
}

export interface IExperience {
	title: string;
	startDate: Date;
	endDate?: Date;
	skills?: string[];
	descriptions?: string[];
	organization: IOrganization;
}

export interface ITimeline {
	data: IExperience[];
}

export interface IImageData {
	title: string;
	width: number;
	height: number;
	url: string;
}

export interface IProfile {
	name: string;
	title: string;
	greeting: string;
	shortIntroduction: string[];
	skills: string[];
	email: string;
	github: string;
	linkedin: string;
	introduction: string;
	conclusion: string;
	heroImage: IImageData;
}

export interface IHero {
	greeting?: string;
	name: string;
	title: string;
	shortIntroduction?: string[];
	heroImage: IImageData;
}

export interface IAbout {
	introduction: string;
	skills: string[];
}

export interface IContact {
	conclusion: string;
	email: string;
}
