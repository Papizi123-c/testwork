import { ShoppingCartOutlined, DeleteFilled } from '@ant-design/icons';
import { FloatButton, Dropdown, Card, Space, Flex, Tooltip, Button, Menu } from 'antd';
import React from 'react';

class Shop extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    renderMenu = () => {
        return (
            <Menu>
              {this.state.items.map((item) => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
              ))}
            </Menu>
          );
    };

    addItem = (title) => {
        let newItem = {
            key: this.state.items.length,
            label: <Button icon={<DeleteFilled />} onClick={() => this.deleteItem(this.state.items.length)}>{title}</Button>,
        };
        let newItems = this.state.items.concat(newItem);
        this.setState({items: newItems});
    };

    deleteItem = (index) => {
        let updateItems = [...this.state.items];
        updateItems.splice(index - 1, 1);
        this.setState({items: updateItems});
    };

    render() {
        return(
            <>
                <Space direction='horizontal' size={16} style={{width: '75%'}}>
                    <Space direction='vertical' size={16}>
                        <Flex justify='space-between'>                   
                            <Card title="Первый продукт" extra={<a href="#">Больше</a>} style={{width: "300px", margin: "20px"}} id="2">
                                <p>Описание продукта</p>
                                <p>Описание продукта</p>
                                <Tooltip title="Добавить в корзину">
                                    <Button icon={<ShoppingCartOutlined/>} onClick={() => this.addItem('Первый продукт')}/>
                                </Tooltip>
                            </Card>
                            <Card title="Второй продукт" extra={<a href="#">Больше</a>} style={{width: "300px", margin: "20px"}}>
                                <p>Описание продукта</p>
                                <p>Описание продукта</p>
                                <Tooltip title="Добавить в корзину">
                                    <Button icon={<ShoppingCartOutlined/>} onClick={() => this.addItem('Второй продукт')}/>
                                </Tooltip>
                            </Card>
                            <Card title="Третий продукт" extra={<a href="#">Больше</a>} style={{width: "300px", margin: "20px"}}>
                                <p>Описание продукта</p>
                                <p>Описание продукта</p>
                                <Tooltip title="Добавить в корзину">
                                    <Button icon={<ShoppingCartOutlined/>} onClick={() => this.addItem('Третий продукт')}/>
                                </Tooltip>
                            </Card>
                        </Flex>
                    </Space>
                    <Dropdown overlay={this.renderMenu()} trigger={['click']} placement='topLeft' arrow={{pointAtCenter: true}}>
                            <FloatButton shape='circle'  badge={{ count: this.state.items.length }} icon={<ShoppingCartOutlined />} style={{right: 25}}/>
                    </Dropdown>
                </Space>
            </>
        );    
    };
}

export default Shop;