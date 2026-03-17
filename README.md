# storybook-practice

[Storybook](https://storybook.js.org) 써보기 

> [!NOTE]
> 이 문서는 무려 사람이 100% 작성하였습니다!

## Storybook 개요

Storybook은 컴포넌트(React, Vue, 그리고 그 이외 뭐든) 쇼케이스 겸 테스트 실행기입니다.

npm을 통해 설치하고 `storybook dev -p 6006`같은 커맨드로 띄울 수 있습니다. 브라우저로 웹 UI를 볼 수 있습니다(그냥 웹 앱이에요). 이 친구가 컴포넌트 파일을 포함해서 여러 파일을 읽어가서 잘 빌드해서 렌더링해서 브라우저에 표시해줍니다.

### Storybook을 쓰기 위한 최소 구성

`npm create storybook@latest` 하면 `.storybook` 디렉토리가 생성됩니다. Storybook 동작에 필요한 파일들은 여기에 다 있습니다.

### Story 파일

Story 파일에는 컴포넌트 사용 사례들(=*story*)이 들어갑니다. 이건 코드로 보는게 가장 빠를 것 같습니다.

```typescript
// Controls로 props 조작해보기
export const Empty: Story = {};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// 선택된 상태
export const Selected: Story = {
  args: {
    value: "apple",
  },
};
```

이건 `Select` 컴포넌트에 따라붙는 `select.stories.tsx` 파일의 내용 일부를 예시로 가져온 것입니다. 저 `args` 안에는 `Select` 컴포넌트에 넘기는 prop들이 들어갑니다. 이렇게 써 두고 Storybook UI를 보면, 좌측 사이드바 목록에는 `Select` 컴포넌트가 보이고, 그 밑에는 저 Story 3개가 각각 export된 이름으로 나타나게 됩니다.

저 `Story` 타입에는 `args`만 있는 것이 아닌데, 모두 보면 이렇습니다:
- `args`: 컴포넌트에 들어갈 인자를 정의하는 필드.
- `render`: 컴포넌트를 렌더링하는 함수. 컴포넌트를 감싸는 부모 React 컴포넌트를 작성할 수 있다고 생각하면 됩니다. 자체 상태 같은 것이 필요할 때 쓰면 좋습니다.
- `play`: 컴포넌트를 조작하고 테스트(`expect` 어쩌구)하는 함수. 그냥 테스트 코드예요.

### TMI: Storybook은 테스트를 어떻게 함?

Story의 `play`필드에 테스트 코드를 써 넣으면 그게 `vite.config.ts`에 등장하는 `storybookTest` 플러그인에 의해 vitest 테스트 케이스 코드로 변환되어서 chromium + playwright으로 돌아갑니다.

## Storybook에 Agentation 얹기

### Agentation

Agentation은 웹 마킹 툴입니다. 특정 요소를 선택해서 그걸 바로 에이전트에게 먹일 수 있게 도와주는 친구입니다.

얘의 실체는 두 파트로 이루어지는데, 먼저 화면에 추가하면 오버레이로 떠서 바로 애너테이션을 먹일 수 있게 도와주는 React 컴포넌트가 있고, 이렇게 추가한 애너테이션을 받아서(HTTP) 잠깐 담아두고 있다가 에이전트에게 넘겨주는(MCP) 서버가 있습니다.

### Storybook에 얹기

`.storybook/preview.tsx`를 보면 Storybook의 캔버스에 렌더링되는 컴포넌트를 정의하는 함수를 제공할 수 있게 되어 있는데, 여기에다가 Agentation 컴포넌트를 끼워버리면 됩니다.

```tsx
const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <Story />
        <Agentation
          endpoint="http://localhost:4747"
          onSessionCreated={(sessionId) => {
            console.log("Session started:", sessionId);
          }}
        />
      </>
    ),
  ],
  // ...생략
};
```

이렇게 하면 Storybook 캔버스에 Agentation 오버레이가 둥둥 떠다니게 되고, 여기서 애너테이션을 추가하면 에이전트가 MCP로 당겨올 수 있게 됩니다. 참고로 MCP는 agentation-mcp 패키지입니다. 추가하면 돼요.



## React Native

RN으로 오면 조금 골치아픕니다. 여기서부터는 두 가지 길이 있는데,
- 하나는 React Native Web으로 바꿔서 꾸역꾸역 웹에서 렌더링하는 방법이구요,
- 다른 하나는 그냥 시뮬레이터나 실 기기에서 렌더링하는 방법입니다.

### RNW 접근법

`@storybook/react-vite`을 쓰지 않고 `@storybook/react-native-web-vite`을 씁니다. 얘가 RN 컴포넌트를 RNW으로 만들어서 웹에 띄워줍니다.

RN을 웹으로 끌고 온 것이기 때문에 나머지 모든 부분은 웹의 그것과 동일합니다.

#### 그렇다면 이때 Unistyles는?

Unistyles는 네이티브에서는 C++ 바인딩으로 돌아가지만, 친절하게도 `react-native-unistyles/plugin`을 통해 웹도 지원합니다. 

저 플러그인을 `@storybook/react-native-web-vite`의 babel 플러그인 옵션으로 넣어주면 문제 없이 알아서 잘 적용됩니다.

### 네이티브 접근법

여기서부터는 Storybook 자체를 기기(또는 시뮬레이터)에 설치된 앱에서 돌리는 접근입니다.

```typescript
const STORYBOOK_ENABLED = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

if (STORYBOOK_ENABLED) {
  const { registerRootComponent } = require("expo");
  const StorybookUI = require("./.rnstorybook").default;
  registerRootComponent(StorybookUI);
} else {
  require("expo-router/entry");
}
```

진짜 앱인데 `StorybookUI` 컴포넌트를 띄우는 식입니다. 여기에는 호스트 환경에서의 Storybook UI에 있는 것과 같은 컨트롤들도 포함됩니다. 물론, 화면이 작고 애잔해서 사용하기는 좀 어렵습니다.

#### 앱에서 돌아가는 Storybook을 호스트 브라우저에서 제어하기

시뮬레이터를 보면서 그 안에서 컨트롤을 제어하고 이것저것 만지는게 쉽지가 않습니다. 호스트 브라우저에서 앱의 Storybook을 제어하려면 `@storybook/addon-react-native-server` 애드온을 쓰면 됩니다. 

이 애드온은 호스트에서 실행되는 Storybook 인스턴스(RNW 그것)에 붙어서 돌아가는데, 앱에서 접속할 수 있는 웹소켓 서버를 열어주고 이 통로를 통해 앱의 Storybook을 제어합니다. 앱에서도 같은 애드온을 사용하여 웹소켓 클라이언트로서 작동하게 됩니다.

#### Agentation 대신 react-native-grab

Agentation은 React Native에는 없습니다. 대신 `react-native-grab`을 씁니다. 얘도 비슷하게 움직입니다. 다만 MCP같은건 없고, 앱에서 dev menu를 통해 grab을 열어서 컴포넌트를 클릭하면 관련 정보가 클립보드에 복사되는 방식입니다.

### 통합적 접근

React Native 컴포넌트를 다룰 때 이런 그림이 가능합니다:
- 호스트(개발 머신)에서는 Storybook 인스턴스를 띄워서 웹 브라우저로 RNW 렌더된 RN 컴포넌트를 다루고,
- 동시에 그 호스트 Storybook과 동기화되는 앱 Storybook을 기기 또는 시뮬레이터에서 실행하여 실제 렌더링을 체크하기.



## Demo

### Web 프로젝트

`packages/web`에서

- `pnpm storybook`: Storybook이 6006 포트에 뜹니다.

### App 프로젝트

`packages/app`에서

- `pnpm storybook`: Storybook이 6007 포트에 뜹니다. 앱에서 붙을 웹소켓 서버는 7007에 뜹니다.
- (optional)`pnpm ios` 또는 `pnpm android`: 시뮬레이터에 앱을 띄워 놓습니다.
- `pnpm storybook:device`: Storybook을 앱(기기 또는 시뮬레이터)에서 실행합니다.