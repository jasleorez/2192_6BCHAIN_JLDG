pragma solidity ^0.8.0;

contract Event {
    event NumberAdded(uint indexed num);

    uint public sum;

    function addNumber(uint _num) public {
        sum += _num;
        emit NumberAdded(_num);
    }
}
