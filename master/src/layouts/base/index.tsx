import { MicroApp, history } from 'umi'
import { Layout, Menu, Breadcrumb, } from 'antd';
import { useState } from 'react';
import { baseData,baseDataIprops } from '@/utils/side-constant';
import './index.css';
import { MenuProps } from 'rc-menu';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const BasicLayout = () => {
  const [sideValue, setSideValue] = useState<string>('app1')
  const [breadArr, setBreadArr] = useState<string[]>(['app1', 'star', 'earth'])

  const onAppChange = (first: baseDataIprops) => {
    setSideValue(first.name)
    setBreadArr([first.name, first.second[0].name, first.second[0].third[0].name])
    history.push(`/${first.name}`)
  }

  const onSideMenuClick: MenuProps['onSelect'] = (e) => {
    setBreadArr([sideValue, e.keyPath[1], e.keyPath[0]])
    history.push(`/${sideValue}/${e.keyPath[1]}/${e.keyPath[0]}`)
  }
  return (
    <Layout>
      {/* 头部 */}
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {
            baseData.map((first) => (
              <Menu.Item key={`first-${first.name}`} onClick={() => onAppChange(first)} >{first.name}</Menu.Item>
            ))
          }
        </Menu>
      </Header>

      {/* 内容 */}
      <Content>
        <Layout>
          <Sider
            width={200}
            style={{ minHeight: 650 }}
            className="site-layout-background"
          >
            <Menu
              mode="inline"
              style={{ height: '100%', borderRight: 0 }}
              defaultOpenKeys={['star']}
              defaultSelectedKeys={['earth']}
              onSelect={onSideMenuClick}
            >
              {
                baseData.filter(v => v.name === sideValue).map((first) => {
                  return first.second?.map((second) =>  (
                    <SubMenu key={second.name} icon={second.icon} title={second.name} >
                      {
                        second.third?.map((third) => (
                          <Menu.Item key={third.name} >{third.name}</Menu.Item>
                        ))
                      }
                    </SubMenu>
                  ))
                })
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 0' }}>

            <Breadcrumb style={{ margin: '16px 0' }}>
              {
                breadArr.map((item) => <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>)
              }
            </Breadcrumb>

            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
              id="content"
            >
              <MicroApp name={sideValue}/>
            </Content>
          </Layout>
        </Layout>
      </Content>

      {/* 尾部 */}
      <Footer style={{ textAlign: 'center' }}>
        micro-services ©2018 Created by Cishy
      </Footer>
    </Layout>
  );
};

export default BasicLayout;
