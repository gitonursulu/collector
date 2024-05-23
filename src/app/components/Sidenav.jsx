// app/components/Sidenav.js
import { Pane, Menu, Button, SideSheet, Position } from 'evergreen-ui';
import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsShown(true)} style={{ margin: '10px' }}>
        Menü
      </Button>
      <SideSheet
        width={200}
        position={Position.LEFT}
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
      >
        <Pane width={200} height="100vh" background="tint2">
          <Menu>
            <Menu.Group>
              <Link href="/receipt-process">
                <Menu.Item onClick={() => setIsShown(false)}>Fiş İşleme</Menu.Item>
              </Link>
            </Menu.Group>
          </Menu>
        </Pane>
      </SideSheet>
    </div>
  );
};

export default Sidebar;
