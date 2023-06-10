"use strict";

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async find(ctx) {
    const { strapi } = ctx;
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.page.search(ctx.query);
    } else {
      entities = await strapi.services.page.find(ctx.query, [
        "categories",
        "categories.category_tags",
      ]);
    }

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.page })
    );
  },

  async findOne(ctx) {
    const { strapi } = ctx;
    const entity = await strapi.services.page.findOne(ctx.params, [
      "categories",
      "categories.category_tags",
    ]);
    return sanitizeEntity(entity, { model: strapi.models.page });
  },

  async create(ctx) {
    const entity = await strapi.services.page.create(ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.page });
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.page.update({ id }, ctx.request.body);
    return sanitizeEntity(entity, { model: strapi.models.page });
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.page.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.page });
  },
};
