import { Layout, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import axios from 'axios';
import Keywords from './components/Keywords';
import HeaderLine from './components/HeaderLine';
import NewsItem from './components/NewsItem';
import { KEYWORDS } from './data/keywords.js';

const { VITE_API_URL } = import.meta.env;
const { Content, Footer } = Layout;

console.log(import.meta.env.MODE, VITE_API_URL);

const App = () => {
  const [firstKeyword] = KEYWORDS;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [news, setNews] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(firstKeyword.name);

  useEffect(() => {
    getScrapData(firstKeyword.name);
  }, []);

  const getScrapData = async (keyword) => {
    try {
      const { status, data } = await axios.get(
        `${VITE_API_URL}/v1/getListFromWord?word=${encodeURIComponent(keyword)}`
      );
      if (status === 200) {
        setNews(data);
      } else {
        alert('조회에 실패했습니다.');
      }
    } catch (e) {
      console.error(e.message);
      alert('조회를 할 수 없습니다.');
    }
  };

  const handleClickKeyword = ({ item, key, keyPath, domEvent }) => {
    const selectedKeyword = KEYWORDS[Number(key) - 1].name;
    setSearchKeyword(selectedKeyword);
    getScrapData(selectedKeyword);
  };

  return (
    <Layout hasSider>
      <Keywords onClick={handleClickKeyword} />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
          minHeight: '100vh',
        }}
      >
        <HeaderLine text={searchKeyword} />
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
              background: colorBgContainer,
            }}
          >
            <List
              itemLayout="horizontal"
              dataSource={news}
              renderItem={(item) => (
                <NewsItem
                  loading={item.loading}
                  title={item.TITLE}
                  description={item.DESCRIPTION}
                  link={item.LINK}
                />
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
