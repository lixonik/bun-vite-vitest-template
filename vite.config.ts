import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'
import pkgJson from './package.json'

export default defineConfig({
	plugins: [dts()],
	server: {
		port: 3000,
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: pkgJson.name,
			fileName: (format) => `${pkgJson.name}.${format}.js`,
		},
		target: 'es6',
		outDir: 'dist',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
