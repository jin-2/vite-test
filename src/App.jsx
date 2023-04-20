import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Skeleton, Image, Checkbox, Space, Button } from 'antd';
import React from 'react';
import { Typography } from 'antd';
import { Avatar, List } from 'antd';
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone, StarTwoTone, StarFilled, StarOutlined } from '@ant-design/icons';


const { Title, Text, Link } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const items = Array(50).fill(undefined).map((icon, index) => ({
  key: String(index + 1),
  icon: '',
  label: `nav ${index + 1}`,
}));
const addedItems = [
  {
    key: 'select',
    icon: <StarFilled />,
    label: `선택한 글`,
  },
  ...items,
]
const data = [
  {
    title: '임금체불 기업, 잡코리아 알바몬 서비스 이용 못한다',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = () => {
    console.log('change')
  }

  return (
    <Layout hasSider>
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
          <Title level={1} style={{ color: '#fff', fontSize: '24px' }}>News</Title>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={addedItems} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
          minHeight: '100vh'
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Title level={2} style={{ marginLeft: '24px', marginBottom: 0 }}>nav 4</Title>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              justifyContent: 'center',
              width: '800px',
              padding: 24,
              // textAlign: 'center',
              background: colorBgContainer,
            }}
          >
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <>

                <List.Item
                  extra={
                    <Image
                      preview={false}
                      width={132}
                      height={90}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  }
                >
                  <Skeleton avatar title={false} loading={item.loading} active>
                    {/*<button>*/}
                    {/*  <StarFilled style={{ color: 'yellowgreen', fontSize: '24px' }} />*/}
                    {/*  <StarOutlined style={{ color: 'yellowgreen', fontSize: '24px' }} />*/}
                    {/*</button>*/}
                    <Button shape="circle" icon={<StarOutlined style={{ color: 'yellowgreen' }} />} />
                    <List.Item.Meta
                      style={{ paddingLeft: '10px', paddingRight: '10px' }}
                      // avatar={<Avatar shape="square" size={132} src="https://randomuser.me/api/portraits/men/29.jpg" />}
                      title={<>
                        <Text style={{ fontSize: '13px', color: '#505050' }}>경향신문</Text>
                        <Text style={{ fontSize: '13px', color: '#eff2f4' }}> | </Text>
                        <Text style={{ fontSize: '13px', color: '#808080' }}>1일 전</Text>
                        <Link target="_blank" href="https://ant.design" style={{ display: 'block', fontWeight: 'bold', fontSize: '16px' }}>{item.title}</Link>
                      </>}
                      description={<p style={{ color: "#424242" }}><mark>잡코리아</mark>, 구직자 보호 위해 서비스 이용 전면 제한 잡코리아는 취업 플랫폼 잡코리아와 아르바이트 플랫폼 알바몬에서 임금체불 기업의 서비스 이용을 전면 제한했다고 19일 밝혔다.</p>}
                    />
                  </Skeleton>
                </List.Item>
                </>
              )}
            />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          News ©2023 Created by 애자일개발팀
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;