-- 3. Write a SQL Query to create a table named "fans" with an auto-incrementing ID that's a primary key and a name field of type text

CREATE TABLE IF NOT EXISTS fans (
  fanId   INTEGER PRIMARY KEY,
  name    TEXT
);