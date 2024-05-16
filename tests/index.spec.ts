import { greet } from '../src'
import { expect, suite, test } from 'vitest'

suite('greet function', () => {
	test('greet function', () => {
		expect(greet('World')).toEqual('Hello, World!')
	})
})
