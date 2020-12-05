\c tripreviews;

COPY listings(listing) FROM '/Users/jnweiner/hrCapstone/reviews_service/data_generation/pg/pg_data/listings.csv' DELIMITER ',' CSV HEADER;