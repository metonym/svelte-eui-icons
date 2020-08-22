const { cleanDir, generateFromFolder } = require("svg-to-svelte");
const fs = require("fs");

async function build() {
  await cleanDir("lib");

  let moduleNames = [];

  const assets = await generateFromFolder(
    "node_modules/@elastic/eui/src/components/icon/assets",
    "lib"
  );

  const tokens = await generateFromFolder(
    "node_modules/@elastic/eui/src/components/icon/assets/tokens",
    "lib"
  );

  moduleNames = [...assets.moduleNames, ...tokens.moduleNames].sort();

  fs.writeFileSync(
    "lib/index.js",
    moduleNames.map((name) => `export { ${name} } from "./${name}";\n`).join("")
  );

  const index = `# Icon Index\n
> ${moduleNames.length} icons from @elastic/eui.\n
## Usage\n
\`\`\`html
<script>
  import Icon from "svelte-eui-icons/lib/{ModuleName}";
</script>

<Icon />
\`\`\`\n
## List of icons by \`ModuleName\`\n
${moduleNames.map((moduleName) => `- ${moduleName}`).join("\n")}`;

  fs.writeFileSync("ICON_INDEX.md", index);
}

build();
