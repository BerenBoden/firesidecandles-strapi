module.exports = async (policyContext, config, { strapi }) => {
  if (policyContext.state.user) {
    return false;
  }
  return false;
};
