import React, { Component } from "react";
import { Table } from "antd";
export default class CategoryManagement extends Component {
  render() {
    const columns = [
      { title: "分类名称", dataIndex: "name", key: "name" },

      {
        title: "操作",
        dataIndex: "",
        key: "x",
        render: () => (
          <div style={{ marginLeft: 0, width: 250 }}>
            <a href="##" style={{ marginRight: 20 }}>
              修改分类
            </a>
            <a href="##">查看子分类</a>
          </div>
        ),
      },
    ];
    const data = [
      {
        key: 1,
        name: "家电",
      },
      {
        key: 2,
        name: "运动用品",
      },
      {
        key: 3,
        name: "床上用品",
      },
      {
        key: 4,
        name: "男装",
      },
    ];
    return (
      <div>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.description}</p>
            ),
            rowExpandable: (record) => record.name === "122Not Expandable",
          }}
          dataSource={data}
        />
        ,
      </div>
    );
  }
}
