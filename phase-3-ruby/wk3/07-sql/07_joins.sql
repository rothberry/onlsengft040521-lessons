-- 7. Write a SQL Query to return all the fans that not fans of the Black Eyed Peas(169)
-- SELECT artists.artistId,
--   artists.name,
--   fans.name
-- FROM artists
--   JOIN fans ON artists.artistId = fans.artistId;
SELECT artists.name,
  albums.title
FROM artists
  JOIN albums ON artists.artistId = albums.artistId;