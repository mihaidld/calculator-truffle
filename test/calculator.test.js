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
    const adderInstance = await Adder.new();
    const suberInstance = await Suber.new();
    const multiplierInstance = await Multiplier.new();
    const divisorInstance = await Divisor.new();
    this.calculator = await Calculator.new(
      adderInstance.address,
      suberInstance.address,
      multiplierInstance.address,
      divisorInstance.address,
    );
  });

  it('add numbers', async function () {
    expect(await this.calculator.add(1, 1)).to.be.bignumber.equal(new BN(2));
  });

  it('substract numbers nb1 - nb2', async function () {
    expect(await this.calculator.sub(100, 98)).to.be.bignumber.equal(new BN(2));
  });

  it('reverts when nb1 < nb2', async function () {
    await expectRevert(this.calculator.sub(98, 199), 'Suber: no negative value here.');
  });

  it('multiply numbers', async function () {
    expect(await this.calculator.mul(2, 3)).to.be.bignumber.equal(new BN(6));
  });

  it('divides numbers nb1 / nb2', async function () {
    expect(await this.calculator.div(12, 3)).to.be.bignumber.equal(new BN(4));
  });

  it('reverts when nb2 == 0', async function () {
    await expectRevert(this.calculator.div(5, 0), 'Divisor: can not divide by 0');
  });
});
