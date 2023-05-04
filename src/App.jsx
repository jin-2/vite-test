import { Layout, theme } from 'antd';
import React from 'react';
import { List } from 'antd';
import Keywords from './components/Keywords';
import HeaderLine from './components/HeaderLine';
import NewsItem from './components/NewsItem';

const { Content, Footer } = Layout;

const data = [
  {
    WORD: '잡코리아',
    TITLE:
      "<b>잡코리아</b>·알바몬, '2023 브랜드 고객충성도 대상' 2년 연속 수상",
    LINK: 'https://www.ngetnews.com/news/articleView.html?idxno=417804',
    DESCRIPTION:
      "뉴스저널리즘 윤은식 기자 = <b>잡코리아</b>·알바몬 브랜드 고객충성도 대상. 이미지=<b>잡코리아</b> <b>잡코리아</b>는 취업 플랫폼 <b>잡코리아</b>와 아르바이트 채용플랫폼 알바몬이 '2023 브랜드 고객충성도 대상'에서 2년 연속 각 부문... ",
    CNT: 13,
  },
  {
    WORD: '잡코리아',
    TITLE:
      "<b>잡코리아</b>·알바몬, '2023 브랜드 고객충성도 대상' 2년 연속 수상",
    LINK: 'https://www.ngetnews.com/news/articleView.html?idxno=417804',
    DESCRIPTION:
      "뉴스저널리즘 윤은식 기자 = <b>잡코리아</b>·알바몬 브랜드 고객충성도 대상. 이미지=<b>잡코리아</b> <b>잡코리아</b>는 취업 플랫폼 <b>잡코리아</b>와 아르바이트 채용플랫폼 알바몬이 '2023 브랜드 고객충성도 대상'에서 2년 연속 각 부문... ",
    CNT: 13,
  },
  {
    WORD: '잡코리아',
    TITLE:
      "<b>잡코리아</b>·알바몬, '2023 브랜드 고객충성도 대상' 2년 연속 수상",
    LINK: 'https://www.ngetnews.com/news/articleView.html?idxno=417804',
    DESCRIPTION:
      "뉴스저널리즘 윤은식 기자 = <b>잡코리아</b>·알바몬 브랜드 고객충성도 대상. 이미지=<b>잡코리아</b> <b>잡코리아</b>는 취업 플랫폼 <b>잡코리아</b>와 아르바이트 채용플랫폼 알바몬이 '2023 브랜드 고객충성도 대상'에서 2년 연속 각 부문... ",
    CNT: 13,
  },
  {
    WORD: '잡코리아',
    TITLE:
      "<b>잡코리아</b>·알바몬, '2023 브랜드 고객충성도 대상' 2년 연속 수상",
    LINK: 'https://www.ngetnews.com/news/articleView.html?idxno=417804',
    DESCRIPTION:
      "뉴스저널리즘 윤은식 기자 = <b>잡코리아</b>·알바몬 브랜드 고객충성도 대상. 이미지=<b>잡코리아</b> <b>잡코리아</b>는 취업 플랫폼 <b>잡코리아</b>와 아르바이트 채용플랫폼 알바몬이 '2023 브랜드 고객충성도 대상'에서 2년 연속 각 부문... ",
    CNT: 13,
  },
  {
    WORD: '잡코리아',
    TITLE:
      "<b>잡코리아</b>·알바몬, '2023 브랜드 고객충성도 대상' 2년 연속 수상",
    LINK: 'https://www.ngetnews.com/news/articleView.html?idxno=417804',
    DESCRIPTION:
      "뉴스저널리즘 윤은식 기자 = <b>잡코리아</b>·알바몬 브랜드 고객충성도 대상. 이미지=<b>잡코리아</b> <b>잡코리아</b>는 취업 플랫폼 <b>잡코리아</b>와 아르바이트 채용플랫폼 알바몬이 '2023 브랜드 고객충성도 대상'에서 2년 연속 각 부문... ",
    CNT: 13,
  },
];

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = () => {
    console.log('change');
  };

  return (
    <Layout hasSider>
      <Keywords />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
          minHeight: '100vh',
        }}
      >
        <HeaderLine text={'111'} />
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
              dataSource={data}
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
