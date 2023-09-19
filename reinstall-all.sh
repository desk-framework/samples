rm -r **/node_modules
find . -type d -mindepth 2 -maxdepth 2 -execdir sh -c "pwd; npm update --include=dev" \;
