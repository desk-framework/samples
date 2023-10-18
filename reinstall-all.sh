find * -type d -maxdepth 0 -exec sh -c "cd {}; pwd; rm -r node_modules; npm update && npm install" \;
