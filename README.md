# recipe-2-2-express

[Docker-DockerCompose-Training/recipe-2-2](https://github.com/hironomiu/Docker-DockerCompose-Training/tree/main/recipe-2-2)のサーバサイド側の実装

## Run

```
node server.js
```

## SetUp

```
npm install
```

### .env

以下を適時設定(`SECRET_KEY`の設定は必須)

```
SECRET_KEY=''
PORT=5000
DB_HOST=''
DB_USERNAME=''
DB_PASSWORD=''
DB_NAME=''
DB_PORT=
ORIGIN_URL=''
```

### DB

```
drop table users;
create table users (
    id int auto_increment not null,
    name varchar(100) not null ,
    email varchar(100) not null,
    password varchar(100) not null,
    primary key(id),
    unique (email)
);

drop table task_status;
create table task_status (
    id int auto_increment not null,
    name varchar(100) not null,
    primary key(id),
    unique (name)
);

drop table tasks;
create table tasks (
    id int auto_increment not null,
    title varchar(100) not null,
    task text not null,
    status int not null,
    user_id int not null,
    primary key(id),
    FOREIGN KEY (status) REFERENCES task_status (id)
);
```

パスワードは全て abcd

```
truncate table users;
insert into users(id,name,email,password) values
(1,'太郎','taro@example.com','$2b$10$iFCxa4wOsuZhklYp00bnCuk0sBJxGOU.e4YnfqvoDEyIk1C1rrd0K'),
(2,'John','john@example.com','$2b$10$8W1a6GfBsmn/gY8jhXjGbOCQwcWfF/PeI5O07ONakuhX9bYIZNe82'),
(3,'花子','hanako@example.com','$2b$10$TXCGCYDpn6p35Csz5UyoA.UHJ9SkE3Q7JP6lRO9ZgMaXuNwEo.wWW');

truncate table task_status;
insert into task_status(id,name) values
(1,'未着手'),(2,'着手中'),(3,'完了');

truncate table tasks;
insert into tasks(id,title,task,status,user_id) values
(1,'太郎　タスク１','タスク１の詳細',2,1),
(2,'太郎　タスク２','タスク２の詳細',1,1),
(3,'太郎　タスク３','タスク３の詳細',3,1),
(4,'太郎　タスク３','タスク３の詳細',1,1),
(5,'John タスク１','タスク１の詳細',1,2),
(6,'John タスク２','タスク２の詳細',1,2);
```
