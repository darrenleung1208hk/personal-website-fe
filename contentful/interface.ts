export interface IJobExperience {
	jobTitle: string;
	companyName: string;
	companyWebsite?: string;
	jobLocation: string;
	startDate: Date;
	endDate?: Date;
	jobDuties?: string[];
}
