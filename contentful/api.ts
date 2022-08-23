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

const heroCollectionQueryFragment = `
  heroCollection(order: sys_publishedAt_DESC, limit: 1) {
    items {
      greeting
      name
      headline
      descriptions
    }
  }
`;

const aboutCollectionQueryFragement = `
  aboutCollection(order: sys_publishedAt_DESC, limit: 1) {
    items {
      description
    }
  }
`;

const workExperienceCollectionQueryFragment = `
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
`;

export async function getHomePageEntries() {
	const { data } = await fetchGraphQL(`
    query {
      ${heroCollectionQueryFragment}
      ${workExperienceCollectionQueryFragment}
      ${aboutCollectionQueryFragement}
    }
  `);
	return {
		hero: data?.heroCollection?.items[0],
		workExperience: data?.workExperienceCollection?.items,
		about: data?.aboutCollection?.items[0],
	};
}
