async function fetchGraphQL(query: string) {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN}`,
			},
			body: JSON.stringify({ query }),
		}
	).then((response) => response.json());
}

export async function getAllWorkExperience() {
	const res = await fetchGraphQL(
		`query {
      workExperienceCollection {
        items {
          jobTitle
          companyName
          companyWebsite
          jobLocation
          startDate
          endDate
          jobDuties
        }
      }
    }`
	);
	return res?.data?.workExperienceCollection?.items;
}
