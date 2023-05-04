import { Layout, theme, Typography } from 'antd';

const { Title } = Typography;
const { Header } = Layout;

export default function HeaderLine({ text }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Title level={2} style={{ marginLeft: '24px', marginBottom: 0 }}>
        {text}
      </Title>
    </Header>
  );
}
