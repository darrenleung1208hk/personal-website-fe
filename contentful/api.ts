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

const profileQueryFragment = `
  profileCollection(order: sys_publishedAt_DESC, limit: 1) {
    items {
			name
      title
      greeting
      skills
      email
      github
      linkedin
      introduction
      conclusion
    }
  }
`;

const experienceQueryFragement = `
  positionCollection(order: startDate_DESC) {
    items {
      title
      startDate
      endDate
      descriptions
      organization {
        name
        website
        location
      }
    }
  }
`;

export async function getHomePageEntries() {
	const { data } = await fetchGraphQL(`
    query {
      ${experienceQueryFragement}
      ${profileQueryFragment}
    }
  `);
	return {
		experience: data?.positionCollection?.items,
		profile: data?.profileCollection?.items[0],
	};
}
