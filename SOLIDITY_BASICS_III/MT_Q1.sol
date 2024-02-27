pragma solidity ^0.8.3;

contract MQuizContract {
    address public owner;
    uint256 public age;
    uint256 public hoursWorked;
    uint256 public hourlyRate;
    uint256 public totalSalary;

    constructor() {
        owner = msg.sender;
    }

    modifier ownerOnly() {
        require(msg.sender == owner, "You sould be the owner to call this function");
        _;
    }

    modifier needRate(uint256 _rate) {
        require(_rate > 0, "Must be greater than zero");
        _;
    }

    function setRate(uint256 _hourlyRate) external ownerOnly needRate(_hourlyRate) {
        hourlyRate = _hourlyRate;
    }

    modifier needHours(uint256 _hours) {
        require(_hours > 0, "Must be greater than zero");
        _;
    }

    function setHrsWrk(uint256 _hoursWorked) external ownerOnly needHours(_hoursWorked) {
        hoursWorked = _hoursWorked;
    }

    function setAge(uint256 _age) external  {
        age = _age;
    }

    function calculateTotSal() external ownerOnly {
        require(hourlyRate > 0 && hoursWorked > 0, "Hourly rate or hours worked cannot be zero");
        totalSalary = hourlyRate * hoursWorked;
    }
}
