const WalletService = require("./WalletService");
const WalletRepository = require("../repositories/WalletRepository");
const sinon = require("sinon");
const {expect} = require("chai");
const Wallet = require("../models/Wallet");
const Session = require("../models/Session");

describe("WalletService", () => {
  let walletService;
  let session = new Session();

  beforeEach(() => {
    walletService = new WalletService(session);
  })

  it("getById", () => {
  });

  it("getByName", async () => {
    sinon.stub(WalletRepository.prototype, "getByName").resolves({id:1});
    expect(walletService).instanceOf(WalletService);
    const wallet = await walletService.getByName("test");
    expect(wallet).instanceOf(Wallet);
    WalletRepository.prototype.getByName.restore();
  });

});

