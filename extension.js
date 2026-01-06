const vscode = require('vscode');

// Matches typical AMDGPU asm labels:
//   label_Foo:
//   .Ltmp0:
// We intentionally only treat line-leading labels as fold anchors.
const LABEL_RE = /^\s*(\.[A-Za-z_][A-Za-z0-9_.]*|[A-Za-z_][A-Za-z0-9_]*)\s*:\s*(?:[;\/]{2}.*)?$/;

/**
 * @param {vscode.TextDocument} document
 * @returns {vscode.FoldingRange[]}
 */
function provideFoldingRanges(document) {
  const lines = document.lineCount;
  /** @type {number[]} */
  const labelLines = [];

  for (let i = 0; i < lines; i++) {
    const text = document.lineAt(i).text;
    if (LABEL_RE.test(text)) {
      labelLines.push(i);
    }
  }

  /** @type {vscode.FoldingRange[]} */
  const ranges = [];
  for (let idx = 0; idx < labelLines.length; idx++) {
    const start = labelLines[idx];
    const next = (idx + 1 < labelLines.length) ? labelLines[idx + 1] : lines;
    const end = next - 1;
    // Only create a folding range if there is something to fold.
    if (end > start) {
      ranges.push(new vscode.FoldingRange(start, end, vscode.FoldingRangeKind.Region));
    }
  }

  return ranges;
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const provider = {
    provideFoldingRanges(document, _context, _token) {
      return provideFoldingRanges(document);
    }
  };

  context.subscriptions.push(
    vscode.languages.registerFoldingRangeProvider(
      { language: 'amdgcn-asm' },
      provider
    )
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};

