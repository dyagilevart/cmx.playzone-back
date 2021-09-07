CREATE TABLE games
(
    Id integer NOT NULL,
    Title text  NOT NULL,
    Description text NOT NULL,
    Pic BYTEA NOT NULL,
    PRIMARY KEY (Id)
)