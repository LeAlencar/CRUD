CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "name" text NOT NULL,
    "surname" text NOT NULL,
    "age" int,
    "city" text NOT NULL,
    "state" text NOT NULL
);