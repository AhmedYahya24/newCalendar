import React, { Fragment, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Calendar ,Modal, Button } from 'antd';
import Form from '../../components/Form';
import './Home.css';

const Home = () => {
    //state
    const [isModalVisible, setIsModalVisible] = useState(false);
    //hook
    const selectState = useSelector(state => state.dayState);
    
    const showModal = useCallback(() => {
        setIsModalVisible(true);
    },[]);
    
    const handleOk = useCallback(() => {
        setIsModalVisible(false);
    }, []);
    
    const handleCancel = useCallback(() => {
        setIsModalVisible(false);
    }, []);
    //functions
    const dateCellRender = () => {
        return (
            <div>
                <Button type="primary" onClick={showModal}>
                    <span>+</span>
                </Button>
            </div>
        )
    }

    return (
        <div>
            <Calendar 
                dateCellRender={dateCellRender}
            />  
            <Modal title="Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form />
                    <div>
                    {selectState.title && selectState.describtion ? (
                    <Fragment>
                        <p>title: {selectState.title}</p>
                        <p>describtion: {selectState.describtion}</p>
                    </Fragment>
                    )
                    :(
                        <div className='empty'>fill data !!!</div>
                    )}
                    </div>
                </Modal>
        </div>
    )
}

export default React.memo(Home, (prevProps, props) => {
    return true;
});