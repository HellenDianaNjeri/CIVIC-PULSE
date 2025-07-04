create table if not exists constitution (
  article integer primary key,
  title text not null,
  summary text not null
);

create table if not exists rights (
  id serial primary key,
  question text not null,
  answer text not null
);

create table if not exists budget (
  id serial primary key,
  category text not null,
  allocation numeric not null,
  description text
);

create table if not exists updates (
  id serial primary key,
  date date not null,
  title text not null,
  description text
);
