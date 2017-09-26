# Remove directories

rm -rf source/
rm -rf css
rm -rf scripts
rm -rf fonts
rm -rf images
rm -rf bower_components
rm bower.json

# To do : Change the target repository. Must be pointing to public repo.
git clone -b development git@github.com:cloud23/ucsf-patternlab.git tmp

mkdir source
mkdir source/_patterns
mkdir source/_macros
mkdir source/_twig-components
mkdir css
mkdir scripts
mkdir fonts
mkdir images

# Copy patterns
cp -R tmp/source/_patterns/* source/_patterns
# Copy Macros
cp -R tmp/source/_macros/* source/_macros
# Copy Twig Components
cp -R tmp/source/_twig-components/* source/_twig-components

# Copy Front End assets
cp -R tmp/source/js/* scripts
cp -R tmp/source/css/* css
cp -R tmp/source/fonts/* fonts
cp -R tmp/source/images/* images

# Copy bower.json
cp tmp/bower.json bower.json

# install bower components
bower install

rm -rf tmp