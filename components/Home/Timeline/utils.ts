import format from "date-fns/format";

export function getWebsiteFavicon(domain: string, size = 64) {
	return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

export function getPositionPeriod(
	startDate: string | Date,
	endDate?: string | Date,
	dateFormat: string = "yyyy"
) {
	const formattedStartDate = format(new Date(startDate), dateFormat);
	const formattedEndDate = endDate
		? format(new Date(endDate), dateFormat)
		: "Present";
	const period =
		formattedStartDate !== formattedEndDate
			? `${formattedStartDate} - ${formattedEndDate}`
			: formattedStartDate;
	return period;
}
