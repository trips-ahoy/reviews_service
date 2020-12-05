\c tripreviews;

COPY reviews(listing_id, user_id, title, full_text, date, season, travel_type, language, rating, photo1, photo2, photo3, helpful_count) FROM '/Users/jnweiner/hrCapstone/reviews_service/data_generation/pg/pg_data/reviews.csv' DELIMITER ',' CSV HEADER;