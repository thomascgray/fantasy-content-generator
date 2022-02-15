# Utils

## `parseTemplate()` - Parse Template Syntax

Parse template supports strings with different formats of "custom regex".

### 1. Randomly pick placeholder

**Forward-slash separated strings inside a brace** will be parsed down to a single random choice.

#### Example

'Hello {world/globe}!' will parse out to "Hello world!" or "Hello globe!", randomly

### 2. Placeholder of content

**A \$ (dollar) symbol in front of any string inside a brace** will be replaced by that key of `content` that was passed to the function symbol.

#### Example

```js
const template = "Hello {$name}";

const string = parseTemplate(template, {
  name: "Gary",
});

// `string` is equal to 'Hello Gary';
```

### 3. Linked Random Placeholder

**A string, followed by 2 colons, followed by the standard placeholder syntax (shown in example 1) will link the random placeholders**. This allows you to create strings with random template parsing, but maintaining coherent sense.

```js
const template = "The {animal::cat/dog} likes to {animal::meow/bark}";

const string = parseTemplate(template);
```

In the example above, if `cat` is randomly chosen as the first placeholder, then the 2nd placeholder will _always_ be `meow`, as that is the first option in _it's own_ placeholder set. If the first placeholder is `dog`, similarily, `bark` will always be the 2nd placeholder.

This is because these placeholders are linked by the string `animal`
