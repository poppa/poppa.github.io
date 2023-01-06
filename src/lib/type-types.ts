/* eslint-disable @typescript-eslint/no-explicit-any */
export type Maybe<T> = T | undefined
export type MaybePromise<T> = Promise<T | undefined>
export type MaybeNull<T> = T | null
export type PlainObject<T = any> = Record<string, T>
export type ClassType<T> = new (...args: any[]) => T
export type Callable = () => any
export type AnyFunction = (...args: any[]) => any
/**
 * Defines a dictionary with key types `K` and value types `V`
 */
export type Dictionary<K extends number | string | symbol = string, V = any> = {
  [key in K]: V
}

// prettier-ignore
export type TypeOf<T> =
  T extends string ? string :
  T extends number ? number :
  T extends boolean ? boolean :
  T

export type DecoratorFn = <T>(
  _target: T,
  _propertyKey: string,
  descriptor: PropertyDescriptor
) => void

export type DeepPartial<T> = T extends AnyFunction
  ? T
  : T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T
