interface IJobDescriptionItem {
	payload: string;
}

interface IJobDescriptionList {
	items: IJobDescriptionItem[];
}

export interface IJobExperience {
	jobTitle: string;
	companyName: string;
	companyWebsite?: string;
	jobLocation: string;
	startDate: Date;
	endDate?: Date;
	jobDuties?: string[];
	jobDescriptions?: IJobDescriptionList;
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
