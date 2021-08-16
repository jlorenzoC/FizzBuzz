import { FizzbuzzPipe } from './fizzbuzz.pipe';

describe('FizzbuzzPipe', () => {
  it('create an instance', () => {
    const pipe = new FizzbuzzPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 1', () => {
    const pipe = new FizzbuzzPipe();
    expect(pipe.transform(1, true)).toEqual(1);
  });

  it('should return 2', () => {
    const pipe = new FizzbuzzPipe();
    expect(pipe.transform(2, true)).toEqual(2);
  });

  it("shouldn't return 3 for 3", () => {
    const pipe = new FizzbuzzPipe();
    expect(pipe.transform(3)).not.toEqual(3);
  });

  it('should return Fizz for 3', () => {
    const pipe = new FizzbuzzPipe();
    expect(pipe.transform(3)).toEqual('Fizz');
  });

  it('should return Fizz for multiples of 3', () => {
    const pipe = new FizzbuzzPipe();
    expect(pipe.transform(6)).toEqual('Fizz');
    expect(pipe.transform(9)).toEqual('Fizz');
    expect(pipe.transform(12)).toEqual('Fizz');
  });

  it('should return Buzz for multiples of 5', () => {
    const pipe = new FizzbuzzPipe();
    expect(pipe.transform(5)).toEqual('Buzz');
    expect(pipe.transform(10)).toEqual('Buzz');
    expect(pipe.transform(100)).toEqual('Buzz');
  });

  it('should return FizzBuzz for multiples of 3 and 5', () => {
    const pipe = new FizzbuzzPipe();
    expect(pipe.transform(15)).toEqual('FizzBuzz');
    expect(pipe.transform(45)).toEqual('FizzBuzz');
    expect(pipe.transform(75)).toEqual('FizzBuzz');
  });
});
