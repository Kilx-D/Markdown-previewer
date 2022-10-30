import React from 'react'
import {marked } from 'marked';

import parse from "html-react-parser";
marked.setOptions({
  breaks: true
})



const Markdown = () => {

  const [text, setText] = React.useState(
    `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


![some dude walking](https://media.tenor.com/Q823-830Ri0AAAAS/christian-bale-american-psycho.gif)
    `
  );

  function handleChange(e) {
    
    setText(e.target.value)
    
  }

  


  return (
    <main>
      <textarea 
     value={text}
      id="editor"
       name="editor"
        cols="50" 
        rows="10"
        onChange={handleChange}
        ></textarea>
      
      <article id="preview">
        {parse(marked.parse(text))}
      </article>
    </main>
  )
}

export default Markdown