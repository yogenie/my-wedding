/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "백성현",
    nameEn: "Groom",
    father: "백영기",
    mother: "김은숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이여진",
    nameEn: "Bride",
    father: "이상걸",
    mother: "김연이",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-04-25",
    time: "14:00",
    venue: "엘타워",
    hall: "오르체홀",
    address: "서울특별시 서초구 양재동 24",
    tel: "02-526-8600",
    mapLinks: {
      kakao: "https://kko.to/TBjj4sCKpy",
      naver: "https://naver.me/5QsMXMgK"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "함께하면 모든 것이 행복해지는 사람과\n새롭게 시작하는 날 초대합니다.\n\n그동안 아껴주신 마음 그대로\n평생의 인연이 될 첫날에 함께해 주세요."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "성현 + 여진",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "아버지", name: "백영기", bank: "신한은행", number: "323-020-069017" }
    ],
    bride: [
      { role: "신부", name: "이여진", bank: "하나은행", number: "1002-143-000000" },
      { role: "아버지", name: "이상걸", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "김연이", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "성현 ♥ 여진 결혼합니다",
    description: "2026년 4월 25일, 소중한 분들을 초대합니다."
  }
};
