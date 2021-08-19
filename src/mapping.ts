import { BigInt } from "@graphprotocol/graph-ts"
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
import { ExampleEntity } from "../generated/schema"

export function handleClaimAavegotchi(event: ClaimAavegotchi): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._tokenId = event.params._tokenId

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.aavegotchiClaimTime(...)
  // - contract.allAavegotchisOfOwner(...)
  // - contract.balanceOf(...)
  // - contract.getAavegotchi(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.name(...)
  // - contract.ownerOf(...)
  // - contract.symbol(...)
  // - contract.tokenByIndex(...)
  // - contract.tokenIdsOfOwner(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
  // - contract.aavegotchiLevel(...)
  // - contract.aavegotchiNameAvailable(...)
  // - contract.availableSkillPoints(...)
  // - contract.baseRarityScore(...)
  // - contract.currentHaunt(...)
  // - contract.getNumericTraits(...)
  // - contract.ghstAddress(...)
  // - contract.kinship(...)
  // - contract.modifiedTraitsAndRarityScore(...)
  // - contract.portalAavegotchiTraits(...)
  // - contract.rarityMultiplier(...)
  // - contract.revenueShares(...)
  // - contract.xpUntilNextLevel(...)
  // - contract.childChainManager(...)
  // - contract.collateralBalance(...)
  // - contract.collateralInfo(...)
  // - contract.collaterals(...)
  // - contract.getCollateralInfo(...)
  // - contract.createHaunt(...)
  // - contract.gameManager(...)
  // - contract.getERC1155Category(...)
  // - contract.getERC1155Listing(...)
  // - contract.getERC1155ListingFromToken(...)
  // - contract.getERC1155Listings(...)
  // - contract.getListingFeeInWei(...)
  // - contract.getOwnerERC1155Listings(...)
  // - contract.getAavegotchiListing(...)
  // - contract.getAavegotchiListings(...)
  // - contract.getERC721Category(...)
  // - contract.getERC721Listing(...)
  // - contract.getERC721ListingFromToken(...)
  // - contract.getERC721Listings(...)
  // - contract.getOwnerAavegotchiListings(...)
  // - contract.getOwnerERC721Listings(...)
  // - contract.balanceOf(...)
  // - contract.balanceOfBatch(...)
  // - contract.balanceOfToken(...)
  // - contract.equippedWearables(...)
  // - contract.findWearableSets(...)
  // - contract.getItemType(...)
  // - contract.getItemTypes(...)
  // - contract.getWearableSet(...)
  // - contract.getWearableSets(...)
  // - contract.itemBalances(...)
  // - contract.itemBalancesOfToken(...)
  // - contract.itemBalancesOfTokenWithTypes(...)
  // - contract.itemBalancesWithTypes(...)
  // - contract.totalWearableSets(...)
  // - contract.uri(...)
  // - contract.onERC1155BatchReceived(...)
  // - contract.onERC1155Received(...)
  // - contract.getNonce(...)
  // - contract.getAavegotchiSvg(...)
  // - contract.getItemSvg(...)
  // - contract.getSvg(...)
  // - contract.getSvgs(...)
  // - contract.portalAavegotchisSvg(...)
  // - contract.keyHash(...)
  // - contract.link(...)
  // - contract.linkBalance(...)
  // - contract.vrfCoordinator(...)
}

export function handleLockAavegotchi(event: LockAavegotchi): void {}

export function handleSetAavegotchiName(event: SetAavegotchiName): void {}

export function handleSetBatchId(event: SetBatchId): void {}

export function handleSpendSkillpoints(event: SpendSkillpoints): void {}

export function handleUnLockAavegotchi(event: UnLockAavegotchi): void {}

export function handleAddedAavegotchiBatch(event: AddedAavegotchiBatch): void {}

export function handleAddedItemsBatch(event: AddedItemsBatch): void {}

export function handleWithdrawnBatch(event: WithdrawnBatch): void {}

