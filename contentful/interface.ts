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

export interface IHero {
	greeting: string;
	name: string;
	headline: string;
	descriptions: string[];
}

export interface IAbout {
	description: string;
	skills: string[];
}

export interface IContact {
	description: string;
}
