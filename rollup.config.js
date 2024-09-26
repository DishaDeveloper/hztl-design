import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import esbuild from 'rollup-plugin-esbuild'; 
import glob from 'fast-glob';
import { rimraf } from 'rimraf';
import packageJson from './package.json';

const outputDir = 'dist';

async function getEntries() {
  const componentEntries = await glob('src/components/**/index.ts');
  return ['src/index.tsx', ...componentEntries];
}

async function buildConfig() {
  const entries = await getEntries();

  const external = [
    'react',
    'react-dom',
    'react/jsx-runtime',
    new RegExp('react-icons/*'),
    ...Object.keys({
      ...packageJson.dependencies,
      ...packageJson.peerDependencies,
    }),
  ];

  return {
    input: entries,
    output: [
      {
        format: 'es',
        dir: `${outputDir}/esm`,
        entryFileNames: '[name].mjs',
        preserveModules: true,
        sourcemap: true,
      },
      {
        format: 'cjs',
        dir: `${outputDir}/cjs`,
        entryFileNames: '[name].cjs',
        preserveModules: true,
        sourcemap: true,
      },
      {
        format: 'es',
        file: `${outputDir}/index.mjs`, // Output for ES module
        sourcemap: true,

      },
      {
        format: 'cjs',
        file: `${outputDir}/index.js`, // Output for CommonJS module
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      cleanOutputDir(),
      postcss(),
     
      esbuild({
        sourceMap: false,
        minify: false,
        target: 'esnext',
      }),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-react'],
        exclude: 'node_modules/**',
      }),
      generateDts(),
    ],
    onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
        return;
      }
      warn(warning);
    },
  };
}

function cleanOutputDir() {
  return {
    name: 'clean-output-dir',
    async buildStart() {
      await rimraf(outputDir);
    },
  };
}

function generateDts() {
  return {
    name: "generate-dts",
    async closeBundle() {
      await `tsc -p tsconfig.build.json --outDir ${outputDir}/types`;
    },
  };
}


export default buildConfig();
