<template>
  <div>
    dictionary
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      size="middle"
      :scroll="{ x: 'calc(700px + 50%)', y: 240 }"
    />
  </div>
</template>

<script>
const columns = [
  {
    title: "SN",
    dataIndex: "SN",
    key: "SN",
    width: 100,
    align: "center",
    // fixed: "left",
  },
  {
    title: "PAK Groups",
    dataIndex: "PAK",
    key: "PAK",
    width: 100,
    align: "center",
  },
  {
    title: "Stock",
    children: [
      {
        title: "All readey for shippment",
        dataIndex: "shippment",
        key: "shippment",
        width: 200,
        align: "center",
      },
    ],
  },
  {
    title: "2013/10",
    children: [
      {
        title: "CW43",
        children: [
          {
            title: "Oct24",
            dataIndex: "Oct24",
            key: "Oct24",
            width: 200,
            align: "center",
          },
          {
            title: "Oct25",
            dataIndex: "Oct25",
            key: "Oct25",
            width: 200,
            align: "center",
          },
        ],
      },
      {
        title: "CW44",
        children: [
          {
            title: "Oct30",
            dataIndex: "Oct30",
            key: "Oct30",
            width: 200,
            align: "center",
          },
          {
            title: "Oct31",
            dataIndex: "Oct31",
            key: "Oct31",
            width: 200,
            align: "center",
          },
        ],
      },
    ],
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    SN: i,
    PAK: "John Brown",
    shippment: i + 1,
    Oct24: "Lake Park",
    Oct25: "C",
    Oct30: 2035,
    key: "Lake Street 42",
  });
}
export default {
  name: "systemDictionary",
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>

<style></style>
