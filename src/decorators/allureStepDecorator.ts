import { test, WorkerInfo } from '@playwright/test';

interface ClassMethodDecoratorContext {
  name?: string;
}

export function step(target: (...args: any[]) => any, context: ClassMethodDecoratorContext) {
  return function replacementMethod(this: WorkerInfo, ...args: any[]): Promise<any> {
    const name = this.constructor.name + '.' + (context.name as string);
    return test.step(name, async () => {
      return await target.call(this, ...args);
    });
  };
}
