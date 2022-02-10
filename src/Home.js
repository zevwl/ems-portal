import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  CalendarOutlined,
  TeamOutlined,
  BarsOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Home() {
  const [isSiderCollapsed, setIsSiderCollapsed] = useState(false);

  const toggleSiderCollapsed = () => {
    setIsSiderCollapsed(prev => !prev);
  };

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider collapsible collapsed={isSiderCollapsed} onCollapse={toggleSiderCollapsed}>
        <div className="site-logo" />

        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Shifts
          </Menu.Item>

          <Menu.Item key="2" icon={<ScheduleOutlined />}>
            Schedules
          </Menu.Item>

          <SubMenu key="sub1" icon={<CalendarOutlined />} title="Calendar">
            <Menu.Item key="3">Daily</Menu.Item>
            <Menu.Item key="4">Weekly</Menu.Item>
            <Menu.Item key="5">Monthly</Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Members</Menu.Item>
            <Menu.Item key="7">Dispatchers</Menu.Item>
          </SubMenu>

          <Menu.Item key="8" icon={<BarsOutlined />}>
            Logs
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header className="site-layout-background" style={{padding: 0}} />

        <Content style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 16px'
          }}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Zev</Breadcrumb.Item>
          </Breadcrumb>

          <div className="site-layout-background" style={{
              padding: 24,
              minHeight: 360,
              flexGrow: 1,
            }}>
            Main content
          </div>
        </Content>

        <Footer style={{textAlign: 'center'}}>Developed & Maintained by <a href="https://www.landausoftware.com">Landau Software</a> February '22</Footer>
      </Layout>
    </Layout>
  );
}
