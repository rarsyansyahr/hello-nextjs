import Head from 'next/head'
import styles from '../styles/Member.module.css'
import { Button, Modal, Input } from 'antd';
import { useState } from 'react';
import MemberTable from '../components/MemberTable';

export default function Member() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const {TextArea} = Input

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Head>
                <title>Member Page</title>
            </Head>
            <main className={styles.comtainer}>
                <div className={styles.header}><h2>Member Page</h2><Button type="primary" onClick={showModal}>Tambah Member</Button></div>
                <div>
                    <MemberTable />
                </div>
            </main>

            <Modal title="Form Member" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Masukan Nama" />
                <br /><br />
                <Input placeholder="Masukan Umur" />
                <br /><br />
                <TextArea placeholder="Masukan Alamat" />
                <br /><br />
                <Input placeholder="Masukan Hobi" />
            </Modal>
        </div>
    )
}
