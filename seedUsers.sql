\c tripreviews;

COPY users(name, username, address, contributions, votes, avatar, followers) FROM '/Users/jnweiner/hrCapstone/reviews_service/data_generation/pg/pg_data/users.csv' DELIMITER ',' CSV HEADER;