export function handleWithdrawnItems(event: WithdrawnItems): void {}

export function handleDecreaseStake(event: DecreaseStake): void {}

export function handleExperienceTransfer(event: ExperienceTransfer): void {}

export function handleIncreaseStake(event: IncreaseStake): void {}

export function handleAddCollateralType(event: AddCollateralType): void {}

export function handleAddItemType(event: AddItemType): void {}

export function handleAddWearableSet(event: AddWearableSet): void {}

export function handleCreateHaunt(event: CreateHaunt): void {}

export function handleDaoTransferred(event: DaoTransferred): void {}

export function handleDaoTreasuryTransferred(
  event: DaoTreasuryTransferred
): void {}

export function handleGameManagerTransferred(
  event: GameManagerTransferred
): void {}

export function handleGrantExperience(event: GrantExperience): void {}

export function handleItemTypeMaxQuantity(event: ItemTypeMaxQuantity): void {}

export function handleUpdateCollateralModifiers(
  event: UpdateCollateralModifiers
): void {}

export function handleUpdateWearableSet(event: UpdateWearableSet): void {}

export function handleChangedListingFee(event: ChangedListingFee): void {}

export function handleERC1155ExecutedListing(
  event: ERC1155ExecutedListing
): void {}

export function handleERC1155ListingAdd(event: ERC1155ListingAdd): void {}

export function handleERC1155ListingCancelled(
  event: ERC1155ListingCancelled
): void {}

export function handleERC721ExecutedListing(
  event: ERC721ExecutedListing
): void {}

export function handleERC721ListingAdd(event: ERC721ListingAdd): void {}

export function handleEquipWearables(event: EquipWearables): void {}

export function handleTransferToParent(event: TransferToParent): void {}

export function handleUseConsumables(event: UseConsumables): void {}

export function handleMetaTransactionExecuted(
  event: MetaTransactionExecuted
): void {}

export function handleBuyPortals(event: BuyPortals): void {}

export function handleXingyun(event: Xingyun): void {}

export function handlePurchaseItemsWithGhst(
  event: PurchaseItemsWithGhst
): void {}

export function handlePurchaseItemsWithVouchers(
  event: PurchaseItemsWithVouchers
): void {}

export function handlePurchaseTransferItemsWithGhst(
  event: PurchaseTransferItemsWithGhst
): void {}

export function handleOpenPortals(event: OpenPortals): void {}

export function handlePortalOpened(event: PortalOpened): void {}

export function handleVrfRandomNumber(event: VrfRandomNumber): void {}

export function handleMigrateVouchers(event: MigrateVouchers): void {}

export function handleAavegotchiInteract(event: AavegotchiInteract): void {}

export function handleERC1155ListingCancelled1(
  event: ERC1155ListingCancelled1
): void {}

export function handleERC1155ListingRemoved(
  event: ERC1155ListingRemoved
): void {}

export function handleUpdateERC1155Listing(event: UpdateERC1155Listing): void {}

export function handleERC721ListingCancelled(
  event: ERC721ListingCancelled
): void {}

export function handleERC721ListingRemoved(event: ERC721ListingRemoved): void {}

export function handleStoreSvg(event: StoreSvg): void {}

export function handleUpdateSvg(event: UpdateSvg): void {}

export function handleDiamondCut(event: DiamondCut): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferFromParent(event: TransferFromParent): void {}

export function handleTransferSingle(event: TransferSingle): void {}

export function handleTransferToParent1(event: TransferToParent1): void {}

export function handleURI(event: URI): void {}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll1(event: ApprovalForAll1): void {}

export function handleTransfer(event: Transfer): void {}

export function handleItemModifiersSet(event: ItemModifiersSet): void {}

export function handleWearableSlotPositionsSet(
  event: WearableSlotPositionsSet
): void {}

export function handleMintPortals(event: MintPortals): void {}
