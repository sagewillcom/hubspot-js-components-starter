# JS blocks directory
This directory follows the structure of a HubSpot project:

1. Configurations in the root
2. An `src` folder for all source code
3. A special `components` folder which recognizes modules and partials
4. Any NPM packages necessary to render the components

Everything should work out of the box by uploading the entire directory (not just the `src` folder) to a HubSpot project. Once uploaded, you will find your modules in any CMS theme.

**Very important:** All styling had to be stripped out due to licensing terms. However, all HubSpot functionality is intact, you just need to bring in your own styling or use this code as reference for your own repository. We used Tailwind CSS for this particular build.

## The src directory
In the `src` directory, you will find:

1. Various pre-made components with island and module field usage examples
2. Mocks which mimick responses from the HubSpot platform to render objects in development
3. Styles and utils setup for any JS function you want to bring in

Some components were removed as they were very specific to the original project.

**Please note:** Some things aren't handled very well here, such as importing styles/tailwind.css on each individual component or using SWR to load blog posts. You should find your own resolutions to these issues which likely impact performance and SEO significantly.
