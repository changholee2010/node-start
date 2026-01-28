-- 1. database 생성
CREATE DATABASE dev
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

-- 2. user 생성 (로컬 접속 기준)
CREATE USER 'dev01'@'%'
  IDENTIFIED BY 'dev01';

-- 3. dev DB에 대한 권한 부여
GRANT ALL PRIVILEGES
  ON dev.*
  TO 'dev01'@'%';

-- 4. 권한 적용
FLUSH PRIVILEGES;
