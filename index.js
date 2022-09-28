class FixedCompilerVersion {
  constructor(reporter, config) {
    this.ruleId = "fixed-compiler-version";

    this.reporter = reporter;
    this.config = config;
  }

  SourceUnit(node) {
    const hasPragmaDirectiveDef = node.children.some(
      (curItem) => curItem.type === "PragmaDirective"
    );

    if (!hasPragmaDirectiveDef) {
      this.reporter.error(node, this.ruleId, "Compiler version must be declared ");
    }
  }

  PragmaDirective(node) {
    if (node.name === "solidity" && !node.value.match(/^\d+\.\d+\.\d+$/)) {
      this.reporter.error(node, this.ruleId, `Compiler version ${node.value} must be fixed`);
    }
  }
}

module.exports = [FixedCompilerVersion];
