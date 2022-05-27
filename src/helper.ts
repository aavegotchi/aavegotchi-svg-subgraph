import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { Contract } from "../generated/Contract/Contract";
import { Aavegotchi, Portal } from "../generated/schema";

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

export function getOrCreatePortal(portalId: BigInt): Portal {
    let id = portalId.toString();
    let entity = Portal.load(id);
    if(!entity) {
        entity = new Portal(id);
        entity.svgs = [];
    }
    return entity;
}

export function fetchPortalSvgs(id: BigInt, event:ethereum.Event): Array<string> {
    let contract = Contract.bind(event.address);
    let svgsData = contract.try_portalAavegotchisSvg(id);
    if(svgsData.reverted) {
        return [];
    }

    let svgs = svgsData.value;
    return svgs;
}
