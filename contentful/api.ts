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
      skills
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

const contactCollectionQueryFragement = `
  contactCollection(order: sys_publishedAt_DESC, limit: 1) {
    items {
      description
    }
  }
`;

export async function getHomePageEntries() {
	const { data } = await fetchGraphQL(`
    query {
      ${heroCollectionQueryFragment}
      ${aboutCollectionQueryFragement}
      ${experienceQueryFragement}
      ${contactCollectionQueryFragement}
    }
  `);
	return {
		hero: data?.heroCollection?.items[0],
		experience: data?.positionCollection?.items,
		about: data?.aboutCollection?.items[0],
		contact: data?.contactCollection?.items[0],
	};
}
