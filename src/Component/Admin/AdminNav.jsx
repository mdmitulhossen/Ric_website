import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import logo from '../../assets/logo4.png'
import { Route, Routes } from 'react-router-dom';


const AdminNav = () => {
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} className='h-screen'>
                    <div className='flex gap-2 justify-center my-3'>
                        <img className='w-10' src={logo} alt="" />
                        <p className={`text-white font-bold text-2xl ${collapsed?"hidden":"block"}`}>RIC-FEC</p>
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: <a href="admin/members">Members</a>,
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: <a href="admin/event">Event</a>,
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content className='mx-6 my-4 p-6 bg bg-gray-300'>
                        <Routes>
                            <Route path='/admin/members' element={<Members/>}/>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default AdminNav;