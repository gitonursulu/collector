// app/components/Sidenav.js
import { Pane, Menu, SideSheet, Position, IconButton, MenuOpenIcon } from 'evergreen-ui';
import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
    <IconButton icon={MenuOpenIcon} onClick={() => setIsShown(true)} style={{margin:10}} />
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
    </>
  );
};

export default Sidebar;
