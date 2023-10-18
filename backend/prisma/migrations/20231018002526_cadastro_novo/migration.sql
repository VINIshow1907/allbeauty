-- AlterTable
CREATE SEQUENCE profissional_idprofissional_seq;
ALTER TABLE "profissional" ALTER COLUMN "idprofissional" SET DEFAULT nextval('profissional_idprofissional_seq');
ALTER SEQUENCE profissional_idprofissional_seq OWNED BY "profissional"."idprofissional";
