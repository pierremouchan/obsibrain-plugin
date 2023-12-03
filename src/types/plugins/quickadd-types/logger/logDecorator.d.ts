/**
* A decorator function that logs the method call with its arguments and return value.
* Used by writing @logDecorator above a method.
*/
declare function logDecorator(target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor;
export default logDecorator;
