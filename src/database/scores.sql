-- Table: public.scores

-- DROP TABLE public.scores;

CREATE TABLE IF NOT EXISTS public.scores
(
    id integer NOT NULL DEFAULT nextval('scores_id_seq'::regclass),
    "playerA" integer,
    "playerB" integer,
    date date,
    winner integer,
    game integer,
    score text COLLATE pg_catalog."default",
    CONSTRAINT scores_pkey PRIMARY KEY (id),
    CONSTRAINT game FOREIGN KEY (game)
        REFERENCES public.games (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "playerA" FOREIGN KEY ("playerA")
        REFERENCES public.players (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "playerB" FOREIGN KEY ("playerB")
        REFERENCES public.players (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT winner FOREIGN KEY (winner)
        REFERENCES public.players (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.scores
    OWNER to denisdyagilev;