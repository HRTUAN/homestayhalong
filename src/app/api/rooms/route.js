// app/api/rooms/route.js
export async function GET() {
  const query = `
    query GetRooms {
      rooms {
        nodes {
          title
          slug
          roomPrice
          feature
          averageRating
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
        }
      }
    }
  `;

  const res = await fetch("https://blog.webhalong.id.vn/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  return Response.json(json.data.rooms.nodes);
}
