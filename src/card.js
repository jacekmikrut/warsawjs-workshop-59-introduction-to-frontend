import { cloneTemplateContent, waitForEvent } from 'src/utils';

export class Card {
  constructor({ color, labelColor, onSelectionAttempt, template }) {
    this.color = color;
    this.onClick = () => onSelectionAttempt(this);
    this.element = cloneTemplateContent(template);
    this.element.textContent = this.color;
    this.element.style.setProperty('--color', color);
    this.element.style.setProperty('--label-color', labelColor);
    this.element.addEventListener('click', this.onClick);
    this.putFaceDown();
  }

  doesMatch(anotherCard) {
    return this.color === anotherCard.color;
  }

  putFaceDown() {
    this.element.classList.add('face-down');
  }

  putFaceUp() {
    this.element.classList.remove('face-down');
  }

  async remove() {
    this.element.classList.add('removing');
    await waitForEvent(this.element, 'transitionend');
    this.element.removeEventListener('click', this.onClick);
    this.element.remove();
  }
}
