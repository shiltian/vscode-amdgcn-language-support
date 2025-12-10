# AMDGCN Assembly Language Support

Syntax highlighting for AMDGCN (AMD GPU) assembly in VS Code.

## Features

- Syntax highlighting for all instruction types (scalar, vector, memory, DS, buffer, image)
- Register highlighting (SGPR, VGPR, AGPR, special registers)
- Assembler directives and AMDHSA kernel descriptors
- Embedded YAML metadata blocks
- Comments (`;`, `//`, `/* */`)

## Supported Extensions

- `.s`, `.asm`

## Installation

**From VSIX:**
1. Download the `.vsix` file
2. In VS Code: Extensions → `...` menu → Install from VSIX

**From Source:**
```bash
git clone https://github.com/shiltian/vscode-amdgcn-language-support
cd vscode-amdgcn-language-support
# Press F5 in VS Code to test
```

**Packaging:**
```bash
npm install -g @vscode/vsce
vsce package
```

## License

Apache-2.0

## References

- [AMD GPU ISA Documentation](https://gpuopen.com/amd-gpu-architecture-programming-documentation/)
- [AMDGPU LLVM Documentation](https://llvm.org/docs/AMDGPUUsage.html)
