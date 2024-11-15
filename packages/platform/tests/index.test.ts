import { expect, test } from 'bun:test'
import { demo } from '../index.ts'

test('测试实例', () => {
    expect(demo()).toBe('hello')
})
