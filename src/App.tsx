import { Button } from './components/ui/buttons/Button/Button';
import { Tooltip } from './components/ui/overlays/Tooltip/Tooltip';
import { Typography } from './components/ui/text/Typography/Typography';

function App() {
  return (
    <>
      <Typography size="body-1">heading 1</Typography>
    
      <Button size="small">button</Button>
      <Tooltip text="test">
        <Typography size="body-1">heading 1</Typography>
      </Tooltip>
    </>
  );
}

export default App;
