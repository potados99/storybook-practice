# Storybook Practice

Storybook 학습 및 실습을 위한 프로젝트.

## 기술 스택

- **런타임**: Node.js v25
- **패키지 매니저**: pnpm (`npm`, `yarn` 사용 금지)
- **프레임워크**: React 19 + TypeScript
- **빌드 도구**: Vite 7
- **린트/포맷**: Biome (ESLint, Prettier 사용하지 않음)

## 주요 명령어

```bash
pnpm dev        # 개발 서버 실행
pnpm build      # 타입 체크 + 빌드 (tsc -b && vite build)
pnpm lint       # Biome 린트+포맷 체크
pnpm lint:fix   # Biome 자동 수정
pnpm format     # Biome 포맷만 적용
pnpm preview    # 빌드 결과 미리보기
```

## 프로젝트 구조

```
src/
  main.tsx       # 엔트리포인트 (StrictMode + createRoot)
  App.tsx        # 루트 컴포넌트
  App.css        # 앱 스타일
  index.css      # 글로벌 스타일
  assets/        # 정적 에셋
public/          # 퍼블릭 에셋
```

## TypeScript 설정

- `strict: true` — 모든 strict 옵션 활성화
- `noUnusedLocals`, `noUnusedParameters` — 사용하지 않는 변수/파라미터 에러
- `verbatimModuleSyntax` — import/export type을 명시적으로 사용
- `jsx: react-jsx` — React 17+ JSX 트랜스폼
- 타겟: ES2022

## 컨벤션

- 커밋 메시지: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:` 등)
- 컴포넌트 파일: PascalCase (예: `Button.tsx`)
- 유틸/훅 파일: camelCase (예: `useCounter.ts`)
