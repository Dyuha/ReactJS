import { SettingOutlined, MessageOutlined, UserOutlined, TeamOutlined, AudioOutlined, FireOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import cls from "./Content.module.css";
import { RoutesList } from '../Routes/RoutesList';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Profile', '/profile', <UserOutlined />),
  getItem('Messages', '/dialogs', <MessageOutlined />),
  getItem('Users', '/users', <TeamOutlined />),
  getItem('News', '/news', <FireOutlined />),
  getItem('Misuc', '/music', <AudioOutlined />),
  getItem('Settings', '/settings', <SettingOutlined />),
];

const Content = () => {
  const navigate = useNavigate();
  return (
    <div className={cls.wrapper}>
      <div className={cls.menu_wrapper}>
        <Menu onClick={ ({key}) => navigate(key)} 
            theme="light" 
            mode="inline" items={items} 
            className={cls.menu} />
      </div>
      <div className={cls.main}>
        <RoutesList />
      </div>
    </div>
  );
};

export default Content;