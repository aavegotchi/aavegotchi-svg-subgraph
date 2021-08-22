import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Contract } from "../generated/Contract/Contract";
import { Aavegotchi } from "../generated/schema";

export function updateSvg(gotchi: BigInt): void {
    let contract = Contract.bind(Address.fromString("0x86935F11C86623deC8a25696E1C19a8659CbF95d"))
    let svg = contract.try_getAavegotchiSvg(gotchi);   
    let gotchiEntity = getOrCreateAavegotchi(gotchi);

    if(svg.reverted) {
        return; // just skip
    }

    gotchiEntity.svg = svg.value;
    gotchiEntity.save();
}

export function getOrCreateAavegotchi(gotchi: BigInt): Aavegotchi {
    let gotchiEntity = Aavegotchi.load(gotchi.toString())
    if(gotchiEntity == null) {
        gotchiEntity = new Aavegotchi(gotchi.toString())
    }

    return gotchiEntity as Aavegotchi;
}