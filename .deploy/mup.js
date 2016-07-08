module.exports = {
  servers: {
    one: {
      host: '178.62.44.11',
      username: 'root',
      pem: '/Users/adamdawkins/.ssh/id_rsa',
    },
  },

  meteor: {
    name: 'layback',
    path: '../',
    servers: {
      one: {},
    },
    env: {
      ROOT_URL: 'http://layback.dragondrop.ninja',
      MONGO_URL: 'mongodb://layback:upswing-markup-bagpipe@aws-us-east-1-portal.17.dblayer.com:10116/layback'
    },
  },
};
