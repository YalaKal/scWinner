// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

interface IContract {
  function attempt() external;
}

contract SCWinner {
  address alienSC;
  constructor(address _alienSC) {
    alienSC = _alienSC;
  }

  function callContract() external {

    (bool success, ) = alienSC.call(abi.encodeWithSignature("attempt()"));
    require(success);
  }
}