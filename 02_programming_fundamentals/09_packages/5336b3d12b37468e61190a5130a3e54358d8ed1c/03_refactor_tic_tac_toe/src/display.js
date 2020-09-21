const renderCell = function (cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
};

const renderRow = function (letter, state) {
  const cells = state[letter];

  const row = cells.map(renderCell).join(" | ");

  return `${letter} ${row}`;
};

const renderBoard = function (state) {
  const letters = Object.keys(state);

  const rows = letters.map((letter) => renderRow(letter, state)).join("\n");

  const header = "  1   2   3";

  return `${header}\n${rows}`;
};

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null),
};

module.export = { renderCell, renderRow, renderBoard, state };