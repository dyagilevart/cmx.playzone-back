-- Table: public.players

-- DROP TABLE public.players;

CREATE TABLE IF NOT EXISTS public.players
(
    id integer NOT NULL DEFAULT nextval('players_id_seq'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    phone text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT players_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.players
    OWNER to denisdyagilev;