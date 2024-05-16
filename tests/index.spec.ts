import { greet } from '../src'
import { expect, suite, test } from 'vitest'

suite('greet function', () => {
	test('should greet the world', () => {
		expect(greet('World')).toEqual('Hello, World!')
	})
})
