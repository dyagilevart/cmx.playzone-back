-- Table: public.games

-- DROP TABLE public.games;

CREATE TABLE IF NOT EXISTS public.games
(
    id integer NOT NULL DEFAULT nextval('games_id_seq'::regclass),
    title text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    logo text COLLATE pg_catalog."default",
    rules text COLLATE pg_catalog."default",
    CONSTRAINT games_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.games
    OWNER to denisdyagilev;