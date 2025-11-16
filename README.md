# AMDGCN Assembly Language Support

Syntax highlighting support for AMDGCN (AMD GPU) assembly language in Visual Studio Code.

## Features

- **Syntax Highlighting**: Comprehensive syntax highlighting for AMDGCN assembly files
  - Scalar instructions (s_*)
  - Vector instructions (v_*)
  - Flat/Global/Scratch memory instructions
  - DS (Data Share) instructions
  - Buffer and image instructions
  - Registers (scalar, vector, AGPR, special registers)
  - Directives (.section, .globl, .set, etc.)
  - Comments (line and block)
  - Numbers (hex, binary, octal, decimal)
  - Labels and functions

- **Language Features**:
  - Line comments with `;`
  - Block comments with `/* */`
  - Auto-closing pairs for brackets, quotes, and parentheses
  - Code folding with region markers

## Supported File Extensions

- `.s` - Assembly source files
- `.asm` - Assembly files

## Installation

### From VSIX
1. Download the `.vsix` file
2. Open VS Code
3. Go to Extensions (Ctrl+Shift+X)
4. Click on the "..." menu at the top right
5. Select "Install from VSIX..."
6. Choose the downloaded `.vsix` file

### From Source
1. Clone this repository
2. Open the folder in VS Code
3. Press F5 to open a new window with the extension loaded
4. Test the extension by opening AMDGCN assembly files

## Example

The extension provides syntax highlighting for AMDGCN assembly code like:

```asm
.section	.AMDGPU.config,"",@progbits
.text
.globl	fmaak_fmamk
.p2align	2
.type	fmaak_fmamk,@function
fmaak_fmamk:
; %bb.0:
	s_set_vgpr_msb 0x45
	v_fmaak_f32 v0, v1, v2, 0x1
	s_set_vgpr_msb 0x4505
	v_fmaak_f32 v0, v1, v2, 0x1
.Lfunc_end0:
	.size	fmaak_fmamk, .Lfunc_end0-fmaak_fmamk
	.set fmaak_fmamk.num_vgpr, 259
```

## Customization

You can customize the colors of different syntax elements by modifying your VS Code settings. The extension uses standard TextMate scopes:

- `keyword.mnemonic.scalar.amdgcn-asm` - Scalar instructions
- `keyword.mnemonic.vector.amdgcn-asm` - Vector instructions
- `variable.other.register.scalar.amdgcn-asm` - Scalar registers
- `variable.other.register.vector.amdgcn-asm` - Vector registers
- `comment.line.semicolon.amdgcn-asm` - Comments
- And more...

Example customization in `settings.json`:

```json
{
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": "keyword.mnemonic.vector.amdgcn-asm",
        "settings": {
          "foreground": "#569CD6",
          "fontStyle": "bold"
        }
      }
    ]
  }
}
```

## Development

### Prerequisites
- Node.js (v16 or later)
- VS Code (v1.75.0 or later)

### Building
```bash
npm install
```

### Testing
Press F5 in VS Code to open a new window with the extension loaded.

### Packaging
```bash
npm install -g @vscode/vsce
vsce package
```

This will create a `.vsix` file that can be installed in VS Code.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

Apache License 2.0 - See LICENSE file for details

## References

- [AMD GPU ISA Documentation](https://www.amd.com/en/support/technical/developer-resources)
- [AMDGPU LLVM Documentation](https://llvm.org/docs/AMDGPUUsage.html)

