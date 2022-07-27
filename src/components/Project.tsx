import { useEffect, useState } from 'react'
import { Star } from 'react-feather'
import { Project as IProject, Snippet as ISnippet } from '../projects'
import hljs from 'highlight.js'
import './Project.css'

export default function Project ({ id, project }: { id: string, project: IProject }) {
  const [selectedSnippet, setSelectedSnippet] = useState<string>();
  
  return <div className='project'>
    <h2 id={id}>{project.title} {project.starred && <Star size={28}/>}</h2>
    <p dangerouslySetInnerHTML={{ __html: project.description.split('\n').map(k => k.startsWith('    ') ? k.slice(4) : k).join('\n') }}/>
    {project.snippets?.length && <>
      <div className='snippet-selection'>
        {project.snippets.map((snippet, i) => <button
          key={i}
          onClick={() => setSelectedSnippet(selectedSnippet === snippet.code ? undefined : snippet.code)}
          data-selected={selectedSnippet === snippet.code}
        >{snippet.title}</button>)}
      </div>
      <div className='snippets'>
        {project.snippets.map((snippet, i) => <Snippet key={i} snippet={snippet} selected={selectedSnippet === snippet.code}/>)}
      </div>
    </>}
    {project.image && <img src={'/images/' + project.image} alt={project.title + ' image'} width='100%'/>}
    {project.buttons?.length && <div className='buttons'>
      {project.buttons.map((button, i) => <a key={i} href={button.link} target='_blank' rel='noreferrer'>
        <span>{button.text}</span>
        {button.icon && <button.icon size={16}/>}
      </a>)}
    </div>}
  </div>
}

function Snippet ({ snippet, selected }: { snippet: ISnippet, selected: boolean }) {
  const [code, setCode] = useState<string>()

  useEffect(() => {
    const raw = snippet.code.split('\n').map(k => k.startsWith('        ') ? k.slice(8) : k).join('\n')
    setCode(hljs.highlight(raw, { language: snippet.lang || 'js' }).value)
  }, [snippet.code, snippet.lang])

  return <div className='snippet' data-selected={selected}>
    {snippet.caption && <p dangerouslySetInnerHTML={{ __html: snippet.caption.split('\n').map(k => k.startsWith('        ') ? k.slice(8) : k).join('\n') }}/>}
    {code
      ? <div className='hljs' dangerouslySetInnerHTML={{ __html: code }}/>
      : <p>Loading code highlighter...</p>}
  </div>
}