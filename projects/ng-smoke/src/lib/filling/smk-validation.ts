export function NotNull() {
  return function (target: any, propertyKey: string): any {
    function validate(): any {
      return {
        valid: target[propertyKey] !== '' && target[propertyKey] != undefined && target[propertyKey] !== null,
        error: 'notnull'
      };
    }

    createTargetValidatorBase(target, propertyKey);
    target.modelValidators[propertyKey].push(validate);
  }
}

export function Min(length: number) {
  return function (target: any, propertyKey: string): any {
    function validate(): any {
      return {valid: (target[propertyKey] || '').length >= length, error: 'min|' + length};
    }

    createTargetValidatorBase(target, propertyKey);
    target.modelValidators[propertyKey].push(validate);
  }
}

export function Max(length: number) {
  return function (target: any, propertyKey: string): any {
    function validate(): any {
      return {valid: (target[propertyKey] || '').length <= length, error: 'max|' + length};
    }

    createTargetValidatorBase(target, propertyKey);
    target.modelValidators[propertyKey].push(validate);
  }
}

function createTargetValidatorBase(target: any, propertyKey: string): void {
  if (!target.modelValidators) {
    target.modelValidators = {};
  }
  if (!target.modelErrors) {
    target.modelErrors = {};
  }
  if (!target.modelValidators[propertyKey]) {
    target.modelValidators[propertyKey] = [];
  }
  if (!target.modelErrors[propertyKey]) {
    target.modelErrors[propertyKey] = [];
  }
}
