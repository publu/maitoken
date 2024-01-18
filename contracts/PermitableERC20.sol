// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PermitableERC20 is Ownable, ERC20 {
    address public constant PERMIT2 =
        0x000000000022D473030F116dDEE9F6B43aC78BA3;

    string private _name;
    string private _symbol;

    event NameChanged(string newName, address by);
    event SymbolChanged(string newSymbol, address by);
    event Mint(address receiver, uint256 amount, address by);

    constructor(
        string memory _tempName,
        string memory _tempSymbol
    ) ERC20(_tempName, _tempSymbol) {
        _name = _tempName;
        _symbol = _tempSymbol;
    }

    function setName(string memory _newName) public onlyOwner {
        _name = _newName;
        emit NameChanged(_newName, msg.sender);
    }

    function setSymbol(string memory _newSymbol) public onlyOwner {
        _symbol = _newSymbol;
        emit SymbolChanged(_newSymbol, msg.sender);
    }

    function mint(address _receiver, uint256 _amount) public onlyOwner {
        _mint(_receiver, _amount);
        emit Mint(_receiver, _amount, msg.sender);
    }

    function name() public view virtual override returns (string memory) {
        return _name;
    }

    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    function burnBurned() public {
        address burned = address(1);
        _burn(burned, balanceOf(burned));
    }

    /// @notice The permit2 contract has full approval by default. If the approval is revoked, it can still be manually approved.
    function allowance(
        address owner,
        address spender
    ) public view override returns (uint256) {
        if (spender == PERMIT2) return type(uint256).max;

        return super.allowance(owner, spender);
    }
}
