#!/bin/bash

for lang in {"ar","de","fr","nl","ru","sv","zh-cn"}; do 
	cp -R src/pages/alchemistry/ src/pages/$lang/
	cp -R src/pages/extortion/ src/pages/$lang/
	cp -R src/pages/manufactur-inc/ src/pages/$lang/
	cp -R src/pages/*.astro src/pages/$lang/
done