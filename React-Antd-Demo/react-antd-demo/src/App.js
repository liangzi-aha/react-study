import React from 'react';
import { Button, Pagination } from 'antd';

function App() {

  function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }
  
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    </div>
  );
}

export default App;
