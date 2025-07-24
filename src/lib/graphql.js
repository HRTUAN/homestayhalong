const WORDPRESS_GRAPHQL_ENDPOINT = "https://blog.webhalong.id.vn/graphql";

export async function fetchRooms(slug = null) {
  const query = `
    query GetRooms {
  rooms {
    nodes {
      content
      roomPrice
      feature
      averageRating
      slug
      title
      beds
      maxChildren
      area
      rule
      maplink
      titleMap
      roomFaq {
        question
        answer
      }
      gallery
      featuredImage {
        node {
          sourceUrl
        }
      }
      comments {
        edges {
          node {
            content
            author {
              name
            }
          }
        }
      }
      facilities {
        label
        attributes {
          label
        }
      }

    }
  }
}
  `;

  const res = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 3600,
    },
  });

  const json = await res.json();
  const rooms = json.data.rooms.nodes;

  if (slug) {
    return rooms.find((room) => room.slug === slug) || null;
  }

  return rooms;
}
