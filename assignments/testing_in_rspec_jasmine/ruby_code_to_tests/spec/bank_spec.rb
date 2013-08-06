require_relative 'spec_helper'
require_relative '../bank'

describe Bank do
  let(:bank) {Bank.new("Wachovia")}

  describe ".new" do
    it "creates a new Bank object" do
      expect(bank).to_not eq nil
    end
    it "has no accounts" do
      expect(bank.accounts.count).to eq 0
    end
  end

  describe "#name" do
    it "has a name" do
      expect(bank.name).to eq "Wachovia"
    end
  end

  describe "#create_account" do
    it "create adds an account" do
      bank.create_account("Anthony Weiner", 1000)
      expect(bank.accounts["Anthony Weiner"]).to eq 1000
      expect(bank.accounts.count).to eq 1
    end
  end

  describe "#deposit" do
    it "increases the amount of an account by a certain amount" do
      bank.create_account("Anthony Weiner", 1000)
      bank.deposit("Anthony Weiner", 2000)
      expect(bank.accounts["Anthony Weiner"]).to eq 3000
    end
  end

  describe "#withdraw" do
    it "decreases the amount of an account by a certain amount" do
      bank.create_account("Anthony Weiner", 1000)
      bank.withdraw("Anthony Weiner", 500)
      expect(bank.accounts["Anthony Weiner"]).to eq 500
    end
    it "does not decrease the amount of an account by a certain amount if the amount is more than the amount in the account" do
      bank.create_account("Anthony Weiner", 1000)
      bank.withdraw("Anthony Weiner", 2000)
      expect(bank.accounts["Anthony Weiner"]).to eq 1000
    end
    it "does not allow a negative withdrawal" do
      bank.create_account("Anthony Weiner", 1000)
      bank.withdraw("Anthony Weiner", -5000)
      expect(bank.accounts["Anthony Weiner"]).to eq 1000
    end
    it "does not allow withdrawal of nonexistent account" do
      expect(bank.withdraw("Elliot Spitzer", 1000)).to eq nil
      expect(bank.accounts["Elliot Spitzer"]).to eq nil
    end
  end

  describe "#balance" do
    it "returns the balance of an account" do
      bank.create_account("Anthony Weiner", 1000)
      expect(bank.balance("Anthony Weiner")).to eq 1000
    end
  end

end