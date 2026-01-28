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
ALTER TABLE member
ADD COLUMN responsibility ENUM('User', 'Admin')
  DEFAULT 'User';

select *
from member;

update member
set responsibility = 'Admin'
where user_id = 'user99';

-- 글번호,제목,내용,작성자,일시 
create table board (
  id int auto_increment primary key,
  title varchar(100) not null,
  content text not null,
  writer varchar(50) not null,
  created_at timestamp default current_timestamp
);
drop table board;

select * from board;

INSERT INTO board (title, content, writer) VALUES
('첫 번째 게시글', '첫 번째 게시글 내용입니다.', 'user01'),
('두 번째 게시글', '두 번째 게시글 내용입니다.', 'user01'),
('세 번째 게시글', '세 번째 게시글 내용입니다.', 'user02'),
('네 번째 게시글', '네 번째 게시글 내용입니다.', 'user02'),
('다섯 번째 게시글', '다섯 번째 게시글 내용입니다.', 'user99'),
('여섯 번째 게시글', '여섯 번째 게시글 내용입니다.', 'user99'),
('일곱 번째 게시글', '일곱 번째 게시글 내용입니다.', 'user01'),
('여덟 번째 게시글', '여덟 번째 게시글 내용입니다.', 'user02'),
('아홉 번째 게시글', '아홉 번째 게시글 내용입니다.', 'user99'),
('열 번째 게시글', '열 번째 게시글 내용입니다.', 'user01');
