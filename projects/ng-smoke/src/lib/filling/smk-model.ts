import "reflect-metadata";

export function Model<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
  } as T;
}

export function Prop() {
  return function (target: any, propertyKey: string): any {
    let value: any = null;
    const getter = function (): any {
      return value;
    };
    const setter = function (newVal: any) {
      value = newVal;
    }
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    });
  }
}

export abstract class SmkModel {
  modelValidators: any;
  modelErrors: any;
  constructor(value?: any) {
    if (value && typeof value === 'object') {
      Object.keys(value).forEach(key => {
        this[key] = value[key];
      });
    }
  }

  isValid(): boolean {
    let isValid = true;
    Object.keys(this.modelValidators).forEach(key => {
      this.modelValidators[key].forEach(validator => {
        const result = validator();
        if (!result.valid) {
          isValid = false;
          this.modelErrors[key].push(result.error);
        }
      });
    });
    return isValid;
  }
}
