/*
import Cucumber from 'cucumber'
import expect from 'chai'

const setWorldConstructor = Cucumber.setWorldConstructor;
const Given = Cucumber.Given;
const When = Cucumber.When;
const Then = Cucumber.Then;
const expect = expect;

const CustomWorld = () =>{
    this.variable = 0;
};

CustomWorld.prototype.setTo = ({number}) => {
    this.variable = parseInt(number);
};

CustomWorld.prototype.incrementBy = ({number}) => {
    this.variable += number;
}

setWorldConstructor(CustomWorld);

Given('a variable set to {int}', (number) => this.setTo(number));*/
