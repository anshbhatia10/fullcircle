import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '3e9f627cb40a81185033dc88a58be90d2b941ffc', queries,  });
export default client;
  