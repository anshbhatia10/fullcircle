import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/Users/anshbhatia/Desktop/Qlavo_Projects/full-circle-clinic-cms/tina/__generated__/.cache/1777104147383', url: 'http://localhost:4001/graphql', token: '0d89a43db4e89b743b0dd93fe10fbc2c8ed643a3', queries,  });
export default client;
  