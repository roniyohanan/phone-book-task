export const config = {
  server: {
    name: 'contacts-api',
    port: process.env.APPLICATION_PORT || 3030,
  },
  db: {
    connectionString: process.env.DB_CONNECTION_URL || 'mongodb://localhost/contacts',
  },
};
