// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: unknown;
let callback = (a: number): number => {
    return 100 + a
};

export {};

interface Dog {
    bark(): void;
}

interface Cat {
    meow(): void;
}

function isDog(animal: Dog | Cat): asserts animal is Dog {
    if (!('bark' in animal)) {
        throw new Error('Not a dog');
    }
    // return 'bark' in animal;
}
