# Storybook Practice

Storybook 학습 및 실습을 위한 모노리포 프로젝트.

## 기술 스택

- **런타임**: Node.js v25
- **패키지 매니저**: pnpm workspace (`npm`, `yarn` 사용 금지)
- **린트/포맷**: Biome (ESLint, Prettier 사용하지 않음)

### packages/web

- **프레임워크**: React 19 + TypeScript
- **빌드 도구**: Vite 7
- **Storybook**: v10 (React + Vite)

## 주요 명령어

```bash
# 루트
pnpm check      # Biome 린트+포맷 체크
pnpm format     # Biome 자동 수정

# web 패키지
pnpm --filter web dev            # 개발 서버 실행
pnpm --filter web build          # 타입 체크 + 빌드
pnpm --filter web storybook      # Storybook 실행 (포트 6006)
pnpm --filter web build-storybook # Storybook 빌드
```

## 프로젝트 구조

```
├── biome.json              # 공유 Biome 설정
├── package.json            # 루트 (공통 devDeps + 스크립트)
├── pnpm-workspace.yaml     # packages/*
└── packages/
    └── web/
        ├── .storybook/     # Storybook 설정
        ├── src/
        │   ├── main.tsx    # 엔트리포인트
        │   ├── App.tsx     # 루트 컴포넌트
        │   ├── components/ # 컴포넌트 + 스토리
        │   └── index.css   # 글로벌 스타일
        ├── public/         # 퍼블릭 에셋
        └── index.html
```

## TypeScript 설정

- 각 패키지별 독립 tsconfig
- `strict: true` — 모든 strict 옵션 활성화
- `noUnusedLocals`, `noUnusedParameters` — 사용하지 않는 변수/파라미터 에러
- `verbatimModuleSyntax` — import/export type을 명시적으로 사용
- `jsx: react-jsx` — React 17+ JSX 트랜스폼
- 타겟: ES2022

## 컨벤션

- 커밋 메시지: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:` 등)
- 컴포넌트 파일: kebab-case (예: `button.tsx`, `date-picker.tsx`)
- 유틸/훅 파일: camelCase (예: `useCounter.ts`)
