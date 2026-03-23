// ════════════════════════════════════════════════════════════════════════
// Firebase 설정 — SmartSwing-SEC 전용 앱 (완전 독립 프로젝트)
// ════════════════════════════════════════════════════════════════════════
//
// 📋 Firebase 프로젝트 설정 절차:
//   1. https://console.firebase.google.com 에서 신규 프로젝트 생성
//   2. 프로젝트 이름: smartswing-sec (또는 원하는 이름)
//   3. Firestore Database 활성화 (테스트 모드로 시작)
//   4. 프로젝트 설정 > 앱 추가 (웹) 후 아래 config 값 교체
//   5. 보안 규칙 설정: allow read, write: if request.time < timestamp.date(2027,12,31);
//   6. GitHub Secret FIREBASE_CREDENTIALS (서비스 계정 JSON) 등록
//
// ════════════════════════════════════════════════════════════════════════
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ⚠️  아래 값을 새 Firebase 프로젝트의 실제 config로 교체하세요
const firebaseConfig = {
  apiKey:            "AIzaSyAISwICYGC5cz28ooZegsUIT8kl0TCCI74",
  authDomain:        "smartswing-sec.firebaseapp.com",
  projectId:         "smartswing-sec",
  storageBucket:     "smartswing-sec.firebasestorage.app",
  messagingSenderId: "49740233538",
  appId:             "1:49740233538:web:d11eced90fe933123c26db",
  measurementId:     "G-LXL3WPH774",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// ── Firestore 컬렉션 경로 상수 ──────────────────────────────────────────
// UDB  : /udb/{yyyy-mm}          — 신규 월별 KOSPI 데이터 (GDB 이후)
// 신호  : /signals/{yyyymmdd}    — 매일 3시 시뮬 결과 (매수/매도 제안)
// 거래  : /trades/{id}           — 실제 수동 거래 기록 (사용자 입력)
// 포트  : /portfolio/snapshot    — 누적 수익률 스냅샷
export const COL = {
  UDB:      "udb",       // /udb/{yy-mm}          — 월별 KOSPI 집계 (UDB)
  DAILY:    "daily",     // /daily/{YYYYMMDD}      — 일별 실제 pykrx 신호
  HOLDINGS: "holdings",  // /holdings/{code}       — 현재 보유 포지션 (수동 등록)
  SIGNALS:  "signals",   // 구버전 호환 유지
  TRADES:   "trades",    // /trades/{id}           — 거래 기록
};
