// import { Table, Input, Space, Button } from "antd";
// import type { ColumnsType, TableProps } from "antd/es/table";
// import React, { useEffect, useState } from "react";
// import { AppDispatch, RootState } from "../../store/store";
// import {
//   EditOutlined,
//   SolutionOutlined,
//   DeleteOutlined,
// } from "@ant-design/icons";
// import moment from "moment";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsersListAction } from "../../store/reducers/usersListReducer";

// export default function UserManagement(): JSX.Element {
//   const dispatch = useDispatch<AppDispatch>();

//   // const { usersList } = useSelector(
//   //   (state: RootState) => state.usersListReducer
//   // );

//   // useEffect(() => {
//   //   dispatch(fetchUsersListAction());
//   // }, []);

//   // console.log(usersList);

//   const navigate = useNavigate();
//   const [loadings, setLoadings] = useState<boolean[]>([]);
//   const enterLoading = (index: number) => {
//     setLoadings((prevLoadings) => {
//       const newLoadings = [...prevLoadings];
//       newLoadings[index] = true;
//       return newLoadings;
//     });

//     setTimeout(() => {
//       setLoadings((prevLoadings) => {
//         const newLoadings = [...prevLoadings];
//         newLoadings[index] = false;
//         navigate("/admin/user-management/create-user");
//         return newLoadings;
//       });
//     }, 1000);
//   };
//   const { Search } = Input;

//   const onSearch = (value: string) => console.log(value);

//   interface DataType {
//     key: React.Key;
//     id: number;
//     name: string;
//     email: string;
//     password: string;
//     phone: string;
//     birthday: string;
//     gender: boolean | undefined;
//     role: string;
//   }

//   const columns: ColumnsType<DataType> = [
//     {
//       title: "STT",
//       dataIndex: "key",
//       width: "5%",
//     },
//     {
//       title: "Họ tên",
//       dataIndex: "name",
//       width: "14%",
//       //   filters: [
//       //     {
//       //       text: "Joe",
//       //       value: "Joe",
//       //     },
//       //     {
//       //       text: "Jim",
//       //       value: "Jim",
//       //     },
//       //   ],
//       // specify the condition of filtering result
//       // here is that finding the name started with `value`
//       //   onFilter: (value, record) => record.name.indexOf(value as string) === 0,
//       sorter: (a, b) => a.name.length - b.name.length,
//       sortDirections: ["descend"],
//     },
//     {
//       title: "Số điện thoại",
//       dataIndex: "phone",
//       width: "8%",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       width: "15%",
//       defaultSortOrder: "descend",
//       //   sorter: (a, b) => a.age - b.age,
//     },
//     {
//       title: "Ngày sinh",
//       dataIndex: "birthday",
//       width: "5%",
//     },
//     {
//       title: "Role",
//       dataIndex: "role",
//       width: "5%",
//     },
//     {
//       title: "Tương tác",
//       dataIndex: "tuongTac",
//       width: "10%",
//       render: (_, record) => {
//         return (
//           <>
//             <Link to={`/admin/user-management/${record.id}/edit-user`}>
//               <EditOutlined />
//             </Link>
//             {/* <a className="pl-4" href="">
//               <EditOutlined />
//             </a> */}
//             <a className="pl-4" href="">
//               <DeleteOutlined />
//             </a>
//           </>
//         );
//       },
//     },
//   ];

//   // const data = [
//   //   {
//   //     key: "1",
//   //     tickets: [],
//   //     deleteAt: false,
//   //     _id: "61604bcdd1a292001ce8f17a",
//   //     name: "Nguyễn Phong Hào Phóng",
//   //     email: "hao9x0159@gmail.com",
//   //     password: "$2a$10$9Ie16jOoUWm6opIEkbOXf.v8odVh9l2yNf.SSTwTgFaWG4t6fiFtO",
//   //     phone: "0945077142",
//   //     birthday: moment("1998-05-10T17:00:00.000Z").format("DD/MM/YYYY"),
//   //     gender: true,
//   //     address: "số 13 , 116/4 trại cá , hai bà trưng , hà nội",
//   //     type: "ADMIN",
//   //   },
//   // ];

//   const data = usersList.map((ele, index) => {
//     return {
//       key: index + 1,
//       id: ele.id,
//       name: ele.name,
//       email: ele.email,
//       password: ele.password,
//       phone: ele.phone,
//       // birthday: moment(ele.birthday).format("MM/DD/YYYY"),
//       birthday: ele.birthday,
//       gender: ele.gender,
//       role: ele.role,
//     };
//   });
//   const onChange: TableProps<DataType>["onChange"] = (
//     pagination,
//     filters,
//     sorter,
//     extra
//   ) => {
//     console.log("params", pagination, filters, sorter, extra);
//   };
//   return (
//     <>
//       <Space
//         style={{ width: "100%" }}
//         direction="vertical"
//         className="w-100 py-3"
//       >
//         <Button
//           type="primary"
//           loading={loadings[0]}
//           onClick={() => enterLoading(0)}
//         >
//           Thêm người dùng
//         </Button>
//         <Search
//           placeholder="input search text"
//           onSearch={onSearch}
//           enterButton
//         />
//       </Space>
//       <Table columns={columns} dataSource={data} onChange={onChange} />
//     </>
//   );
// }
import React from 'react'

export default function UserManagement() {
  return (
    <div>UserManagement</div>
  )
}
