module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'mondo-dashboard',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
