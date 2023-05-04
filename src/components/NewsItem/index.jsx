import { Button, Image, List, Skeleton, Typography } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

const { Link } = Typography;

export default function NewsItem({ loading, title, description, link }) {
  return (
    <List.Item
    // extra={
    //   <Image
    //     preview={false}
    //     width={132}
    //     height={90}
    //     alt="logo"
    //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
    //   />
    // }
    >
      <Skeleton avatar title={false} loading={loading} active>
        {/*<button>*/}
        {/*  <StarFilled style={{ color: 'yellowgreen', fontSize: '24px' }} />*/}
        {/*  <StarOutlined style={{ color: 'yellowgreen', fontSize: '24px' }} />*/}
        {/*</button>*/}
        {/*<Button*/}
        {/*  shape="circle"*/}
        {/*  icon={<StarOutlined style={{ color: '#2e44a2' }} />}*/}
        {/*/>*/}
        <List.Item.Meta
          style={{ paddingLeft: '10px', paddingRight: '10px' }}
          // avatar={<Avatar shape="square" size={132} src="https://randomuser.me/api/portraits/men/29.jpg" />}
          title={
            <>
              {/*<Text style={{ fontSize: '13px', color: '#505050' }}>*/}
              {/*  경향신문*/}
              {/*</Text>*/}
              {/*<Text style={{ fontSize: '13px', color: '#eff2f4' }}> | </Text>*/}
              {/*<Text style={{ fontSize: '13px', color: '#808080' }}>1일 전</Text>*/}
              <Link
                target="_blank"
                href={link}
                style={{
                  display: 'block',
                  fontWeight: 'bold',
                  fontSize: '16px',
                }}
              >
                {title}
              </Link>
            </>
          }
          description={
            <p
              style={{ color: '#424242' }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          }
        />
      </Skeleton>
    </List.Item>
  );
}
