import LogbookDialog from './LogbookDialog'

export const generated = () => {
  return <LogbookDialog isOpen={false} handleClose={function (): void {
    throw new Error('Function not implemented.')
  } } />
}

export default { title: 'Components/LogbookDialog' }
