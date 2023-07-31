// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.18;

import "hardhat/console.sol";

contract Domains {
  constructor() {
    // console.log("THIS IS MY DOMAINS CONTRACT. NICE.");
  }

  mapping(string => address) public domains;
  mapping(string => string) public records;

  // Register Domain Name
  function register(string calldata name) public {
    // Check if Domain is already reistered or not
    require(domains[name] == address(0));
    domains[name] = msg.sender;
    console.log("Domain name registerd for %s", msg.sender);
  }

  // Domain owners' address
  function getAddress(string calldata name) public view returns(address) {
    return domains[name];
  }

  // Set Domain Record
  function setRecord(string calldata name, string calldata record) public {
    require(domains[name] == msg.sender, "You can't set this record");
    records[name] = record;
  }

  // Get Domain Record
  function getRecord(string calldata name) public view returns(string memory) {
    return records[name];
  }
}