show databases; -- 데이터베이스 조회.
use dev; -- db 선택.
show tables; -- 테이블 조회.

-- member 테이블 생성.
create table member (
  user_id varchar(45) not null,
  user_pw varchar(200) not null,
  user_name varchar(100) not null,
  user_img varchar(100),
  primary key (user_id)
);

-- 글번호,제목,내용,작성자,일시 
create table board (
  id int auto_increment primary key,
  title varchar(100) not null,
  content text not null,
  writer varchar(50) not null,
  created_at timestamp default current_timestamp
);
