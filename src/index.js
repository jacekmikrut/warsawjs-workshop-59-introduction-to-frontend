import { cloneTemplateContent, findElement, sample, shuffle, waitForEvent } from 'src/utils';
import { Card } from 'src/card';
import { Board } from 'src/board';
import { colors } from 'src/data';
import 'src/index.scss';

const NUMBER_OF_PAIRS = 18;

const       cardTemplate = findElement(document, '#card-template');
const      boardTemplate = findElement(document, '#board-template');
const       slotTemplate = findElement(document, '#slot-template');
const  playAgainTemplate = findElement(document, '#play-again-template');

function prepareCards() {
  const sampleColors = sample(colors, NUMBER_OF_PAIRS);
  return shuffle([...sampleColors, ...sampleColors]);
}

async function play() {
  const board = new Board({ template: boardTemplate, slotTemplate });
  prepareCards().forEach(({ color, labelColor }) => {
    board.addCard(new Card({ color, labelColor, onSelectionAttempt: board.onCardSelectionAttempt.bind(board), template: cardTemplate }));
  });
  document.body.prepend(board.element);
  await board.waitUntilAllCardsAreMatched();
  board.element.remove();
}

async function waitToPlayAgain() {
  const playAgainElement = cloneTemplateContent(playAgainTemplate);
  const playAgainButtonElement = findElement(playAgainElement, '.play-again-button');
  document.body.prepend(playAgainElement);
  await waitForEvent(playAgainButtonElement, 'click');
  playAgainElement.remove();
}

async function run() {
  while (true) {
    await play();
    await waitToPlayAgain();
  }
}

run();
