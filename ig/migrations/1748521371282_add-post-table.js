/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE posts (
      id SERIAL PRIMARY KEY,
      lat NUMERIC,
      lng NUMERIC
    )`);
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE posts;`);
};
