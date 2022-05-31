import { BigInt, ethereum, log, store } from "@graphprotocol/graph-ts"
import {
  Contract,
  ClaimAavegotchi,
  LockAavegotchi,
  SetAavegotchiName,
  SetBatchId,
  SpendSkillpoints,
  UnLockAavegotchi,
  AddedAavegotchiBatch,
  AddedItemsBatch,
  WithdrawnBatch,
  WithdrawnItems,
  DecreaseStake,
  ExperienceTransfer,
  IncreaseStake,
  AddCollateralType,
  AddItemType,
  AddWearableSet,
  CreateHaunt,
  DaoTransferred,
  DaoTreasuryTransferred,
  GameManagerTransferred,
  GrantExperience,
  ItemTypeMaxQuantity,
  UpdateCollateralModifiers,
  UpdateWearableSet,
  ChangedListingFee,
  ERC1155ExecutedListing,
  ERC1155ListingAdd,
  ERC1155ListingCancelled,
  ERC721ExecutedListing,
  ERC721ListingAdd,
  EquipWearables,
  TransferToParent,
  UseConsumables,
  MetaTransactionExecuted,
  BuyPortals,
  Xingyun,
  PurchaseItemsWithGhst,
  PurchaseItemsWithVouchers,
  PurchaseTransferItemsWithGhst,
  OpenPortals,
  PortalOpened,
  VrfRandomNumber,
  MigrateVouchers,
  AavegotchiInteract,
  ERC1155ListingCancelled1,
  ERC1155ListingRemoved,
  UpdateERC1155Listing,
  ERC721ListingCancelled,
  ERC721ListingRemoved,
  StoreSvg,
  UpdateSvg,
  DiamondCut,
  OwnershipTransferred,
  ApprovalForAll,
  TransferBatch,
  TransferFromParent,
  TransferSingle,
  TransferToParent1,
  URI,
  Approval,
  ApprovalForAll1,
  Transfer,
  ItemModifiersSet,
  WearableSlotPositionsSet,
  MintPortals
} from "../generated/Contract/Contract"
import { BLOCK_SIDEVIEWS_ACTIVATED } from "./constants";
import { fetchPortalSvgs, getOrCreateAavegotchi, getOrCreatePortal, updateSideViews, updateSvg } from "./helper"

export function handleClaimAavegotchi(event: ClaimAavegotchi): void {
  let gotchi = event.block.number.ge(BLOCK_SIDEVIEWS_ACTIVATED) ?  updateSideViews(event.params._tokenId) : updateSvg(event.params._tokenId);
  if(gotchi != null) {
    gotchi.save();
  }
}

export function handleEquipWearables(event: EquipWearables): void {
  let gotchi = event.block.number.ge(BLOCK_SIDEVIEWS_ACTIVATED) ?  updateSideViews(event.params._tokenId) : updateSvg(event.params._tokenId);
  if(gotchi != null) {
    gotchi.save();
  }
}

export function handleAavegotchiInteract(event: AavegotchiInteract): void {
  let block = event.block;
  if(block.number == BigInt.fromI32(28971521)) {
    for(let i=0; i<=2500; i++) {
      let gotchi = updateSideViews(BigInt.fromI32(i));
      if(gotchi != null) {
        gotchi.save();
      }
    } 
  } else if(block.number == BigInt.fromI32(28971089)) {
    for(let i=2500; i<=5000; i++) {
      let gotchi = updateSideViews(BigInt.fromI32(i));
      if(gotchi != null) {
        gotchi.save();
      }
    } 
  } else if(block.number == BigInt.fromI32(28970717)) {
    for(let i=5000; i<=7500; i++) {
      let gotchi = updateSideViews(BigInt.fromI32(i));
      if(gotchi != null) {
        gotchi.save();
      }
    } 
  } else if(block.number == BigInt.fromI32(28951409)) {
    for(let i=7500; i<=10000; i++) {
      let gotchi = updateSideViews(BigInt.fromI32(i));
      if(gotchi != null) {
        gotchi.save();
      }
    } 
  } else if(block.number == BigInt.fromI32(28950973)) {
    for(let i=10000; i<=12500; i++) {
      let gotchi = updateSideViews(BigInt.fromI32(i));
      if(gotchi != null) {
        gotchi.save();
      }
    } 
  } else if(block.number == BigInt.fromI32(28950534)) {
    for(let i=12500; i<=15000; i++) {
      let gotchi = updateSideViews(BigInt.fromI32(i));
      if(gotchi != null) {
        gotchi.save();
      }
    } 
  } else if(block.number == BigInt.fromI32(28931122)) {
    for(let i=15000; i<=17500; i++) {
      let gotchi = updateSideViews(BigInt.fromI32(i));
      if(gotchi != null) {
        gotchi.save();
      }
    } 
  } else if(block.number == BigInt.fromI32(28930314)) {
    for(let i=17500; i<=20000; i++) {
      let gotchi = updateSideViews(BigInt.fromI32(i));
      if(gotchi != null) {
        gotchi.save();
      }
    } 
  } else if(block.number == BigInt.fromI32(28910395)) {
    for(let i=20000; i<=22500; i++) {
      let gotchi = updateSideViews(BigInt.fromI32(i));
      if(gotchi != null) {
        gotchi.save();
      }
    } 
  } else if(block.number == BigInt.fromI32(28909545)) {
    for(let i=22500; i<=25000; i++) {
      let gotchi = updateSideViews(BigInt.fromI32(i));
      if(gotchi != null) {
        gotchi.save();
      }
    } 
  }
}

export function handlePortalOpened(event: PortalOpened): void {
  let id = event.params.tokenId;
  let entity = getOrCreatePortal(event.params.tokenId);
  let svgs = fetchPortalSvgs(id, event);
  entity.svgs = svgs;
  entity.save();
}

export function handleOpenPortals(event: OpenPortals): void {
  let ids = event.params._tokenIds;
  for(let i=0; i<ids.length; i++) {
    let id = ids[i];
    let entity = getOrCreatePortal(id);
    let svgs = fetchPortalSvgs(id, event);
    entity.svgs = svgs;
    entity.save();
  }
}
