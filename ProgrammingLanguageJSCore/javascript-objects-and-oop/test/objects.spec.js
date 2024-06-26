const { describe, it } = require('mocha');
const { expect } = require('chai');

const { person, student, student2 } = require('../src/objects.js');

describe('person', () => {
  it('should have firstName property', () => {
    expect(person).to.have.property('firstName');
  });

  it('should have lastName property', () => {
    expect(person).to.have.property('lastName');
  });

  it('should have getFullName method', () => {
    expect(person.getFullName()).to.equal(`${person.firstName} ${person.lastName}`);
  });
});

describe('student', () => {
  it('should have firstName property', () => {
    expect(student).to.have.property('firstName');
  });

  it('should have lastName property', () => {
    expect(student).to.have.property('lastName');
  });

  it('should have grade property', () => {
    expect(student).to.have.property('grade');
  });

  it('should have getGrade method', () => {
    expect(student.getGrade()).to.equal(student.grade);
  });

  it('should have getFullName method', () => {
    expect(student.getFullName()).to.equal(`${student.firstName} ${student.lastName}`);
  });

  it('should have person as prototype', () => {
    const prototype = Object.getPrototypeOf(student);
    expect(prototype, `object "person" is not prototype of "student"`).to.equal(person);
  });
});

describe('student2', () => {
  it('should have grade property', () => {
    expect(student2).to.have.property('grade');
  });

  it('should have getGrade method', () => {
    expect(student2.getGrade()).to.equal(student2.grade);
  });
});
