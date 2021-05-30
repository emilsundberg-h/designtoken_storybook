# Design Tokens

In this project you can create design tokens and icons in Figma and import those in this code.

### 1. npm install

### 2. Create a file called figma.config.json.

Set it up like `template.figma.config.json`, but replace it with the correct **FIGMA_APIKEY** and **FIGMA_ID**.

You’ll find the KEY and ID in the Figma document.

If you for some reason want a new Figma Api KEY, go to Menu - Help and account - Personal settings and create a “Personal access tokens”.

If you can’t find the Figma ID in your project, you’ll find it in the URL for the project. It’s the number and lettersers between the file and the project's name. For example the ID from this URL:
https://www.figma.com/file/AAAaaaaAAAAa0a00a0AAA0/Design-tokens?node-id=0%3B7

would be “AAAaaaaAAAAa0a00a0AAA0”.

### Watch a demo

I recorded a video demonstration of the project for my teachers. Watch it with this link. (There are some differences about the styling of the components and name of the files. )

[https://youtu.be/0heAnstBDvc]

### `run npm tokens`

It will provide you with a map for all design tokens.

### `run npm icons`

It will provide you with a map for the svg images. To use icons in the React project `import iconsConvert.js` from src, and then use it like: `<Icon name="SL" size={50} />` The name of the icon is the same as the imported svg file.

#### Convert Design Tokens

The import of the design tokens uses “Style dictionary”. To set up which files you want the design tokens will be converted to, use `config.json.`

#### Naming Design Tokens

Before the design tokens names started with --sl, but I couldn’t find a solution for that so it worked with the android files. If you want to change the name on the tokens, go to the folder `fimga-tokens`.

#### Icons

For the import of the svgs, In the end, I used a dependency called “Figma-Api-Exporter”. This was to spare time. If you will work more with this project I recommend you to build it yourself instead of using the dependency, but be aware of the limit of API calls to Figma

#### Storybook

In the terminal - `run npm storybook` to see all imported design tokens and icons
