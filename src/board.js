import { cloneTemplateContent, delay } from 'src/utils';

export class Board {
  constructor({ template, slotTemplate }) {
    this.element = cloneTemplateContent(template);
    this.slotTemplate = slotTemplate;
    this.selectedCards = [];
    this.numberOfCards = 0;
    this.waitUntilAllCardsAreMatchedPromise = new Promise(resolve => this.onAllCardsRemoved = resolve);
  }

  async waitUntilAllCardsAreMatched() {
    return this.waitUntilAllCardsAreMatchedPromise;
  }

  addCard(card) {
    const slotElement = cloneTemplateContent(this.slotTemplate);
    slotElement.appendChild(card.element);
    this.element.appendChild(slotElement);
    this.numberOfCards++;
  }

  async onCardSelectionAttempt(card) {
    if (!this.canSelectCard(card)) return;
    this.selectCard(card);

    if (!this.areTwoCardsSelected()) return;
    await delay(2_000);
    this.processSelectedCards();
  }

  canSelectCard(card) {
    return !this.areTwoCardsSelected() && !this.isCardSelected(card);
  }

  isCardSelected(card) {
    return this.selectedCards.includes(card);
  }

  areTwoCardsSelected() {
    return this.selectedCards.length === 2;
  }

  areAllCardsRemoved() {
    return this.numberOfCards === 0;
  }

  selectCard(card) {
    this.selectedCards.push(card);
    card.putFaceUp();
  }

  async processSelectedCards() {
    const [firstSelectedCard, secondSelectedCard] = this.selectedCards;
    if (firstSelectedCard.doesMatch(secondSelectedCard)) {
      await this.removeSelectedCards();
      if (this.areAllCardsRemoved()) { this.onAllCardsRemoved(); }
    } else {
      this.deselectCards();
    }
  }

  deselectCards() {
    this.selectedCards.forEach(card => card.putFaceDown());
    this.selectedCards.splice(0);
  }

  async removeSelectedCards() {
    await Promise.allSettled(this.selectedCards.map(card => card.remove()));
    this.selectedCards.splice(0);
    this.numberOfCards -= 2;
  }
}
