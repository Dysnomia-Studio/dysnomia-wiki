#!/bin/bash

for lang in {"de","fr","nl","ru","sv"}; do 
	cp -R src/pages/alchemistry/ src/pages/$lang/
	cp -R src/pages/*.astro src/pages/$lang/
done