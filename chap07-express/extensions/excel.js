const xlsx = require("xlsx");
const pool = require("../db");
const crypto = require("crypto");
const path = require("path"); // 추가

console.log("프로그램 시작...");

try {
  // 절대 경로로 수정하여 파일 읽기 시도
  const filePath = path.join(__dirname, "../uploads/엑셀연습1.xlsx");
  const workbook = xlsx.readFile(filePath);

  const firstSheetName = workbook.SheetNames[0];
  const firstSheet = workbook.Sheets[firstSheetName];
  const result = xlsx.utils.sheet_to_json(firstSheet);

  console.log(`읽어온 데이터 개수: ${result.length}개`);

  for (let elem of result) {
    let passwd = crypto
      .createHash("sha512")
      .update("" + elem.password)
      .digest("base64");

    // 쿼리 실행 전 로그
    console.log(`${elem.user_id} 입력 시도 중...`);

    pool.query(
      `insert into member (user_id, user_pw, user_name) values(?,?,?)`,
      [elem.user_id, passwd, elem.user_name],
      (err, data) => {
        if (err) {
          console.error("DB 에러 상세:", err.message); // 에러 출력
          return;
        }
        console.log("입력 완료 => ", data.insertId || "성공");
      },
    );
  }
} catch (e) {
  console.error("엑셀 파일을 읽는 중 오류 발생:", e.message);
}

console.log("반복문 요청 완료 (DB 응답은 대기 중...)");
