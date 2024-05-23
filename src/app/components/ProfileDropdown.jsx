import { Avatar, Popover, Menu, Position } from 'evergreen-ui';

const ProfileDropdown = () => {
  return (
    <Popover
      position={Position.BOTTOM_RIGHT}
      content={
        <Menu>
          <Menu.Group>
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Settings</Menu.Item>
          </Menu.Group>
          <Menu.Divider />
          <Menu.Group>
            <Menu.Item>Logout</Menu.Item>
          </Menu.Group>
        </Menu>
      }
    >
      <Avatar
        name="User Name"
        size={40}
        style={{ cursor: 'pointer', position: 'absolute', top: 20, right: 20 }}
      />
    </Popover>
  );
};

export default ProfileDropdown;
