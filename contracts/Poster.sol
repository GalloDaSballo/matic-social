// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "hardhat/console.sol";

contract Poster {
    event NewPost(address indexed author, string content, string imageHash);

    function publish(string memory content, string memory imageHash) public {
        emit NewPost(msg.sender, content, imageHash);
    }
}
