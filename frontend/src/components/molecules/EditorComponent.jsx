import { Editor } from "@monaco-editor/react"

function EditorComponent() {
    
  return (
   <Editor
   height="80vh" 
   width="100%"
   theme="vs-dark"
   defaultValue="Welcome to the playground"
   options={{
    fontFamily:'monospace',
    fontSize:18
   }}

   />
  )
}

export default EditorComponent
