import { Table, Tag, Space, Button } from 'antd'

export default function MemberTable() {
    const columns = [
        {
            title: 'Nama',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Umur',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Alamat',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Hobi',
            key: 'hobies',
            dataIndex: 'hobies',
            render: hobies => (
                <>
                    {hobies.map(hobby => {
                        let color = hobby.length > 5 ? 'blue' : 'purple'

                        return (
                            <Tag color={color} key={hobby}>
                                {hobby.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Aksi',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" danger>Hapus</Button>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Rizki Nur',
            age: 17,
            address: 'Bakung, Linggasari',
            hobies: ['Coding', 'Traveling'],
        },
        {
            key: '2',
            name: 'Nurkho Vauq',
            age: 20,
            address: 'Kr. Cegak, Sumbang',
            hobies: ['Rebahan'],
        },
        {
            key: '3',
            name: 'Arief Arsy',
            age: 16,
            address: 'Bojanegara, Padamara',
            hobies: ['Mager', 'Ditraktir'],
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
