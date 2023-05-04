import { StarFilled } from '@ant-design/icons';
import { Layout, Typography, Menu } from 'antd';
import { KEYWORDS } from '../../data/keywords';

const { Title } = Typography;
const { Sider } = Layout;

export default function Keywords({ onClick }) {
  const items = KEYWORDS.map(({ name }, index) => ({
    key: String(index + 1),
    icon: <span />,
    label: name,
  }));

  const addedItems = [
    // {
    //   key: 'select',
    //   icon: <StarFilled />,
    //   label: '선택한 글',
    // },
    ...items,
  ];

  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          height: 32,
          margin: 16,
        }}
      >
        <Title level={1} style={{ color: '#fff', fontSize: '24px' }}>
          News
        </Title>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={addedItems}
        onClick={onClick}
      />
    </Sider>
  );
}
