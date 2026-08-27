const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const basePath = "/express-brew";

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
      continue;
    }

    // Process files that can contain asset URLs
    if (!/\.(html|js|css|json|map)$/i.test(entry.name)) {
      continue;
    }

    let content = fs.readFileSync(fullPath, "utf8");
    const original = content;

    // Convert root-relative public asset paths
    content = content.replace(/(["'(=])\/images\//g, `$1${basePath}/images/`);
    content = content.replace(/(["'(=])\/videos\//g, `$1${basePath}/videos/`);

    if (content !== original) {
      fs.writeFileSync(fullPath, content, "utf8");
      console.log(`Fixed: ${path.relative(buildDir, fullPath)}`);
    }
  }
}

if (!fs.existsSync(buildDir)) {
  console.error("Build directory not found:", buildDir);
  process.exit(1);
}

processDirectory(buildDir);

console.log("GitHub Pages asset paths fixed.");