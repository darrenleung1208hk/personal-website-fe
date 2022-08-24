export interface IJobExperience {
	jobTitle: string;
	companyName: string;
	companyWebsite?: string;
	jobLocation: string;
	startDate: Date;
	endDate?: Date;
	jobDuties?: string[];
}

export interface IHero {
	greeting: string;
	name: string;
	headline: string;
	descriptions: string[];
}

export interface IAbout {
	description: string;
}

export interface IContact {
	description: string;
}
