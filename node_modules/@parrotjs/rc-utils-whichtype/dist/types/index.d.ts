declare type IType = undefined | 'undefined' | 'object' | 'number' | 'array' | 'string';
declare function whichType(type: IType): (arg: string) => boolean;
/**
 * 判断是否为undefined
 * @returns 返回一个函数
 */
declare const isTypeUndefined: (arg: string) => boolean;
/**
 * 判断是否为object
 * @returns 返回一个函数
 */
declare const isTypeObject: (arg: string) => boolean;
/**
 * 判断是否为object
 * @returns 返回一个函数
 */
declare const isTypeNumber: (arg: string) => boolean;
/**
 * 判断是否为array
 * @returns 返回一个函数
 */
declare const isTypeArray: (arg: string) => boolean;
/**
 * 判断是否为字符串
 * @returns 返回一个函数
 */
declare const isTypeString: (arg: string) => boolean;
export { isTypeUndefined, isTypeObject, isTypeNumber, isTypeArray, isTypeString };
export default whichType;
