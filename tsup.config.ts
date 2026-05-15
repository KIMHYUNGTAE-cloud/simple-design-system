import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'tokens/index': 'src/tokens/index.ts',
  },
  format: ['esm', 'cjs'],
  outExtension: ({ format }) => ({ js: format === 'cjs' ? '.cjs' : '.mjs' }),
  dts: true,
  sourcemap: false,
  clean: true,
  external: ['react', 'react-dom'],
  async onSuccess() {
    await mkdir('dist', { recursive: true });
    const tokensCss = await readFile('src/styles/tokens.css', 'utf8');
    let componentsCss = '';
    try {
      componentsCss = await readFile('dist/index.css', 'utf8');
    } catch {
      // dist/index.css 가 아직 없으면(컴포넌트 미작성 시) 무시
    }
    await writeFile(
      'dist/styles.css',
      tokensCss + (componentsCss ? '\n\n' + componentsCss : ''),
    );
  },
});
