function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Storybook Practice</h1>
      <p className="text-gray-500">컴포넌트를 만들고 Storybook으로 확인하세요.</p>
      <code className="rounded-md bg-gray-100 px-3 py-1.5 text-sm dark:bg-gray-800">
        pnpm storybook
      </code>
    </div>
  );
}

export default App;
