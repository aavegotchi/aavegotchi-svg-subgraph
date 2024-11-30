import { Address, BigInt, log } from "@graphprotocol/graph-ts";
import {
  Contract,
  EquipWearables,
  Transfer,
} from "../generated/Contract/Contract";
import { AAVEGOTCHI_DIAMOND, BLOCK_SIDEVIEWS_ACTIVATED } from "./constants";
import { getOrCreateAavegotchi, updateSideViews, updateSvg } from "./helper";

export function handleEquipWearables(event: EquipWearables): void {
  let gotchi = event.block.number.ge(BLOCK_SIDEVIEWS_ACTIVATED)
    ? updateSideViews(event.params._tokenId)
    : updateSvg(event.params._tokenId);
  if (gotchi != null) {
    gotchi.save();
  }
}

export function handleTransfer(event: Transfer): void {
  let token = event.params._tokenId;

  // already mapped
  // if (
  //   gotchi.svg != null &&
  //   gotchi.left != null &&
  //   gotchi.right != null &&
  //   gotchi.back != null
  // ) {
  //   log.info("already mapped", [token.toString()]);
  //   return;
  // }

  //minting from bridge, always map
  if (
    event.params._from ==
    Address.fromString("0x0000000000000000000000000000000000000000")
  ) {
    log.info("mapping minted gotchi", [token.toString()]);

    let contract = Contract.bind(Address.fromString(AAVEGOTCHI_DIAMOND));
    let gotchiInfo = contract.try_getAavegotchi(token);
    if (gotchiInfo.reverted) {
      log.info("reverted", [token.toString()]);
      return;
    }

    if (gotchiInfo.value.status == BigInt.fromI32(3)) {
      log.info("mapping gotchi", [token.toString()]);
      let gotchi = updateSvg(event.params._tokenId);

      //event.block.number.ge(BLOCK_SIDEVIEWS_ACTIVATED)
      //  ? updateSideViews(event.params._tokenId)
      // : updateSvg(event.params._tokenId);
      if (gotchi != null) {
        gotchi.save();
      }
    }
  }
}

// export function handleBlock(block: ethereum.Block): void {
//   if (block.number == BLOCK_SIDEVIEWS_ACTIVATED) {
//     for (let i = 0; i <= 2500; i++) {
//       let gotchi = updateSideViews(BigInt.fromI32(i));
//       if (gotchi != null) {
//         gotchi.save();
//       }
//     }
//   } else if (
//     block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(1))
//   ) {
//     for (let i = 2500; i <= 5000; i++) {
//       let gotchi = updateSideViews(BigInt.fromI32(i));
//       if (gotchi != null) {
//         gotchi.save();
//       }
//     }
//   } else if (
//     block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(2))
//   ) {
//     for (let i = 5000; i <= 7500; i++) {
//       let gotchi = updateSideViews(BigInt.fromI32(i));
//       if (gotchi != null) {
//         gotchi.save();
//       }
//     }
//   } else if (
//     block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(3))
//   ) {
//     for (let i = 7500; i <= 10000; i++) {
//       let gotchi = updateSideViews(BigInt.fromI32(i));
//       if (gotchi != null) {
//         gotchi.save();
//       }
//     }
//   } else if (
//     block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(4))
//   ) {
//     for (let i = 10000; i <= 12500; i++) {
//       let gotchi = updateSideViews(BigInt.fromI32(i));
//       if (gotchi != null) {
//         gotchi.save();
//       }
//     }
//   } else if (
//     block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(5))
//   ) {
//     for (let i = 12500; i <= 15000; i++) {
//       let gotchi = updateSideViews(BigInt.fromI32(i));
//       if (gotchi != null) {
//         gotchi.save();
//       }
//     }
//   } else if (
//     block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(6))
//   ) {
//     for (let i = 15000; i <= 17500; i++) {
//       let gotchi = updateSideViews(BigInt.fromI32(i));
//       if (gotchi != null) {
//         gotchi.save();
//       }
//     }
//   } else if (
//     block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(7))
//   ) {
//     for (let i = 17500; i <= 20000; i++) {
//       let gotchi = updateSideViews(BigInt.fromI32(i));
//       if (gotchi != null) {
//         gotchi.save();
//       }
//     }
//   } else if (
//     block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(8))
//   ) {
//     for (let i = 20000; i <= 22500; i++) {
//       let gotchi = updateSideViews(BigInt.fromI32(i));
//       if (gotchi != null) {
//         gotchi.save();
//       }
//     }
//   } else if (
//     block.number == BLOCK_SIDEVIEWS_ACTIVATED.plus(BigInt.fromI32(9))
//   ) {
//     for (let i = 22500; i <= 25000; i++) {
//       let gotchi = updateSideViews(BigInt.fromI32(i));
//       if (gotchi != null) {
//         gotchi.save();
//       }
//     }
//   }
// }
