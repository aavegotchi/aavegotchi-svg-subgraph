import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Contract } from "../generated/Contract/Contract";
import { Aavegotchi } from "../generated/schema";

export function updateSvg(gotchi: BigInt): Aavegotchi | null {
    let contract = Contract.bind(Address.fromString("0x86935F11C86623deC8a25696E1C19a8659CbF95d"))
    let svg = contract.try_getAavegotchiSvg(gotchi);   
    if(svg.reverted) {
        return null; // just skip
    }

    let gotchiEntity = getOrCreateAavegotchi(gotchi);
    gotchiEntity.svg = svg.value;
    return gotchiEntity;
}

export function updateSideViews(gotchi: BigInt): Aavegotchi | null {
    let contract = Contract.bind(Address.fromString("0x86935F11C86623deC8a25696E1C19a8659CbF95d"))
    let svgs = contract.try_getAavegotchiSideSvgs(gotchi);   

    if(svgs.reverted) {
        return null; // just skip
    }   
    let gotchiEntity = getOrCreateAavegotchi(gotchi);
    let svgsValue = svgs.value;
    gotchiEntity.svg = svgsValue[0];
    gotchiEntity.left = svgsValue[1];
    gotchiEntity.right = svgsValue[2];
    gotchiEntity.back = svgsValue[3];
    return gotchiEntity
}

export function getOrCreateAavegotchi(gotchi: BigInt): Aavegotchi {
    let gotchiEntity = Aavegotchi.load(gotchi.toString())
    if(!gotchiEntity) {
        gotchiEntity = new Aavegotchi(gotchi.toString())
    }

    return gotchiEntity as Aavegotchi;
}
