export interface IOrganization {
	name: string;
	website: string;
	location: string;
}

export interface IExperience {
	title: string;
	startDate: Date;
	endDate?: Date;
	descriptions?: string[];
	organization: IOrganization;
}

export interface ITimeline {
	data: IExperience[];
}

export interface IProfile {
	name: string;
	title: string;
	skills: string[];
	email: string;
	github: string;
	linkedin: string;
	introduction: string;
	conclusion: string;
}

export interface IHero {
	greeting?: string;
	name: string;
	title: string;
	descriptions?: string[];
}

export interface IAbout {
	introduction: string;
	skills: string[];
}

export interface IContact {
	conclusion: string;
	email: string;
}
