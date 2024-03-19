// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.2;

contract FallbackExample {
    event FallbackReceived(address sender, uint256 amount);
    event PaymentReceived(address payer, uint256 amount);

    fallback() external payable {
        emit FallbackReceived(msg.sender, msg.value);
    }

    receive() external payable {
        emit PaymentReceived(msg.sender, msg.value);
    }
}


/*
The `FallbackExample` contract in Solidity version 0.8.2 showcases fallback and receive functions. 
It emits events when Ether is received either through a regular payment or via a fallback function call. 
This contract demonstrates how contracts can handle unexpected or arbitrary Ether transfers, 
providing transparency through event logging.
*/