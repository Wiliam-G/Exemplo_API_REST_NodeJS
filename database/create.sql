create schema api;

create table users(
    id serial primary key,
    nome varchar not null,
    idade int not null,
    email varchar not null,
    telefone varchar not null,
    date timestamp default now()
);