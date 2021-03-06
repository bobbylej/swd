/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    user: {
      model: 'User',
      required: true
    },

    employees: {
      type: 'array',
      defaultsTo: []
    },

    date: {
      type: 'date'
    },

    isCompleted: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    }
  }
};
