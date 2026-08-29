#!/usr/bin/env bash
# Compiles CV.tex and Resume.tex into cv.pdf / resume.pdf in this folder,
# which is what index.html links to (CV/cv.pdf, CV/resume.pdf).
set -euo pipefail

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$SRC_DIR"
for name in CV Resume; do
  pdflatex -interaction=nonstopmode -halt-on-error "$name.tex" >/dev/null
  rm -f "$name.aux" "$name.log" "$name.out"
done

mv CV.pdf cv.pdf
mv Resume.pdf resume.pdf
echo "Built $SRC_DIR/cv.pdf and $SRC_DIR/resume.pdf"
