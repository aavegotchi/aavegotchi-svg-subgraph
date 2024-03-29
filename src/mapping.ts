import { BigInt, ethereum } from "@graphprotocol/graph-ts";
import {
    ClaimAavegotchi,
    EquipWearables,
} from "../generated/Contract/Contract";
import { BLOCK_SIDEVIEWS_ACTIVATED } from "./constants";
import { updateSideViews, updateSvg } from "./helper";

export function handleClaimAavegotchi(event: ClaimAavegotchi): void {
    let gotchi = event.block.number.ge(BLOCK_SIDEVIEWS_ACTIVATED)
        ? updateSideViews(event.params._tokenId)
        : updateSvg(event.params._tokenId);
    if (gotchi != null) {
        gotchi.save();
    }
}

export function handleEquipWearables(event: EquipWearables): void {
    let gotchi = event.block.number.ge(BLOCK_SIDEVIEWS_ACTIVATED)
        ? updateSideViews(event.params._tokenId)
        : updateSvg(event.params._tokenId);
    if (gotchi != null) {
        gotchi.save();
    }
}

export function handleBlock(block: ethereum.Block): void {
    if (block.number == BLOCK_SIDEVIEWS_ACTIVATED) {
        for (let i = 0; i <= 2500; i++) {
            let gotchi = updateSideViews(BigInt.fromI32(i));
            if (gotchi != null) {
                gotchi.save();
            }
        }
    } else if (
        block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(1))
    ) {
        for (let i = 2500; i <= 5000; i++) {
            let gotchi = updateSideViews(BigInt.fromI32(i));
            if (gotchi != null) {
                gotchi.save();
            }
        }
    } else if (
        block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(2))
    ) {
        for (let i = 5000; i <= 7500; i++) {
            let gotchi = updateSideViews(BigInt.fromI32(i));
            if (gotchi != null) {
                gotchi.save();
            }
        }
    } else if (
        block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(3))
    ) {
        for (let i = 7500; i <= 10000; i++) {
            let gotchi = updateSideViews(BigInt.fromI32(i));
            if (gotchi != null) {
                gotchi.save();
            }
        }
    } else if (
        block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(4))
    ) {
        for (let i = 10000; i <= 12500; i++) {
            let gotchi = updateSideViews(BigInt.fromI32(i));
            if (gotchi != null) {
                gotchi.save();
            }
        }
    } else if (
        block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(5))
    ) {
        for (let i = 12500; i <= 15000; i++) {
            let gotchi = updateSideViews(BigInt.fromI32(i));
            if (gotchi != null) {
                gotchi.save();
            }
        }
    } else if (
        block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(6))
    ) {
        for (let i = 15000; i <= 17500; i++) {
            let gotchi = updateSideViews(BigInt.fromI32(i));
            if (gotchi != null) {
                gotchi.save();
            }
        }
    } else if (
        block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(7))
    ) {
        for (let i = 17500; i <= 20000; i++) {
            let gotchi = updateSideViews(BigInt.fromI32(i));
            if (gotchi != null) {
                gotchi.save();
            }
        }
    } else if (
        block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(8))
    ) {
        for (let i = 20000; i <= 22500; i++) {
            let gotchi = updateSideViews(BigInt.fromI32(i));
            if (gotchi != null) {
                gotchi.save();
            }
        }
    } else if (
        block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(9))
    ) {
        for (let i = 22500; i <= 25000; i++) {
            let gotchi = updateSideViews(BigInt.fromI32(i));
            if (gotchi != null) {
                gotchi.save();
            }
        }
    }
}
