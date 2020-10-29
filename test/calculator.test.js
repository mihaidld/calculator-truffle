const { contract } = require('@openzeppelin/test-environment');

const { BN, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

const Adder = contract.fromArtifact('Adder');
const Suber = contract.fromArtifact('Suber');
const Multiplier = contract.fromArtifact('Multiplier');
const Divisor = contract.fromArtifact('Divisor');
const Calculator = contract.fromArtifact('Calculator');

describe('Calculator', () => {
  beforeEach(async function () {
    this.adder = await Adder.new();
    this.suber = await Suber.new();
    this.multiplier = await Multiplier.new();
    this.divisor = await Divisor.new();
    /* const adderInstance = await Adder.new();
    const suberInstance = await Suber.new();
    const multiplierInstance = await Multiplier.new();
    const divisorInstance = await Divisor.new(); */
    this.calculator = await Calculator.new(
      this.adder.address,
      this.suber.address,
      this.multiplier.address,
      this.divisor.address,
      /* adderInstance.address,
      suberInstance.address,
      multiplierInstance.address,
      divisorInstance.address, */
    );
  });

  it('adds numbers', async function () {
    expect(await this.calculator.add(1, 1)).to.be.bignumber.equal(new BN(2));
  });

  it('substracts numbers nb1 - nb2', async function () {
    expect(await this.calculator.sub(100, 98)).to.be.bignumber.equal(new BN(2));
  });

  it('reverts when substracts nb1 - nb2 and nb1 < nb2', async function () {
    await expectRevert(this.calculator.sub(98, 199), 'Suber: no negative value here.');
  });

  it('multiplies numbers', async function () {
    expect(await this.calculator.mul(2, 3)).to.be.bignumber.equal(new BN(6));
  });

  it('divides numbers nb1 / nb2', async function () {
    expect(await this.calculator.div(12, 3)).to.be.bignumber.equal(new BN(4));
  });

  it('reverts when divides by 0', async function () {
    await expectRevert(this.calculator.div(5, 0), 'Divisor: can not divide by 0');
  });
});
