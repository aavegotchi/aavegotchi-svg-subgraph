import { Address, BigInt } from "@graphprotocol/graph-ts";
import { Contract } from "../generated/Contract/Contract";
import { Aavegotchi, Stats } from "../generated/schema";

export function updateSvg(gotchi: BigInt): void {
    let contract = Contract.bind(Address.fromString("0x86935F11C86623deC8a25696E1C19a8659CbF95d"))
    let svgs = contract.try_getAavegotchiSideSvgs(gotchi);   
    let gotchiEntity = getOrCreateAavegotchi(gotchi);

    if(svgs.reverted) {
        let svg = contract.try_getAavegotchiSvg(gotchi);   
        if(svg.reverted) {
            return; // just skip
        }
        gotchiEntity.svg = svg.value;
    } else {
        let svgsValue = svgs.value;
        gotchiEntity.svg = svgsValue[0];
        gotchiEntity.left = svgsValue[1];
        gotchiEntity.right = svgsValue[2];
        gotchiEntity.back = svgsValue[3];
    }

    gotchiEntity.save();
}

export function getOrCreateAavegotchi(gotchi: BigInt): Aavegotchi {
    let gotchiEntity = Aavegotchi.load(gotchi.toString())
    if(gotchiEntity == null) {
        gotchiEntity = new Aavegotchi(gotchi.toString())
    }

    return gotchiEntity as Aavegotchi;
}

export function updateStats(gotchi: BigInt): void {
    let stats = Stats.load("0");
    if(stats == null) {
        stats = new Stats("0");
        stats.gotchiIds = new Array<BigInt>();
    }

    let gotchiIds = stats.gotchiIds;

    for(let i=0; i<gotchiIds.length; i++) {
        let gotchiId = gotchiIds[i];
        if(gotchiId == gotchi) {
            return;
        }
    }

    gotchiIds.push(gotchi);
    stats.gotchiIds = gotchiIds;
    stats.save();
}