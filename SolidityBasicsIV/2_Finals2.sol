// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.2;

contract SendEther {
    constructor() payable {}

    receive() external payable {}

    function sendViaTransfer(address payable _to) external payable {
        _to.transfer(100);
    }

    function sendViaSend(address payable _to) external payable {
        bool sent = _to.send(100);

        require(sent, "Sending failed.");
    }

    function sendViaCall(address payable _to) external payable {
        (bool success, ) = _to.call{value: 100}("");
        require(success, "Call failed.");
    }
}

contract ReceiveEther {
    event Log(uint256 amount, uint256 gas);

    receive() external payable {
        emit Log(msg.value, gasleft());
    }
}

contract SelfDestruct {
    event Deposit(uint256 amount);
    event Withdraw(uint256 amount);
    address public owner = msg.sender;

    receive() external payable {
        emit Deposit(msg.value);
    }

    function withdraw() external {
        require(msg.sender == owner, "Not owner!");
        emit Withdraw(address(this).balance);
        selfdestruct(payable(msg.sender));
    }
}


/*
The Solidity code comprises three contracts: SendEther for transferring Ether 
via different methods, ReceiveEther for logging received Ether and remaining gas, 
and SelfDestruct for enabling contract withdrawal and self-destruction by the owner.
*/