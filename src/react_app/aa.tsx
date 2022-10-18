import React, {forwardRef, useState} from 'react'
import { withVueRouter } from 'vuereact-combined'
import {Button, Modal} from "antd";

function Aa(){
    const [visible, setVisible] = useState<boolean>(false)
    return <div>
        <div>{`${visible}`}</div>

        fn3213

        <Button onClick={()=> setVisible(true) }>Button</Button>
        <Modal visible={visible} title='title' onCancel={()=> setVisible(false)}>测试</Modal>
    </div>
}
export default withVueRouter(forwardRef(Aa))
