import { List, Rate } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function RoomComments() {
  const { roomDetails } = useSelector(
    (state: RootState) => state.roomDetailsReducer
  );

  const { commentsList } = useSelector(
    (state: RootState) => state.commentsListReducer
  );

  const commentsListByRoomId = commentsList.filter((ele, idx) => {
    return ele.maPhong === roomDetails?.id;
  });

  const roomCommentsData = commentsListByRoomId.map((ele, idx) => {
    return {
      title: (
        <div>
          <Rate disabled defaultValue={ele.saoBinhLuan} /> -{" "}
          <span>{ele.ngayBinhLuan}</span>
        </div>
      ),
      description: `${ele.noiDung} <br/> ${ele.ngayBinhLuan}`,
    };
  });

  return (
    <div>
      <h5>Bình luận</h5>
      <List
        itemLayout="horizontal"
        dataSource={roomCommentsData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<div>{item.title}</div>}
              description={
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}
