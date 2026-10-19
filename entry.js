// Archify → herdr entry (verified-source: archify DESIGN.md architecture map)
// Opens the SLFN Project Portfolio status map in the default browser

const { spawn } = require('child_process');
const path = require('path');

module.exports = {
  name: "archify-map",
  version: "0.1.0",
  init(pane) {
    pane.setTitle("archify-map");
    pane.write("Archify architecture-map plugin (verified-source build).\n");
    pane.write("Published to herdr marketplace.\n\n");
    
    const htmlPath = path.join(__dirname, 'slfn-project-portfolio-rendered.html');
    
    // Cross-platform open command
    const openCmd = process.platform === 'darwin' ? 'open' : 'xdg-open';
    const child = spawn(openCmd, [htmlPath], { detached: true, stdio: 'ignore' });
    child.unref();
    
    pane.write(`Opening project status map: ${htmlPath}\n`);
    pane.write("Interactive diagram with project progress, priorities, and dependencies.\n");
  }
};