// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.18;

import "hardhat/console.sol";

contract Domains {
  constructor() {
    // console.log("THIS IS MY DOMAINS CONTRACT. NICE.");
  }

  mapping(string => address) public domains;

  // Register Domain Name
  function register(string calldata name) public {
    domains[name] = msg.sender;
    console.log("Domain name registerd for %s", msg.sender);
  }

  // Domain owners' address
  function getAddress(string calldata name) public view returns(address) {
    return domains[name];
  }
}