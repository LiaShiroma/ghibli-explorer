import fs from "fs";
import path from "path";

const ROOT = "./src";
const OUTPUT = "./CODE_CONTEXT.md";

const IGNORE = ["node_modules", "dist", ".git"];

function walk(dir, files = []) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);

    if (IGNORE.some((i) => fullPath.includes(i))) continue;

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath, files);
    } else if (file.endsWith(".jsx") || file.endsWith(".js")) {
      files.push(fullPath);
    }
  }
  return files;
}

const files = walk(ROOT);

let output = `# Ghibli Explorer — Code Context\n\n`;

for (const file of files) {
  output += `## ${file}\n\n`;
  output += "```jsx\n";
  output += fs.readFileSync(file, "utf-8");
  output += "\n```\n\n";
}

fs.writeFileSync(OUTPUT, output);
console.log(`✅ Context generated: ${OUTPUT}`);
